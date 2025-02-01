import { Component } from '@angular/core';
import { SHARED_IMPORTS } from '../../shared-imports';

@Component({
  selector: 'app-nav-bar',
  imports: [...SHARED_IMPORTS],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
  isDarkTheme = false;

  ngOnInit() {
    this.getAppTheme();
  }

  getAppTheme(){
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      this.isDarkTheme = true;
    }
  }
  
  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
    document.body.classList.toggle('dark-theme', this.isDarkTheme);
    localStorage.setItem('theme', this.isDarkTheme ? 'dark' : 'light');
  }
}
