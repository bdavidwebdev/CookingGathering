import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Composant } from 'src/app/model/composant';
import { ComposantsServiceService } from 'src/app/services/composants-service.service';

@Component({
  selector: 'app-composants',
  templateUrl: './composants.component.html',
  styleUrls: ['./composants.component.css']
})
export class ComposantsComponent implements OnInit {

    composants: Composant[];
  constructor(
    public compoService: ComposantsServiceService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.compoService.getAll().subscribe(data => {
      this.composants = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...(e.payload.doc.data() as object) as Composant
        } as Composant;
      })
    })
    
  }

  updateCompo(compo: Composant){
    this.compoService.editCompo(compo);
    return this.router.navigate(['/admin/comp'])
  }

  deleteCompo(id: string){
    console.log(id);
    
    this.compoService.deleteCompo(id);
    return this.router.navigate(['/admin/comp'])
  }


}
