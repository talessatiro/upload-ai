import { randomUUID } from 'crypto';

export interface BaseEntityProps {
    id: string;
    createdAt?: Date;
    updatedAt?: Date;
}

export class BaseEntity {
    private baseProps: BaseEntityProps;

    constructor(baseProps: BaseEntityProps = { id: randomUUID() }) {
        this.baseProps = baseProps;
    }

    public get id(): string {
        return this.baseProps.id;
    }

    public get createdAt(): Date | undefined {
        return this.baseProps.createdAt;
    }

    public get updatedAt(): Date | undefined {
        return this.baseProps.updatedAt;
    }
}
