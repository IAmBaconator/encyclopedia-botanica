import { Component, computed } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  headerLogo = computed(() => {
    return 'assets/encyclopedia-botanica-logo.png';
  });
}
