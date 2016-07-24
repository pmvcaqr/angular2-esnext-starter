import { Component } from '@angular/core';

import template from './wiki-list.template.html';
import { WikipediaService } from '../../services/wiki/wiki.service'

@Component({
  selector: 'wiki-list',
  template: template
})

export class WikiComponent {
  // items: Array < string > ;
  constructor(wikipediaService: WikipediaService) {
    this._wikipediaService = wikipediaService;
  }

  search(term) {
    this._wikipediaService.search(term)
      .then(items => this.items = items);
  }
}
