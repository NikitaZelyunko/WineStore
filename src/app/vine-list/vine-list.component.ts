import { Component, OnInit } from '@angular/core';

import {DataService} from '../data.service';

import {Vine} from '../Vine';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vine-list',
  templateUrl: './vine-list.component.html',
  styleUrls: ['./vine-list.component.css']
})
export class VineListComponent implements OnInit {

  vines: Vine[] = [];
  constructor(
    private dataService: DataService,
    private router: Router
  ) { }

  ngOnInit() {
    this.dataService.getVines().subscribe(vines => this.vines = vines);
  }

  goToVine(vine: Vine) {
    this.router.navigate(['vine/' + vine.id.toString()]);
  }

}
