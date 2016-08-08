import { Title } from '@angular/platform-browser';
import {
    Component,
    OnInit
} from '@angular/core';

import { BlockListComponent }   from './block';
import { SearchFormComponent }  from './shared';

@Component({
    selector: 'sms-app',
    template: require('to-string!./app.component.html'),
    providers: [ Title ],
    directives: [
        SearchFormComponent,
        BlockListComponent
    ]
})

/**
 * Main component class for social media search
 */
export class AppComponent implements OnInit {

    // Title of our app.
    private title : string = 'Social media search';

    constructor( private titleService: Title ) {}

    public ngOnInit () {
        this.setTitle();
    }

    public setTitle () {
        // Set the title of our page.
        this.titleService.setTitle( this.title );
    }

}
