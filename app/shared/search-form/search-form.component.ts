import { Control } from '@angular/common';
import {
    Component,
    OnInit
} from '@angular/core';
import 'rxjs/add/operator/debounceTime';

import { BlockStore } from '../../block';
import {
    TwitterService,
    FacebookService,
    GooglePlusService,
    FiveHundredPixelsService
} from '../../api';

@Component({
    selector: 'sms-search-form',
    template: require('to-string!./search-form.component.html'),
    providers: [
        BlockStore,
        TwitterService,
        FacebookService,
        GooglePlusService,
        FiveHundredPixelsService
    ]
})

/**
 * Search form component used by {@link BlockService} to query external APIs.
 */
export class SearchFormComponent implements OnInit {
    
    private searchTagControl;

    constructor( private blockService : BlockStore ) {
        this.searchTagControl = new Control();
    }

    public ngOnInit () {
        this.searchTagControl.valueChanges
            .debounceTime(1000)
            .subscribe( (tag) => {
                this.blockService.updateSearchTag( tag );
            });
    }

}
