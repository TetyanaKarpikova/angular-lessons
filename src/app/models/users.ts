import {AddressModel} from './Address'

export interface Users {
    id: number;
    name: string;
    age: number;
    status: string;
    address: AddressModel;

}