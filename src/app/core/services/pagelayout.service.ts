import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Pagelayout } from '../enums/pagelayout';

@Injectable({
  providedIn: 'root'
})
export class PagelayoutService {

  private layoutSubject = new Subject<Pagelayout>();
  public layout$ = this.layoutSubject.asObservable();

  constructor() { }

  setLayout(value: Pagelayout){
    this.layoutSubject.next(value)
  }
}
