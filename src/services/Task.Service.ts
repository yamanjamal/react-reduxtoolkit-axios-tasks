import { AxiosObservable } from "axios-observable";
import { RootObject, ShowTask, Task } from "../interfaces/interface";
import axios from './Axios'

class TaskService {

    private static _instance: TaskService;
    private readonly URL='tasks';

    public static get Instance() {
        return this._instance || (this._instance = new this());
    }

    index(): AxiosObservable<RootObject<any>> {
        return axios.get<RootObject<any>>(`/${this.URL}`);
    }
    
    show(id:string): AxiosObservable<RootObject<ShowTask>> {  
        return  axios.get<RootObject<ShowTask>>(`/${this.URL}/${id}`);
    }

    store(data:any): AxiosObservable<RootObject<Task>> {
        return axios.post<RootObject<Task>>(`/${this.URL}`,data);
    }

    update(id:number,data:any): AxiosObservable<RootObject<any>> {
        return axios.put<RootObject<any>>(`/${this.URL}/${id}`,data);
    }

    destroy(id:number): AxiosObservable<RootObject<any>> {
        return axios.delete<RootObject<any>>(`/${this.URL}/${id}`);
    }
}

export const _TaskService = TaskService.Instance;
