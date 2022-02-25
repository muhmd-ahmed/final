
export interface SignupData{
    firstName: string,
    lastName:string,
    email:string,
    password:string
}
export interface LoginData{
    email:string,
    password:string
}


export interface SignUpResponse{
    id:string,
    email:string,
    token:string,
    expiresIn:string
}

export interface LoginResponse{
    id:string,
    email:string,
    token:string,
    expiresIn:string
}

export class User{
    
    constructor(
        public id:string,
        // public email:string,
        private _token:string,
        // private _tokenExpirationDate:Date
    ){}
    get token(){
        /* if(!this._tokenExpirationDate || new Date() > this._tokenExpirationDate){
            return null;
        } */
        return this._token
    }
}

export interface SignIn {

    id?: string,
    token?:string,
    error?:string
  
}

export interface contact { 
    fname: string,
    lname: string,
    email: string,
    subject: string,
    message: string 
}

export interface product {
    name: string,
    slug: string,
    description: string,
    price: number
}
