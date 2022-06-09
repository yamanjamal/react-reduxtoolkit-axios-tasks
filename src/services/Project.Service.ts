import Axios, { AxiosObservable } from "axios-observable";
import { createSearchParams } from "react-router-dom";
import { auditTime, filter, startWith, tap } from "rxjs/operators";
import { indexProjects, PagesOf, Project, RootObject } from "../interfaces/interface";
const { REACT_APP_API_URL } = process.env;


class ProjectService {

    private static _instance: ProjectService;
    
    private readonly chash_key = 'Projects';
    private readonly URL='projects';
    private ProjectIndexCache: any;

    public static get Instance() {
        return this._instance || (this._instance = new this());
    }

    index(page: number): AxiosObservable<RootObject<PagesOf<indexProjects>>> {
        return Axios.get<RootObject<PagesOf<indexProjects>>>(`${REACT_APP_API_URL}/${this.URL}?page=${page}`)
            .pipe(
                tap(res => this.ProjectIndexCache = JSON.stringify(res)),
                startWith(JSON.parse(this.ProjectIndexCache || '{}')),
                filter(res=>Object.keys(res).length !== 0), 
            );
    }

    search(params: any): AxiosObservable<RootObject<PagesOf<indexProjects>>> {
        return Axios.get<RootObject<PagesOf<indexProjects>>>(`${REACT_APP_API_URL}/${this.URL}/search?${createSearchParams(params)}`).pipe(auditTime(1000));
    }

    show(id: string): AxiosObservable<RootObject<Project>> {
        return Axios.get<RootObject<Project>>(`${REACT_APP_API_URL}/${this.URL}/${id}`);
    }

    store(data: any): AxiosObservable<RootObject<indexProjects>> {
        return Axios.post<RootObject<indexProjects>>(`${REACT_APP_API_URL}/${this.URL}`, data);
    }

    update(id: number, data: any): AxiosObservable<RootObject<any>> {
        return Axios.put<RootObject<any>>(`${REACT_APP_API_URL}/${this.URL}/${id}`, data);
    }

    reserve(id: number): AxiosObservable<RootObject<indexProjects>> {
        return Axios.post<RootObject<indexProjects>>(`${REACT_APP_API_URL}/${this.URL}/reserve/${id}`);
    }

    destroy(id: number): AxiosObservable<RootObject<indexProjects>> {
        return Axios.delete<RootObject<indexProjects>>(`${REACT_APP_API_URL}/${this.URL}/${id}`);
    }
}

export const _ProjectService=ProjectService.Instance;






