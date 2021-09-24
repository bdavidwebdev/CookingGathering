import { Component, OnInit } from '@angular/core';
import { Composant } from '../model/composant';
import { ComposantsServiceService } from '../services/composants-service.service';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {
  
  composants: Composant[];
  listType: String[];
  item: Composant;
  composantSelected: boolean = false;
  isMap: boolean = false;
  
  
  constructor(
            private compoService: ComposantsServiceService
  ) {
    this.compoService.getAll().subscribe(data => {
      this.composants = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...(e.payload.doc.data() as object) as Composant
        } as Composant;
      });      
    })
    this.compoService.getAllTest().subscribe(data => {
      let tab = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...(e.payload.doc.data() as object) as Composant
        } as Composant;
      })
      this.listType = tab.map(item => item.type[0]).filter((value, index, self) => self.indexOf(value) === index);
    })    
  }

  ngOnInit(): void {
  }

  getAllType(){    
    Object.entries(this.composants).forEach(
      ([c,v]) => {
        if(c == 'type'){
          this.listType.push(v[0]);
        }
      }
    )
    this.listType.filter(this.onlyUnique);
  }
  onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }
  onSelectType(type){
    this.compoService.getCompoByType(type).subscribe(data => {
      this.composants = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...(e.payload.doc.data() as object) as Composant
        } as Composant;
      });
    })
    this.isMap = false;
    this.composantSelected = false;
  }
  onSelectItem(item){
    this.item = this.composants.find(v => v.id === item.id);
    console.log(this.item.map);
    (this.item.map ? this.isMap = true : this.isMap = false)
    this.composantSelected = true;    
  }
}
