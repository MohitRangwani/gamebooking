import { Component, OnInit } from '@angular/core';
import { LocationService } from '../locaton.service';
import { Location } from '../location.model';
import { NgForm } from '@angular/forms';
import { ProviderService } from '../providers.service';
import { Providers } from '../providers.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
  locations:Location[]=[];
  

  constructor(public locationService : LocationService , public providerService : ProviderService,public router : Router) {
   
   }
  locSelected : String;
  ngOnInit(): void {
    this.locationService.getLocation()
    .subscribe(resp=>{
        console.log(resp.body);
      this.locations=resp.body;
    });
    
  }
  onFormSubmit(locForm : NgForm){
   
   this.locSelected=locForm.value.loc;
  this.locationService.selLocation(this.locSelected);
    this.router.navigate(['/providers']);
  
  
    }
   
    
}
