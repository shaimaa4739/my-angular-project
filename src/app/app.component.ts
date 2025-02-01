import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Pagelayout } from './core/enums/pagelayout';
import { PagelayoutService } from './core/services/pagelayout.service';
import { SHARED_IMPORTS } from './shared/shared-imports';
import { MasterLayoutComponent } from './shared/layouts/master-layout/master-layout.component';
import { AuthLayoutComponent } from './shared/layouts/auth-layout/auth-layout.component';
import { ErrorLayoutComponent } from './shared/layouts/error-layout/error-layout.component';

@Component({
  selector: 'app-root',
  imports: [SHARED_IMPORTS ,RouterOutlet,MasterLayoutComponent, AuthLayoutComponent,  ErrorLayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  readonly PageLayout = Pagelayout;

  constructor(public _pagelayoutService: PagelayoutService){}

  ngOnInit(){
    this.initlizeAppTheme();
  }

  initlizeAppTheme(){
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      document.body.classList.add('dark-theme');
    }
  }

}
