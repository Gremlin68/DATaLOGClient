import { Component, OnInit } from '@angular/core';
import{RepositoryService}from 'src/app/shared/services/repository.service'
import { RvLocation } from './../../_interfaces/rvlocation.model';

@Component({
  selector: 'app-rvlocation-list',
  templateUrl: './rvlocation-list.component.html',
  styleUrls: ['./rvlocation-list.component.css']
})
export class RvlocationListComponent implements OnInit {
  public rvlocations: RvLocation[];

  constructor(private repository: RepositoryService) { }

  ngOnInit() {
    this.getAllRvLocations();
  }


  public getAllRvLocations(){
    let apiAddress: string = "api/rvlocation"

    this.repository.getData(apiAddress)
    .subscribe(res => {
      this.rvlocations = res as RvLocation[];
    })
  }
}