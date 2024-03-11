import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ProductService } from '../../../Service/Product/product.service';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

declare global {
interface Window {
  google: any;
   googleTranslateElementInit: () => void;
  }
}

@Component({
  selector: 'app-sign-up-nav',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './sign-up-nav.component.html',
  styleUrl: './sign-up-nav.component.css'
})
export class SignUpNavComponent implements OnInit{
activeButton: string = '';

constructor(private router:Router ,  public productService: ProductService ){}
ngOnInit() {
  this.initGoogleTranslate();
}

initGoogleTranslate() {
  if (!window.google) {
    console.error("Google Translate API not loaded.");
    return;
  }

  window.googleTranslateElementInit = () => {
    new window.google.translate.TranslateElement({ pageLanguage: 'en' }, 'google_translate_element');
  };
}

  handleButtonClick(button: string): void {
    // Set the active button
    this.productService.setActiveButton(button);
    // Navigate to the corresponding route based on the button clicked
    if (button === 'signup') {
      this.router.navigate(['/sign-up']);
    } else if (button === 'login') {
      this.router.navigate(['/login']);
    }
  }
}


// ngOnInit(): void {

// }

// ngAfterViewInit(): void {
//   this.productService.translatePage('en');
// }


// onLanguageChange(event: Event) {
//   const selectedLanguage = (event.target as HTMLSelectElement).value;
//   if (selectedLanguage) {
//     console.log('Selected language:', selectedLanguage);
//     this.productService.translatePage(selectedLanguage);
//   }
// }

// translateContent(selectedLanguage: string) {
//   // Add your logic here to translate the content to the selected language
//   // You can use the Google Translate API or any other translation service
//   console.log('Translating content to:', selectedLanguage);
//   // Implement your translation logic here
// }



