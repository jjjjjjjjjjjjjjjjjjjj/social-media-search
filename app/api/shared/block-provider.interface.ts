import { SearchCriteria } from './';

export interface BlockProvider {
    search(searchCriteria: SearchCriteria);
}
