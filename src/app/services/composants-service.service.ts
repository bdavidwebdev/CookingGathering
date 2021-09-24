import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { Composant } from '../model/composant';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ComposantsServiceService {

  composantsList: Observable<Composant[]>;
  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;
  downloadURL: Observable<string>;

  constructor(
    private db: AngularFirestore,
    private afStorage: AngularFireStorage
  ) { 
    this.composantsList = this.db.collection<Composant>('composants').valueChanges();
  }

  getAll(){
    return this.db.collection('composants', ref => ref.orderBy('item', 'asc')).snapshotChanges();
  }
  getAllTest(){
    return this.db.collection('composants', ref => ref.orderBy('type', 'asc')).snapshotChanges();
  }
  getCompoById(id:string){
    return this.db.collection('composants', ref => ref.where('id', '==', id)).snapshotChanges()
  }
  getCompoByType(type: string){
    return this.db.collection('composants', ref => ref.where('type', 'array-contains', type)).snapshotChanges()
  }
  async uploadMap(map){
    if(map){
      const filePath = `images/${map.name}`;
      const snap = await this.afStorage.upload(filePath, map);
      const url = await snap.ref.getDownloadURL();
      return url;
      //const id = this.db.createId();
      //this.ref = this.afStorage.ref('images/' + id);
      //this.task = this.ref.put(map)
    }
  }

  async createCompo(compo: Composant){
    const id = this.db.createId();
    compo.id = id;
    await this.db
            .collection('composants')
            .add(compo)
  }

  async editCompo(compo: Composant){
    delete compo.id;
  await this.db
        .doc('composants/' + compo.id)
        .update(compo)
  }
  async deleteCompo(compoId: string){
  await this.db
        .doc('composants/' + compoId)
        .delete()
  }
}
