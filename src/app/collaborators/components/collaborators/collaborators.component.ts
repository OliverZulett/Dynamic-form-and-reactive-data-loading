import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-collaborators',
  templateUrl: './collaborators.component.html',
  styles: [
  ]
})
export class CollaboratorsComponent implements OnInit {

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.fetchCollaboratorsData()
      .subscribe(collaboratorsData => console.log(collaboratorsData))
  }

}
