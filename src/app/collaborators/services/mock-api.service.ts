import { Injectable } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import { Collaborator } from '../models/collaborator.model';

@Injectable()
export class MockApiService {

  constructor() { }

  getCollaborators(): Observable<Collaborator[]> {
    const mockCollaborators = [
      {
        id: "1",
        name: "collaborator1"
      },
      {
        id: "2",
        name: "collaborator2"
      },
      {
        id: "3",
        name: "collaborator3"
      }
    ]
    return of(mockCollaborators)
  }

  getCollaboratorById(id: string): Observable<Collaborator | undefined> {
    const mockDB = [
      {
        id: "1",
        name: "collaborator1",
        address: "address1",
        phone: "+591-78934120"
      },
      {
        id: "2",
        name: "collaborator2",
        address: "address2",
        phone: "+591-75412120"
      },
      {
        id: "3",
        name: "collaborator3",
        address: "address3",
        phone: "+591-7654120"
      }
    ];
    const collaboratorFound = mockDB.find(collaborator => collaborator.id === id);
    return of(collaboratorFound)
  }
}
