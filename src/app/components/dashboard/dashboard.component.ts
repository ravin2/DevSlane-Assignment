import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgxSpinnerService } from 'ngx-spinner';
import {ApiService} from '../../api.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private http: HttpClient, private spinner: NgxSpinnerService, private apiService: ApiService,
    ) {
}
 allpost;
 notEmptyPost = true;
 notscrolly = true;
 itemList = [];
 selectedItems = [];
 selectedGender = [];
 settings = {};
 gendersettings = {};
 genderList = [];
 pageNumber = 1 ;
 itemNumbers = 10;
ngOnInit() {
  this.loadInitPost(this.pageNumber, this.itemNumbers, this.selectedItems.map(x => x.id ), 'both');
  this.itemList = [
    { id: 'us', itemName: 'USA' },
    { id: 'dk', itemName: 'Deccan' },
    { id: 'fr', itemName: 'France' },
    { id: 'gb', itemName: 'GB' },
  ];
  this.genderList = [
      { id: 'male', itemName: 'Male' },
      { id: 'female', itemName: 'Female' },
  ];
  this.selectedGender = [
    { id: 'male', itemName: 'Male' },
    { id: 'female', itemName: 'Female' },
  ];

  this.selectedItems = [
    { id: 'us', itemName: 'USA' }
  ];
  this.settings = {
    text: 'Select Countries',
    selectAllText: 'Select All',
    unSelectAllText: 'UnSelect All',
    classes: 'myclass custom-class'
  };
  this.gendersettings = {
    text: 'Select gender',
    selectAllText: 'Select All',
    unSelectAllText: 'UnSelect All',
    classes: 'myclass custom-class'
  };
}
 // load the Initial 6 posts
loadInitPost(page, num, location, gender) {
  this.apiService.getDetails(page, num, location, gender).subscribe((data) => {
    console.log(data);
    this.allpost = data;
  });
}

onItemSelect(item: any){
  console.log(item);
  console.log(this.selectedItems);
  this.loadInitPost( this.pageNumber, this.itemNumbers, this.selectedItems.map(x => x.id ), this.selectedGender.map(x => x.id));
}
OnItemDeSelect(item: any){
  console.log(item);
  console.log(this.selectedItems);
  this.loadInitPost( this.pageNumber, this.itemNumbers, this.selectedItems.map(x => x.id ), this.selectedGender.map(x => x.id));

}
onSelectAll(items: any){
  console.log(items);
  this.loadInitPost( this.pageNumber, this.itemNumbers, this.selectedItems.map(x => x.id ), this.selectedGender.map(x => x.id));

}
onDeSelectAll(items: any){
  console.log(items);
  this.loadInitPost( this.pageNumber, this.itemNumbers, this.selectedItems.map(x => x.id ), this.selectedGender.map(x => x.id));
}

onGenderSelect(item: any){
  console.log(item);
  console.log(this.selectedItems);
  this.loadInitPost( this.pageNumber, this.itemNumbers, this.selectedItems.map(x => x.id ), this.selectedGender.map(x => x.id));
}
OnGenderDeSelect(item: any){
  console.log(item);
  console.log(this.selectedItems);
  this.loadInitPost( this.pageNumber, this.itemNumbers, this.selectedItems.map(x => x.id ), this.selectedGender.map(x => x.id));
}
onGenderSelectAll(items: any){
  console.log(items);
  this.loadInitPost( this.pageNumber, this.itemNumbers, this.selectedItems.map(x => x.id ), this.selectedGender.map(x => x.id));
}
onGenderDeSelectAll(items: any){
  console.log(items);
  this.loadInitPost( this.pageNumber, this.itemNumbers, this.selectedItems.map(x => x.id ), this.selectedGender.map(x => x.id));
}
onScroll() {
    this.spinner.show();
    this.notscrolly = false;
    this.pageNumber++;
    this.itemNumbers = this.itemNumbers + 10;
    // this.loadInitPost( this.pageNumber, '10', this.selectedItems.map(x => x.id ), this.selectedGender.map(x => x.id));
    this.loadNextPost();
    console.log('asd');
}
  // load th next 6 posts
  loadNextPost() {
    // call http request
    this.apiService.getDetails(1, this.itemNumbers,
    this.selectedItems.map(x => x.id ), this.selectedGender.map(x => x.id))
    .subscribe( (data: any) => {
       this.allpost = data;
       this.notscrolly = true;
       console.log(this.allpost, 'pos');

     });
  }
}
