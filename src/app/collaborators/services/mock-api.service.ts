import { Injectable } from '@angular/core';
import { from, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MockApiService {

  constructor() { }

  getCollaborators() {
    return from([
      {
        id: 1,
        name: "collaborator1"
      },
      {
        id: 2,
        name: "collaborator2"
      },
      {
        id: 3,
        name: "collaborator3"
      }
    ])
  }

  getCollaboratorById(id: string) {
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
    return of(mockDB.find(collaborator => collaborator.id === id))
  }
}
