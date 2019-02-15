import { Injectable } from '@angular/core';
import { DataServiceBase } from './base-data.service';
import { Model } from './data-model';

@Injectable({
  providedIn: 'root'
})
export class ModelDataService implements DataServiceBase<Model> {

  log() {
    return [
      { key: 'solid', value: 'Solid' },
      { key: 'great', value: 'Great' },
      { key: 'good', value: 'Good' },
      { key: 'unproven', value: 'Unproven' }
    ];
  }

  constructor() { }
}
