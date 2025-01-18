import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { Pagelayout } from '../enums/pagelayout';
import { inject } from '@angular/core';
import { PagelayoutService } from '../services/pagelayout.service';

export const pagelayoutResolver = (inputLayout: Pagelayout): ResolveFn<void> => {
  return (_route:ActivatedRouteSnapshot, _state : RouterStateSnapshot) =>{
    inject(PagelayoutService).setLayout(inputLayout)
  };
};
