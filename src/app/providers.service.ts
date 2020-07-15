import { Providers } from './providers.model';
import { Location } from './location.model';
import { Injectable } from '@angular/core';
@Injectable()
export class ProviderService{
bandraProvider1 : Providers;
bandraProvider2 : Providers;
bandraProvider3 :Providers;
bandraProviders=[];
andheriProvider1 : Providers;
andheriProvider2 : Providers;
andheriProviders=[];
dadarProvider1 : Providers;
dadarProvider2 : Providers;
dadarProvider3 : Providers;
dadarProviders=[];
constructor(){
    this.bandraProvider1=new Providers(1 , "Bandra Provider 1" , "Bandra Address 1" );
    this.bandraProvider2=new Providers(2 , "Bandra Provider 2" , "Bandra Address 2" );
    this.bandraProvider3=new Providers(3 , "Bandra Provider 3" , "Bandra Address 3" );
    this.bandraProviders.push(this.bandraProvider1);
    this.bandraProviders.push(this.bandraProvider2);
    this.bandraProviders.push(this.bandraProvider3);

    this.andheriProvider1=new Providers(1 , "Andheri Provider 1" , "Andheri Address 1" );
    this.andheriProvider2=new Providers(2 , "Andheri Provider 2" , "Andheri Address 2" );
    this.andheriProviders.push(this.andheriProvider1);
    this.andheriProviders.push(this.andheriProvider2);

    this.dadarProvider1=new Providers(1 , "Dadar Provider 1" , "Dadar Address 1" );
    this.dadarProvider2=new Providers(2 , "Dadar Provider 2" , "Dadar Address 2" );
    this.dadarProvider3=new Providers(3 , "Dadar Provider 3" , "Dadar Address 3" );
    this.dadarProviders.push(this.dadarProvider1);
    this.dadarProviders.push(this.dadarProvider2);
    this.dadarProviders.push(this.dadarProvider3);    
}
providers:Providers[]=[];

getProviders(loc : String) : Providers[]{
    if(loc.localeCompare("Bandra")== 0 ){
        this.providers=this.bandraProviders;
    }
    if(loc.localeCompare("Andheri")== 0 ){
        this.providers=this.andheriProviders;
    }
    if(loc.localeCompare("Dadar")== 0 ){
        this.providers=this.dadarProviders;
    }
return this.providers;
}
selectProvider:Providers;
selectedProvider(selectProvider : Providers): Providers{
this.selectProvider=selectProvider;
return selectProvider;
}
}