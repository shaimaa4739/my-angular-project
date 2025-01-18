import { Component } from '@angular/core';
import { SHARED_IMPORTS } from '../../shared-imports';
import { HeaderComponent } from '../../components/header/header.component';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-master-layout',
  imports: [...SHARED_IMPORTS,HeaderComponent, NavBarComponent, FooterComponent],
  templateUrl: './master-layout.component.html',
  styleUrl: './master-layout.component.scss'
})
export class MasterLayoutComponent {

}
