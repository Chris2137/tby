import {MenuItem} from 'primeng/api';

type MyMapLikeType = Record<string, MenuItem[]>;

export const MENU_ITEM_LISTS: MyMapLikeType = {
    'workspace': [
        {label:'Showroom', routerLink:'/workspace/product-list'} ,
        {label:'Projects', routerLink:'/workspace/product'},
        {label:'Requests', routerLink:'/workspace/requests' },
        {label:'My Creations', routerLink:'/workspace/mycreation' }],

    'network': [
        {label:'Connections', routerLink:'/network/connections'} ,
        {label:'Directory', routerLink:'/network/directory'},
        {label:'Invitations', routerLink:'/network/invitations' }],


};


