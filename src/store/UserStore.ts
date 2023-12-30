import {makeAutoObservable} from "mobx";

export interface IUser{
    token: string
    id: string
}

export default class UserStore{
    private _isAuth: boolean;
    private _user: IUser

    constructor() {
        this._isAuth = false;
        this._user = {id : '', token: ''}
        makeAutoObservable(this)
    }

    setAuth(value: boolean){
        this._isAuth = value
    }

    setUser(user: IUser){
        this._user = user
    }

    get isAuth(){
        return this._isAuth
    }

    get user(){
        return this._user
    }

}