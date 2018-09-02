export class BikeClient {

    private _id: string;
    private _name: string;
    private _subtitle: string;
    private _imageName: string;
    private _history: string;
    private _identification: string;

    constructor(id: string, name: string, subtitle: string, imageName: string, history: string, identification: string) {
        this.id = id;
        this.name = name;
        this.subtitle = subtitle;
        this.imageName = imageName;
        this.history = history;
        this.identification = identification;
    }

    public get id(): string {
        return this._id;
    }
    public set id(value: string) {
        this._id = value;
    }

    public get subtitle(): string {
        return this._subtitle;
    }
    public set subtitle(value: string) {
        this._subtitle = value;
    }

    public get imageName(): string {
        return this._imageName;
    }
    public set imageName(value: string) {
        this._imageName = value;
    }

    public get history(): string {
        return this._history;
    }
    public set history(value: string) {
        this._history = value;
    }

    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }

    public get identification(): string {
        return this._identification;
    }
    public set identification(value: string) {
        this._identification = value;
    }
}