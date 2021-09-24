import { Component, OnInit } from '@angular/core';
import { AngularFireStorageReference, AngularFireUploadTask } from '@angular/fire/storage';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Composant } from 'src/app/model/composant';
import { ComposantsServiceService } from 'src/app/services/composants-service.service';

@Component({
  selector: 'app-composants-edit',
  templateUrl: './composants-edit.component.html',
  styleUrls: ['./composants-edit.component.css']
})
export class ComposantsEditComponent implements OnInit {

  obsComposants: Observable<Composant>;
  composant: Composant;
  locations = [
                "Brightwood",
                "Brimstone Sands",
                "Cutlass Keys",
                "Ebonscale Reach",
                "Edengrove",
                "Everfall",
                "First Light",
                "Great Cleave",
                "Monarch's Bluff",
                "Mourningdale",
                "Reekwater",
                "Restless Shore",
                "Shattered Mountain",
                "Weaver's Fen",
                "Windsward"
  ];
  types = [
              "Herb",
              "Provision Containers",
              "Plant"
  ]

  compoForm: FormGroup;
  imageLink: string;
  mapLink: Observable<string>;
  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;

  constructor(private route: ActivatedRoute,
              private compoService: ComposantsServiceService,
              private fb: FormBuilder,
              private router: Router,
    ) {
    }

  ngOnInit(): void {
    this.obsComposants.subscribe(data => {
      this.composant = data;
      this.compoForm = this.fb.group({
        type: this.fb.array(data.type),
        item: new FormControl(data.item),
        location: this.fb.array(data.location),
        image: new FormControl(data.image),
        map: new FormControl(data.map)
      })

      console.log("compo :",this.compoForm.value);
      
    })
  }
  onLoadImage(e){
    this.imageLink = e.target.value;
  }
  onLocationChange(e){
    const isArray: FormArray = this.compoForm.get('location') as FormArray;

    if (e.target.checked) {
      isArray.push(new FormControl(e.target.value));
    } else {
      let i: number = 0;
      isArray.controls.forEach((item: FormControl) => {
        if (item.value == e.target.value) {
          isArray.removeAt(i);
          return;
        }
        i++;
      });
    }
  }
  onTypeChange(e){
    const isArray: FormArray = this.compoForm.get('type') as FormArray;

    if (e.target.checked) {
      isArray.push(new FormControl(e.target.value));
    } else {
      let i: number = 0;
      isArray.controls.forEach((item: FormControl) => {
        if (item.value == e.target.value) {
          isArray.removeAt(i);
          return;
        }
        i++;
      });
    }
  }

  async uploadMap(e){
    this.mapLink = await this.compoService.uploadMap(e.target.files[0]);
    console.log(this.mapLink);
    
  }

  editCompo(){
    const newComp: Composant = {
      id: this.composant.id,
      item: this.compoForm.value.item,
      type: this.compoForm.value.type,
      location: this.compoForm.value.location,
      image: this.compoForm.value.image,
      map: this.compoForm.value.map,
    }    
    this.compoService.editCompo(newComp);
    return this.router.navigate(['/admin/comp'])
  }
}