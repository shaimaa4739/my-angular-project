import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { pagelayoutResolver } from './pagelayout.resolver';

describe('pagelayoutResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => pagelayoutResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
