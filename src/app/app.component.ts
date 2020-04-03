
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { NamesGQL } from '../generated/graphql';

@Component({
  selector: 'app-root',
  template: '<app-names></app-names>',
})
export class AppComponent {

  usersName$: Observable<string[]>;

  constructor(userNameService: NamesGQL) {
    this.usersName$ = userNameService.fetch({}).pipe(
      map(result => result.data.names.map(user => user.name)),
    );
  }
}
