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
  staticSelectedCountry: Country | undefined;
  dynamicSelectedCountry: Country | undefined;

  staticCities: City[] | undefined;
  staticSelectedCity: City | undefined;

  dynamicCities: City[] | undefined;
  dynamicSelectedCity: City | undefined;

  cityMap = new Map<string, City[]>([
    ['AU', [
      {name: 'Brisbane', code: 'BR'},
      {name: 'Melbourne', code: 'ML'},
      {name: 'Sydney', code: 'SY'}
    ]],
    ['DE', [
      {name: 'Berlin', code: 'BL'},
      {name: 'Hamburg', code: 'HM'},
      {name: 'Munich', code: 'MN'}
    ]],
    ['US', [
      {name: 'Chicago', code: 'CH'},
      {name: 'Los Angeles', code: 'LA'},
      {name: 'New York', code: 'NY'}
    ]]
  ]);

  ngOnInit() {
    this.countries = [
      {name: 'Australia', code: 'AU'},
      {name: 'Germany', code: 'DE'},
      {name: 'United States', code: 'US'}
    ];
  }

  onStaticCountryChange(country: Country) {
    if (country?.code) {
      this.staticCities = this.cityMap.get(country.code);
    } else {
      this.staticCities = [];
    }

    this.staticSelectedCity = undefined;
  }

  onDynamicCountryChange(country: Country) {
    if (country?.code) {
      this.dynamicCities = this.cityMap.get(country.code);
    } else {
      this.dynamicCities = [];
    }

    this.dynamicSelectedCity = undefined;
  }

  staticClear() {
    this.staticSelectedCountry = undefined;

    this.staticCities = [];
    this.staticSelectedCity = undefined;
  }

  dynamicClear() {
    this.dynamicSelectedCountry = undefined;

    this.dynamicCities = [];
    this.dynamicSelectedCity = undefined;
  }
}
