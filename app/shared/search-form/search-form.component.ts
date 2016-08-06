import { Control } from '@angular/common';
import {
    Component,
    OnInit
} from '@angular/core';
import 'rxjs/add/operator/debounceTime';

import { BlockService } from '../../block';
import {
    TwitterService,
    FacebookService,
    InstagramService,
    GooglePlusService
} from '../../api';

@Component({
    selector: 'sms-search-form',
    template: require('to-string!./search-form.component.html'),
    providers: [
        BlockService,
        TwitterService,
        FacebookService,
        InstagramService,
        GooglePlusService
    ]
})

/**
 * Search form component used by {@link BlockService} to query external APIs.
 */
export class SearchFormComponent implements OnInit {
    
    private searchTagControl;

    constructor( private blockService : BlockService ) {
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
