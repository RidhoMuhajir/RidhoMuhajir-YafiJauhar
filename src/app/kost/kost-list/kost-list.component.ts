import { Component, OnInit } from '@angular/core';
import { Kost } from '../kost.model';

@Component({
  selector: 'app-kost-list',
  templateUrl: './kost-list.component.html',
  styleUrls: ['./kost-list.component.css']
})
export class KostListComponent implements OnInit {
  kosts:Kost[]=[
new Kost('WELCOME to INFOKOST','Have A Nice Day','./src/app/img/1.jpg'),
];
  constructor() { }

  ngOnInit() {
  }

}
