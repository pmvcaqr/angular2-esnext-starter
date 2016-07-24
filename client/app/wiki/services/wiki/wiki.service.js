import { Injectable } from '@angular/core';
import { URLSearchParams, Jsonp } from '@angular/http';

@Injectable()
export class WikipediaService {
  constructor(jsonp: Jsonp) {
    this._jsonp = jsonp;
  }

  search(term) {
    var search = new URLSearchParams()
    search.set('action', 'opensearch');
    search.set('search', term);
    search.set('format', 'json');
    return this._jsonp
      .get('http://en.wikipedia.org/w/api.php?callback=JSONP_CALLBACK', { search })
      .toPromise()
      .then((response) => response.json()[1]);
  }
}
