import { randomUUID } from 'crypto';

export class BaseEntity {
    private _id: string;
    private _createdAt?: Date;
    private _updatedAt?: Date;

    constructor(id: string = randomUUID()) {
        this._id = id;
    }

    public get id(): string {
        return this._id;
    }

    public get createdAt(): Date | undefined {
        return this._createdAt;
    }

    public get updatedAt(): Date | undefined {
        return this._updatedAt;
    }
}
