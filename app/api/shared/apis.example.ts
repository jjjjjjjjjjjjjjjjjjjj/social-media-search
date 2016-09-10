import { API } from './api.model';

export const API_500PX : API = {

    name        : '500px',
    key         : '500px',
    color       : '#34bf49',
    active      : true,
    accessToken : 'CONSUMER_KEY_HERE',
    getEndpoint : 'https://api.500px.com/v1/photos/search?tag=' + '{TAG}'
                + '&consumer_key=' + '{ACCESS_TOKEN}'

};

export const API_INSTAGRAM : API = {

    name        : 'Instagram',
    key         : 'instagram',
    color       : '#e1306c',
    active      : true,
    accessToken : 'ACCESS_TOKEN_HERE',
    getEndpoint : 'https://api.instagram.com/v1/tags/' + '{TAG}' + '/media/recent'
                + '?access_token=' + '{ACCESS_TOKEN}'

};

export const API_FACEBOOK : API = {

    name        : 'Facebook',
    key         : 'facebook',
    color       : '#3b5998',
    active      : true,
    accessToken : 'ACCESS_TOKEN_HERE',
    getEndpoint : 'https://api.instagram.com/v1/tags/' + '{TAG}' + '/media/recent'
    + '?access_token={ACCESS_TOKEN}'

};

export const API_TWITTER : API = {

    name        : 'Twitter',
    key         : 'twitter',
    color       : '#1da1f2',
    active      : true,
    accessToken : 'ACCESS_TOKEN_HERE',
    getEndpoint : 'https://api.instagram.com/v1/tags/' + '{TAG}' + '/media/recent'
    + '?access_token={ACCESS_TOKEN}'

};

export const API_GOOGLE_PLUS : API = {

    name        : 'Google+',
    key         : 'google+',
    color       : '#dd4b39',
    active      : true,
    accessToken : 'ACCESS_TOKEN_HERE',
    getEndpoint : 'https://api.instagram.com/v1/tags/' + '{TAG}' + '/media/recent'
    + '?access_token={ACCESS_TOKEN}'

};

export const APIS : API[] = [

    API_500PX,
    API_INSTAGRAM,
    API_FACEBOOK,
    API_TWITTER,
    API_GOOGLE_PLUS

];
