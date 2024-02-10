import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';

interface Country {
  name: string;
  code: string;
}

interface City {
  name: string;
  code: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    ButtonModule,
    FormsModule,
    DropdownModule,
    RouterOutlet
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  countries: Country[] | undefined;
  selectedCountry: Country | undefined;

  cities: City[] | undefined;
  selectedCity: City | undefined;

  ngOnInit() {
    this.countries = [
      {name: 'Australia', code: 'AU'},
      {name: 'Germany', code: 'DE'},
      {name: 'United States', code: 'US'}
    ];
  }

  onCountryChange(country: Country) {
    if (country?.code) {
      switch (country.code) {
        case 'AU':
          this.cities = [
            {name: 'Brisbane', code: 'BR'},
            {name: 'Melbourne', code: 'ML'},
            {name: 'Sydney', code: 'SY'}
          ];
          break;
        case 'DE':
          this.cities = [
            {name: 'Berlin', code: 'BL'},
            {name: 'Hamburg', code: 'HM'},
            {name: 'Munich', code: 'MN'}
          ];
          break;
        case 'US':
          this.cities = [
            {name: 'Chicago', code: 'CH'},
            {name: 'Los Angeles', code: 'LA'},
            {name: 'New York', code: 'NY'}
          ];
      }
    } else {
      this.cities = [];
    }

    this.selectedCity = undefined;
  }

  clear() {
    this.selectedCountry = undefined;

    this.cities = [];
    this.selectedCity = undefined;
  }
}
