import { Component, OnInit } from '@angular/core';
import { Providers } from '../providers.model';
import { ProviderService } from '../providers.service';
import { Router } from '@angular/router';
import { LocationService } from '../locaton.service';

@Component({
  selector: 'app-providers',
  templateUrl: './providers.component.html',
  styleUrls: ['./providers.component.css']
})
export class ProvidersComponent implements OnInit {
  providers=[];
  noOfProviders : Number;
  selectedLocation:String;
  constructor(public providerService: ProviderService,public router:Router, public locationService:LocationService) {
    this.selectedLocation=locationService.selectedLocation;
    this.providers=this.providerService.getProviders(this.selectedLocation);
    this.noOfProviders=this.providers.length;
   }

  ngOnInit(): void {
  }

  
  OnSelectProvider(selectedProvider : Providers) {
    console.log(selectedProvider);
    this.providerService.selectedProvider(selectedProvider);
    this.router.navigate(['/games']);
  }
  back(){
    this.router.navigate(['/location']);
  }

}
