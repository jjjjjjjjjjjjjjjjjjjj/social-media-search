import {
    Credentials,
} from '../shared';

export class InstagramCredentialsService {

    private credentials: Credentials;

    constructor() {
        this.credentials = {
            ID:     '30dfbd70cce349f08d6d2efed73fd011',
            secret: '1280f4ff750d4e33aa00349ecc734032'
        };
    }

    getCredentials() {
        return this.credentials;
    }

}
