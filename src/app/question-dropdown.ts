import { QuestionBase } from './question-base';
import { DataServiceBase } from './data-service/base-data.service';

export class DropdownQuestion extends QuestionBase<string> {

    controlType = 'dropdown';
    options: {key: string, value: string}[] = [];
    dataService: DataServiceBase<any>;

    constructor(options: {} = {}) {
        super(options);
        //this.options = options['options'] || [];
        this.dataService = options['dataService'];
        this.options = this.dataService.log();

    }
}
