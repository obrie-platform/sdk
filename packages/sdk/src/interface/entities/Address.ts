import {GeoPoint} from "./GeoPoint";

enum AddressType {
    Saved = 'Saved',
    Home = 'Home',
    Work = 'Work',
}

export interface Address {
    id: string;
    address1: string;
    address2: string;
    address3: string;
    comment: string;
    location: GeoPoint;
    name: string;
    type: AddressType;
}
