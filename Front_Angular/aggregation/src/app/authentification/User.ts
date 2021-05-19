export class User {

    id: number
    roles: Array<string>

    constructor (id, roles) {
        this.id = id;
        this.roles = roles;
    }
}
