import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { PlayersListPage } from '../players-list/players-list';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = ContactPage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  tab4Root = PlayersListPage;

  constructor() {

  }
}
