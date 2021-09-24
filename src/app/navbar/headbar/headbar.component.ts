import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-headbar',
  templateUrl: './headbar.component.html',
  styleUrls: ['./headbar.component.css']
})
export class HeadbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  navigation(target){
    this.router.navigate([target]);
  }
}
