import { BehaviorSubject, Observable } from 'rxjs';
import { SnackbarProps } from '../interfaces/interface';


class SnackbarService {

    private static _instance: SnackbarService;

    private initialState:SnackbarProps ={
        severity: '',
        message: '',
        open: false
    }


    
    private SnackbarSub = new BehaviorSubject<SnackbarProps>(this.initialState);


    private constructor()
    {
        //...
    }

    public static get Instance() {
        return this._instance || (this._instance = new this());
    }

    Snackbar():Observable<SnackbarProps>{
        return this.SnackbarSub.asObservable();
      }

      AddSnackbar(severity:string,message:string){
       const newSnackbar:SnackbarProps= { severity: severity, message: message, open: true };
         this.SnackbarSub.next(newSnackbar);
      }

      CleanSnackbar(){
         this.SnackbarSub.next({ ...this.SnackbarSub.getValue(), open: false });
      }


}


export const _SnackbarService=SnackbarService.Instance;





