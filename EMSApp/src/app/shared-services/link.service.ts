import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class LinkService {

  constructor() { }

  private linkSource = new Subject<string>();

  linkSourceData$ = this.linkSource.asObservable();

  announceLink(pageName: string) {
    this.linkSource.next(pageName);
  }

}
