
//// Login interfaces
export interface indexUser {
    id: number;
    name: string;
    email: string;
    image?:string;
    roles:Role[];
}

export interface User {
    id: number;
    name: string;
    email: string;
    image?:string;
    roles?:Role[];
    email_verified_at?: any;
    created_at?: Date;
    updated_at?: Date;
}

export interface Token {
    token: string;
}

export interface LoginData {
    user: User;
    token: Token;
}

//// projects interfaces
export interface Requirment {
    id: number;
    description: string;
    project_id: number;
}

export interface Teamleader {
    id: number;
    email: string;
    name: string;
}

export interface indexProjects {
    id: number;
    title: string;
    description: string;
    dead_line: string;
    teamleader?: Teamleader;
}

export interface SRS {
    id: number;
    link: any;
    project_id: number;
}

export interface Project extends indexProjects  {
    requirments: Requirment[];
    srs: SRS[];
}

export interface Task {
    id: number;
    title: string;
    description: string;
    requirment_id: number;
    state:string,/// to_do  doing done
    developer?: Teamleader;
    color:string;
    dead_line:string;
}

export interface Comment {
    id: number;
    content: string;
    task_id: number;
    user: User;
    replays?:Comment[];
}

export interface ShowTask {
    id: number;
    title: string;
    description: string;
    requirment_id: number;
    developer?: Teamleader;
    comments: Comment[];
}

export interface indexTask extends Requirment {
    tasks: Task[];
}

///Role  & Permissions
export interface Role {
    id: number;
    name: string;
    permissions?:Permission[];
}

    export interface Permission {
    id: number;
    name: string;
}

export interface NotificationInfo {
    user_email: string;
    Action: string;
    ActionON: string;
}

export interface Notification {
    data: NotificationInfo;
    read_at?: any;
    created_at: string;
}

/// Pagenation interfaces   
export interface Links {
    first: string;
    last: string;
    prev?: any;
    next?: any;
}

export interface Link {
    url: string;
    label: string;
    active: boolean;
}

export interface Meta {
    current_page: number;
    from: number;
    last_page: number;
    links: Link[];
    path: string;
    per_page: number;
    to: number;
    total: number;
}

export interface PagesOf<T=any> {
    data: T[] ;
    links: Links;
    meta: Meta;
}

    //Root Object interface
export interface RootObject<T = any> {
    success: boolean;
    data: T;
    message: string;
}

/// Readonly interface

export interface Readonly<>{
    readonly  [key:string]:string;
}

/// Removes 'optional' attributes from a type's properties
export type Concrete<Type> = {
    [Property in keyof Type]-?: Type[Property];
    };     

// Snackbar 
export interface SnackbarProps
{
    severity:any,
    // severity:'error' | 'warning' | 'info'| 'success',
    message:string,
    open:boolean
    
};

