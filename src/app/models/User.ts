import { Address } from "./Address";

export interface User {
    id: number;
    name: string;
    username:string;
    address: Address
}