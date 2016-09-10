import { Observable } from 'rxjs/Observable';

import {

    SearchCriteria

} from '../shared';

import { Block } from '../../block/shared/';

export interface BlockProvider {
    search( searchCriteria : SearchCriteria ) : Observable<Block[]>;
}
