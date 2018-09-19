import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

import { Vine } from '../Vine';

@Component({
  selector: 'app-vine-item',
  templateUrl: './vine-item.component.html',
  styleUrls: ['./vine-item.component.css']
})
export class VineItemComponent implements OnInit {

  vine: Vine  = null;
  constructor(
    private activatedRoute: ActivatedRoute,
    private dataService: DataService) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params['id'];
    this.dataService.getVine(id).subscribe(vine => {this.vine = vine; console.log(vine);  });
  }

}
