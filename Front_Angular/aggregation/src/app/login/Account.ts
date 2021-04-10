export interface Account {
    login: string;
    password: string;
}

export class LoginAccount implements Account {

    login: string
    password: string

    constructor (login, password) {
        this.login = login;
        this.password = password;
    }
}
