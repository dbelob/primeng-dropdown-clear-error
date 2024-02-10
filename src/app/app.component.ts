import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { SelectButtonModule, SelectButtonOptionClickEvent } from 'primeng/selectbutton';

interface Country {
  name: string;
  code: string;
}

interface City {
  name: string;
  code: string;
}

interface Language {
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
    RouterOutlet,
    SelectButtonModule,
    TranslateModule
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

  languages: Language[] = [{name: 'English', code: 'en'}, {name: 'German', code: 'de'}];
  selectedLanguage = 'en';

  constructor(private translateService: TranslateService) {}

  ngOnInit() {
    this.translateService.use('en');

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

  changeLanguage(event: SelectButtonOptionClickEvent) {
    this.translateService.use(event.option.code);
  }
}
