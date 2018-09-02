export class Station {

    private _name: string;
    private _description: string;
    private _location: string;

    constructor(name: string, description: string, location: string) {
        this.name = name;
        this.description = description;
        this.location = location;
    }

    public get description(): string {
        return this._description;
    }
    public set description(value: string) {
        this._description = value;
    }

    public get location(): string {
        return this._location;
    }
    public set location(value: string) {
        this._location = value;
    }

    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }

}
