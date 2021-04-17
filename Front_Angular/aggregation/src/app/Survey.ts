export class Survey {
    name: string
    description: string
    id?: number
    isActive: boolean

    constructor(name:string, description:string,isActive: boolean, id?: number){
        this.name = name;
        this.description = description;
        this.id = id;
        this.isActive = isActive
    }
}
