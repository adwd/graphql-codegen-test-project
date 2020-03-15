import { Component, Input, Optional, ChangeDetectorRef } from '@angular/core';
import gql from 'graphql-tag';
import { LaunchesGQL } from 'src/generated/graphql';

const query = gql`
  query Launches {
    launchesPast(limit: 10) {
      mission_name
    }
  }
`;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'graphql-codegen-test-project';
  result = '';
  @Input() foo: any; // this @Input decorator does not affect

  constructor(private launches: LaunchesGQL, @Optional() cd: ChangeDetectorRef) { // this @Optional decorator causes error
    launches
      .fetch()
      .subscribe(res => (this.result = JSON.stringify(res)));
  }

}
