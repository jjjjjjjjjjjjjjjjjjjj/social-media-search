import {

    SearchCriteria

} from '../shared';

export class BlockProvider {

    constructor ( protected settings : Object ) { }

    public getBlocks ( searchCriteria: SearchCriteria ) {
        return Promise.resolve( [] );
    }

}
