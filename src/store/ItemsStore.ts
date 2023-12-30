import {makeAutoObservable} from "mobx";

export interface IItem {
    id: string;
    name: string;
    brand: string;
    link: string;
    properties: IProperty[];
    sizes: {
        [key: string]: {
            [key: string]: ISize;
        };
    };
    send: boolean;
    imageLinks: string[];
}

export interface IProperty {
    key: string;
    value: string;
}

export interface ISize {
    name: string;
    price: number
}

export default class ItemsStore{
    private _items: IItem[]

    constructor(){
        this._items = []

        makeAutoObservable(this)
    }

    setItems(items: IItem[]){
        this._items = items
    }

    getItemById(id: string){
        return this.items.find(item => item.id === id)
    }

    get items(){
        return this._items
    }
}