import Axios, { AxiosObservable } from "axios-observable";
import { BehaviorSubject, Observable } from "rxjs";
import {  tap, take } from "rxjs/operators";
import { Readonly, LoginData, RootObject, User, indexUser } from "../interfaces/interface";

const { REACT_APP_API_URL } = process.env;


class AuthService {

    private static _instance: AuthService;
    private StoreKeys: Readonly = { TOKEN:'TOKEN' };

    private initialState:User = { id: 0, name: '',   email: ''};

    private UserSub = new BehaviorSubject<User>(this.initialState);

    LoggedUser():Observable<User>{
        return this.UserSub.asObservable();
      }

    FillUserInfo(user:User){
        this.UserSub.next(user);
    }

    public static get Instance() {
        return this._instance || (this._instance = new this());
    }

    login(data: any):AxiosObservable<RootObject<LoginData>> {
        return Axios.post<RootObject<LoginData>>(`${REACT_APP_API_URL}/login`, data)
            .pipe(take(1),
                tap(res =>{
                    this.storeToken(res.data.data.token.token);
                    this.UserSub.next(res.data.data.user);
                })
            );
    }

    regist(data: any): AxiosObservable<RootObject<indexUser>> {
        return Axios.post<RootObject<indexUser>>(`${REACT_APP_API_URL}/User/register`, data).pipe(take(1));
    }

    logout():AxiosObservable<any> {
        return Axios.get<any>(`${REACT_APP_API_URL}/User/logout`)
        .pipe(take(1),
            tap(() =>this.doLogout())
           );
    }

    doLogout() {
        localStorage.removeItem(this.StoreKeys.TOKEN);
        this.UserSub.next(this.initialState);
    }

    isLoggedIn() {
        return !!this.getJwtToken();
    }

    getJwtToken() {
        return localStorage.getItem(this.StoreKeys.TOKEN);
    }

    storeToken(token: string) {
        localStorage.setItem(this.StoreKeys.TOKEN,token);
    }
}

export const _AuthService=AuthService.Instance;
