import { Component,inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HousingLocation } from '../housing-location/housing-location';
import { HousingService } from '../housing.service';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  template: `
   <article>
    <img class="listing-photo" [src]="housingLocation?.photo"/>
    <section class="listing-description">
      <h2 class="listing-heading">{{housingLocation?.name}}</h2>
      <p class="listing-location">{{housingLocation?.city}}, {{housingLocation?.state}}</p>
    </section>
    <section class="listing-features">
      <h2 class="section-heading">About This Housing Location</h2>
      <ul>
        <li>Units Available : {{housingLocation?.availableUnits}}</li>
        <li>Does This Location Has Wifi : {{housingLocation?.wifi}}</li>
        <li>Does This Location Have Laundry : {{housingLocation?.laundry}}</li>
      </ul>
    </section>
    <section class="listing-apply">
      <h2 class="section-heading">Apply To Live Here</h2>
      <button class="primary" type="button">Apply Now </button>
    </section>
   </article>
  `,
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  route : ActivatedRoute = inject(ActivatedRoute);
  housingService = inject (HousingService);
  housingLocation : HousingLocation | undefined;
  constructor(){
    const housingLocationId= Number(this.route.snapshot.params['id']);
    this.housingLocation=this.housingService.getHousingLocationById(housingLocationId);
  }
}
