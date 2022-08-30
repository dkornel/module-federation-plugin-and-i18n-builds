import { Component, Inject, LOCALE_ID } from '@angular/core';
import { AuthLibService } from 'auth-lib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'shell';
  welcomeMessage = $localize`Welcome Shell App`;

  constructor(
    @Inject(LOCALE_ID) public readonly localeId: string,
    private service: AuthLibService
  ) {
    this.service.login('Max', null);
  }
}
