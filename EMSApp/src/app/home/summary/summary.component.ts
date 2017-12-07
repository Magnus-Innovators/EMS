import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { LinkService } from '../../shared-services/link.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css'],
  providers: []
})
export class SummaryComponent implements OnInit {

  constructor(private _linkService: LinkService) { }

  goToParentLink(pageName: string) {
    this._linkService.announceLink(pageName);
  }


  ngOnInit() {

  }

}
