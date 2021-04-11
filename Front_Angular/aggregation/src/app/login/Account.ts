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

export class CreationAccount implements Account {

    login: string
    password: string
    email: string

    constructor (login, password, email) {
        this.login = login;
        this.password = password;
        this.email = email;
    }
}
