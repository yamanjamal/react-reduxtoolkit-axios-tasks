import Axios, { AxiosObservable } from "axios-observable";
import {  take } from "rxjs/operators";
import { indexUser, RootObject, User } from "../interfaces/interface";
const { REACT_APP_API_URL } = process.env;


class UserService {

    private static _instance: UserService;
    private readonly URL='users';

    private constructor()
    {
        //...
    }

    public static get Instance() {
        return this._instance || (this._instance = new this());
    }


        index(): AxiosObservable<RootObject<indexUser[]>> {
            return Axios.get<RootObject<indexUser[]>>(`${REACT_APP_API_URL}/${this.URL}`).pipe(take(1));
        }

        count(): AxiosObservable<number> {
            return Axios.get<number>(`${REACT_APP_API_URL}/${this.URL}/count`).pipe(take(1));
        }

        destroy(id:number): AxiosObservable<RootObject<any>> {
            return Axios.delete<RootObject<any>>(`${REACT_APP_API_URL}/${this.URL}/${id}`).pipe(take(1));
        }


}

export const _UserService=UserService.Instance;






