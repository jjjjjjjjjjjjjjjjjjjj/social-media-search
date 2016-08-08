export interface API {

    key         : string;
    name        : string;
    active      : boolean;
    color       : string;
    accessToken : string;
    getEndpoint : string;

}

export const API_500PX : API = {

    'key'         : '500px',
    'name'        : '500px',
    'active'      : true,
    'color'       : '#34bf49',
    'accessToken' : 'MrYnenrhwDOxlW2XS6V5emaVJk5JZadG0f9xHlYD',
    'getEndpoint' : 'https://api.500px.com/v1/photos/search?tag={TAG}'
                  + '&consumer_key={ACCESS_TOKEN}'

};

export const API_INSTAGRAM : API = {

    'key'         : 'instagram',
    'name'        : 'Instagram',
    'active'      : true,
    'color'       : '#e1306c',
    'accessToken' : '399820973.30dfbd7.71f08395633a40c6b87ad9550ca3ca96',
    'getEndpoint' : 'https://api.instagram.com/v1/tags/' + '{TAG}' + '/media/recent'
                  + '?access_token={ACCESS_TOKEN}'

};

export const API_FACEBOOK : API = {

    'key'     : 'facebook',
    'name'    : 'Facebook',
    'active'  : true,
    'color'   : '#3b5998',
    'accessToken' : '399820973.30dfbd7.71f08395633a40c6b87ad9550ca3ca96',
    'getEndpoint' : 'https://api.instagram.com/v1/tags/' + '{TAG}' + '/media/recent'
                  + '?access_token=' + this.accessToken,

};

export const API_TWITTER : API = {

    'key'     : 'twitter',
    'name'    : 'Twitter',
    'active'  : true,
    'color'   : '#1da1f2',
    'accessToken' : '399820973.30dfbd7.71f08395633a40c6b87ad9550ca3ca96',
    'getEndpoint' : 'https://api.instagram.com/v1/tags/' + '{TAG}' + '/media/recent'
                  + '?access_token=' + this.accessToken

};

export const API_GOOGLE_PLUS : API = {

    'key'     : 'google+',
    'name'    : 'Google+',
    'active'  : true,
    'color'   : '#dd4b39',
    'accessToken' : '399820973.30dfbd7.71f08395633a40c6b87ad9550ca3ca96',
    'getEndpoint' : 'https://api.instagram.com/v1/tags/' + '{TAG}' + '/media/recent'
                  + '?access_token=' + this.accessToken


};

export const APIS : API[] = [

    API_500PX,
    API_INSTAGRAM,
    API_FACEBOOK,
    API_TWITTER,
    API_GOOGLE_PLUS

];
