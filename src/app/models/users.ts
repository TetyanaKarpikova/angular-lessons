interface Item {
    city: string;
    street: string;
    number: string;

}

export interface Users {
  id: number;
  name: string;
  age: number;
  status: string;
  // address: Item[];
   address: {
       [key: string] : Item
   }
}