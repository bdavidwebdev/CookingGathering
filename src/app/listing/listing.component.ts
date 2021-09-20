import { Component, OnInit } from '@angular/core';
import { Compo } from '../compo';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {

  COMPOSANTS: Compo[] = [
  {id: 1, type: "Herbs", item: "Basil", location: "Brightwood", img: ""},
  {id: 2, type: "Herbs", item: "Basil", location: "Brimstone Sands", img: ""},
  {id: 3, type: "Herbs", item: "Basil", location: "Everfall", img: ""},
  {id: 4, type: "Herbs", item: "Cinnamon", location: "Cutlass Keys", img: ""},
  {id: 5, type: "Herbs", item: "Cinnamon", location: "Edengrove", img: ""},
  {id: 6, type: "Herbs", item: "Cinnamon", location: "First Light", img: ""},
  {id: 7, type: "Herbs", item: "Dill", location: "Edengrove", img: ""},
  {id: 8, type: "Herbs", item: "Dill", location: "First Light", img: ""},
  {id: 9, type: "Herbs", item: "Dill", location: "Mourningdale", img: ""},
  {id: 10, type: "Herbs", item: "Garlic", location: "Brimstone Sands", img: ""},
  {id: 11, type: "Herbs", item: "Garlic", location: "Everfall", img: ""},
  {id: 12, type: "Herbs", item: "Garlic", location: "Great Cleave", img: ""},
  {id: 13, type: "Herbs", item: "Ginger", location: "Ebonscale Reach", img: ""},
  {id: 14, type: "Herbs", item: "Ginger", location: "Reekwater", img: ""},
  {id: 15, type: "Herbs", item: "Ginger", location: "Windsward", img: ""},
  {id: 16, type: "Herbs", item: "Mint", location: "Restless Shore", img: ""},
  {id: 17, type: "Herbs", item: "Mint", location: "Weaver's Fen", img: ""},
  {id: 18, type: "Herbs", item: "Mint", location: "Windsward", img: ""},
  {id: 19, type: "Herbs", item: "Nutmeg", location: "First Light", img: ""},
  {id: 20, type: "Herbs", item: "Nutmeg", location: "Great Cleave", img: ""},
  {id: 21, type: "Herbs", item: "Nutmeg", location: "Weaver's Fen", img: ""},
  {id: 22, type: "Herbs", item: "Oregano", location: "Monarch's Bluff", img: ""},
  {id: 23, type: "Herbs", item: "Oregano", location: "Restless Shore", img: ""},
  {id: 24, type: "Herbs", item: "Oregano", location: "Shattered Mountain", img: ""},
  {id: 25, type: "Herbs", item: "Paprika", location: "Brightwood", img: ""},
  {id: 26, type: "Herbs", item: "Paprika", location: "Monarch's Bluff", img: ""},
  {id: 27, type: "Herbs", item: "Paprika", location: "Shattered Mountain", img: ""},
  {id: 28, type: "Herbs", item: "Parsley", location: "Cutlass Keys", img: ""},
  {id: 29, type: "Herbs", item: "Parsley", location: "Edengrove", img: ""},
  {id: 30, type: "Herbs", item: "Parsley", location: "Mourningdale", img: ""},
  {id: 31, type: "Herbs", item: "Peppercorn", location: "Cutlass Keys", img: ""},
  {id: 32, type: "Herbs", item: "Peppercorn", location: "Monarch's Bluff", img: ""},
  {id: 33, type: "Herbs", item: "Peppercorn", location: "Mourningdale", img: ""},
  {id: 34, type: "Herbs", item: "Rosemary", location: "Great Cleave", img: ""},
  {id: 35, type: "Herbs", item: "Rosemary", location: "Restless Shore", img: ""},
  {id: 36, type: "Herbs", item: "Rosemary", location: "Weaver's Fen", img: ""},
  {id: 37, type: "Herbs", item: "Saffron", location: "Brightwood", img: ""},
  {id: 38, type: "Herbs", item: "Saffron", location: "First Light", img: ""},
  {id: 39, type: "Herbs", item: "Saffron", location: "Mourningdale", img: ""},
  {id: 40, type: "Herbs", item: "Saffron", location: "Brightwood", img: ""},
  {id: 41, type: "Herbs", item: "Sage", location: "Everfall", img: ""},
  {id: 42, type: "Herbs", item: "Sage", location: "Reekwater", img: ""},
  {id: 43, type: "Herbs", item: "Tarragon", location: "Brightwood", img: ""},
  {id: 44, type: "Herbs", item: "Tarragon", location: "Brimstone Sands", img: ""},
  {id: 45, type: "Herbs", item: "Tarragon", location: "Reekwater", img: ""},
  {id: 46, type: "Herbs", item: "Thyme", location: "Ebonscale Reach", img: ""},
  {id: 47, type: "Herbs", item: "Thyme", location: "Reekwater", img: ""},
  {id: 48, type: "Herbs", item: "Thyme", location: "Windsward", img: ""},
  {id: 49, type: "Provision Crate", item: "Apple", location: "Brightwood", img: ""},
  {id: 50, type: "Provision Crate", item: "Apple", location: "Brimstone Sands", img: ""},
  {id: 51, type: "Provision Crate", item: "Apple", location: "Reekwater", img: ""},
  {id: 52, type: "Provision Crate", item: "Cauliflower", location: "Edengrove", img: ""},
  {id: 53, type: "Provision Crate", item: "Cauliflower", location: "First Light", img: ""},
  {id: 54, type: "Provision Crate", item: "Cauliflower", location: "Mourningdale", img: ""},
  {id: 55, type: "Provision Crate", item: "Coconut", location: "Restless Shore", img: ""},
  {id: 56, type: "Provision Crate", item: "Coconut", location: "Weaver's Fen", img: ""},
  {id: 57, type: "Provision Crate", item: "Coconut", location: "Windsward", img: ""},
  {id: 58, type: "Provision Crate", item: "Lemon", location: "Great Cleave", img: ""},
  {id: 59, type: "Provision Crate", item: "Lemon", location: "Restless Shore", img: ""},
  {id: 60, type: "Provision Crate", item: "Lemon", location: "Weaver's Fen", img: ""},
  {id: 61, type: "Provision Crate", item: "Melon", location: "First Light", img: ""},
  {id: 62, type: "Provision Crate", item: "Melon", location: "Great Cleave", img: ""},
  {id: 63, type: "Provision Crate", item: "Melon", location: "Weaver's Fen", img: ""},
  {id: 64, type: "Provision Crate", item: "Milk", location: "Brightwood", img: ""},
  {id: 65, type: "Provision Crate", item: "Milk", location: "Brimstone Sands", img: ""},
  {id: 66, type: "Provision Crate", item: "Milk", location: "Cutlass Keys", img: ""},
  {id: 67, type: "Provision Crate", item: "Milk", location: "Ebonscale Reach", img: ""},
  {id: 68, type: "Provision Crate", item: "Milk", location: "Edengrove", img: ""},
  {id: 69, type: "Provision Crate", item: "Milk", location: "Everfall", img: ""},
  {id: 70, type: "Provision Crate", item: "Milk", location: "First Light", img: ""},
  {id: 71, type: "Provision Crate", item: "Milk", location: "Great Cleave", img: ""},
  {id: 72, type: "Provision Crate", item: "Milk", location: "Monarch's Bluff", img: ""},
  {id: 73, type: "Provision Crate", item: "Milk", location: "Mourningdale", img: ""},
  {id: 74, type: "Provision Crate", item: "Milk", location: "Reekwater", img: ""},
  {id: 75, type: "Provision Crate", item: "Milk", location: "Restless Shore", img: ""},
  {id: 76, type: "Provision Crate", item: "Milk", location: "Shattered Mountain", img: ""},
  {id: 77, type: "Provision Crate", item: "Milk", location: "Weaver's Fen", img: ""},
  {id: 78, type: "Provision Crate", item: "Milk", location: "Windsward", img: ""},
  {id: 79, type: "Provision Crate", item: "Onion", location: "Cutlass Keys", img: ""},
  {id: 80, type: "Provision Crate", item: "Onion", location: "Edengrove", img: ""},
  {id: 81, type: "Provision Crate", item: "Onion", location: "First Light", img: ""},
  {id: 82, type: "Provision Crate", item: "Orange", location: "Cutlass Keys", img: ""},
  {id: 83, type: "Provision Crate", item: "Orange", location: "Edengrove", img: ""},
  {id: 84, type: "Provision Crate", item: "Orange", location: "Mourningdale", img: ""},
  {id: 85, type: "Provision Crate", item: "Rice", location: "Monarch's Bluff", img: ""},
  {id: 86, type: "Provision Crate", item: "Rice", location: "Restless Shore", img: ""},
  {id: 87, type: "Provision Crate", item: "Rice", location: "Shattered Mountain", img: ""},
  {id: 88, type: "Provision Crate", item: "Salt", location: "Brightwood", img: ""},
  {id: 89, type: "Provision Crate", item: "Salt", location: "Brimstone Sands", img: ""},
  {id: 90, type: "Provision Crate", item: "Salt", location: "Everfall", img: ""},
  {id: 91, type: "Provision Crate", item: "String Bean", location: "Ebonscale Reach", img: ""},
  {id: 92, type: "Provision Crate", item: "String Bean", location: "Everfall", img: ""},
  {id: 93, type: "Provision Crate", item: "String Bean", location: "Reekwater", img: ""},
  {id: 94, type: "Provision Crate", item: "Sugar", location: "Ebonscale Reach", img: ""},
  {id: 95, type: "Provision Crate", item: "Sugar", location: "Reekwater", img: ""},
  {id: 96, type: "Provision Crate", item: "Sugar", location: "Windsward", img: ""},
  {id: 97, type: "Provision Crate", item: "Tomato", location: "Cutlass Keys", img: ""},
  {id: 98, type: "Provision Crate", item: "Tomato", location: "Monarch's Bluff", img: ""},
  {id: 99, type: "Provision Crate", item: "Tomato", location: "Mourningdale", img: ""},
  {id: 100, type: "Provision Crate", item: "Yeast", location: "Brightwood", img: ""},
  {id: 101, type: "Provision Crate", item: "Yeast", location: "Monarch's Bluff", img: ""},
  {id: 102, type: "Provision Crate", item: "Yeast", location: "Shattered Mountain", img: ""},
  ];

  UNIQUE_TYPE = [];
  UNIQUE_ITEM = [];
  UNIQUE_LOCATION = [];
  DYN_TABLE = [];
  constructor() { 
    this.COMPOSANTS = this.getImg(this.COMPOSANTS);
    this.UNIQUE_TYPE = this.getUniqueType(this.COMPOSANTS);
    this.UNIQUE_ITEM = this.getImg(this.getUniqueItem(this.COMPOSANTS))
    this.UNIQUE_LOCATION = this.getUniqueLoc(this.COMPOSANTS)
    this.DYN_TABLE = this.COMPOSANTS;
  }

  ngOnInit(): void {
  }

  getImg(list){
    for (let i = 0; i < list.length; i++) {
      let comp = list[i].item.toLowerCase().split(" ").join("");
      this.checkIfImageExists(comp, (exists) => {
        if(exists) list[i].img = "https://cdn.nwdb.info/db/v5/icons/items/resource/" + comp + "t1.png";
        else if(list[i].item.includes("Saffron")) list[i].img = "https://cdn.nwdb.info/db/v5/icons/items/resource/herbt1.png";
        else list[i].img = "https://cdn.nwdb.info/db/v5/icons/items/consumable/" + comp + "t1.png";
      }) 
    }
    return list;
  }
  checkIfImageExists = (url: string, callback: (exists: boolean) => void) => {
    const img = new Image();
    img.src = "https://cdn.nwdb.info/db/v5/icons/items/resource/" + url + "t1.png";
  
    if (img.complete) {
      callback(true);
    } else {
      img.onload = () => {
        callback(true);
      };
  
      img.onerror = () => {
        callback(false);
      };
    }
  };

  getUniqueType(COMPOSANTS: any){
    var tab = [];
    for (let i = 0; i < COMPOSANTS.length; i++) {
          tab.push(COMPOSANTS[i].type);
    }
    return tab.filter(this.onlyUnique).sort();   
  }
  getUniqueItem(COMP){
    var flags = [], res = [], l = COMP.length, i;
    for(i = 0; i<l; i++){
      if(flags[COMP[i].item]) continue;
      flags[COMP[i].item] = true;
      res.push(COMP[i])
    }
    return res;    
  }
  getUniqueLoc(COMPOSANTS){
    var tab = [];
    for (let i = 0; i < COMPOSANTS.length; i++) {
          tab.push(COMPOSANTS[i].location);
    }
    return tab.filter(this.onlyUnique).sort();   
  }
  
  onlyUnique(value, index, self) { 
    return self.indexOf(value) === index;
  }
  onSelectType(choice){
    var tab = [];
    for (let i = 0; i < this.COMPOSANTS.length; i++) {
      if(this.COMPOSANTS[i].type.includes(choice) || this.COMPOSANTS[i].item.includes(choice) || this.COMPOSANTS[i].location.includes(choice)) {
        tab.push(this.COMPOSANTS[i]);
      }
    }
    console.log(tab);
    
    this.DYN_TABLE = tab;
  }
}
