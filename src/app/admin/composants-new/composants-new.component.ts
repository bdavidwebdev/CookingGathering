import { Component, OnInit } from '@angular/core';
import { AngularFireStorageReference, AngularFireUploadTask } from '@angular/fire/storage';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Composant } from 'src/app/model/composant';
import { ComposantsServiceService } from 'src/app/services/composants-service.service';

@Component({
  selector: 'app-composants-new',
  templateUrl: './composants-new.component.html',
  styleUrls: ['./composants-new.component.css']
})
export class ComposantsNewComponent implements OnInit {

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
  mapLink: string = "";
  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;

  constructor(private compoService: ComposantsServiceService,
              private fb: FormBuilder,
              private router: Router
    ) { 
      this.compoForm = this.fb.group({
        type: this.fb.array([]),
        item: new FormControl(''),
        location: this.fb.array([]),
        image: new FormControl(''),
        map: "",
      })
    }

  ngOnInit(): void {
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
  }

  createCompo(){
    const newComp: Composant = {
      id: '',
      item: this.compoForm.value.item,
      type: this.compoForm.value.type,
      location: this.compoForm.value.location,
      image: this.compoForm.value.image,
      map: this.mapLink,
    }    
    console.log("newComp :", newComp);
    
    this.compoService.createCompo(newComp);
    return this.router.navigate(['/admin/comp'])
  }
}
