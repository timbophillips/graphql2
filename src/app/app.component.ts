
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { PatientsGQL } from '../generated/graphql';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  usersName$: Observable<string[]>;

  constructor(userNameService: PatientsGQL) {
    this.usersName$ = userNameService.fetch({}).pipe(
      map(result => result.data.names.map(user => user.name)),
    );
  }
}
