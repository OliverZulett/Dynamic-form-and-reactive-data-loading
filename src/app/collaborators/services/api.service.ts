import { Injectable } from '@angular/core';
import { from, mergeMap, of, switchMap, toArray } from 'rxjs';
import { MockApiService } from './mock-api.service';

@Injectable()
export class ApiService {
  constructor(private mockApiService: MockApiService) {}

  fetchCollaboratorsData() {
    return this.mockApiService.getCollaborators().pipe(
      switchMap((collaborators) =>
        from(collaborators).pipe(
          mergeMap(
            (collborator) =>
              from(this.mockApiService.getCollaboratorById(collborator.id)),
            4
          ),
          toArray()
        )
      )
    );
  }
}
