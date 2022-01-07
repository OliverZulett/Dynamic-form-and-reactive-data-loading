import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Collaborator } from '../../models/collaborator.model';

@Component({
  selector: 'app-collaborators',
  templateUrl: './collaborators.component.html',
  styles: [
  ]
})
export class CollaboratorsComponent implements OnInit {

  collaborators!: any;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.fetchCollaboratorsData()
      .subscribe(collaboratorsData => this.collaborators = collaboratorsData)
  }

}
