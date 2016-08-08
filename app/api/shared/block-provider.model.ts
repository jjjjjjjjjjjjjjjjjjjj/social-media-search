import {

    SearchCriteria

} from '../shared';

import { Block } from '../../block/shared/';

export interface BlockProvider {
    getBlocks ( searchCriteria: SearchCriteria ) : Promise<Block[]>;
}
