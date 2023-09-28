import { BaseEntity, BaseEntityProps } from './base.entity';

export interface AudioEntityProps {
    filename: string;
    size: number;
    mimetype: string;
    path: string;
}

export class AudioEntity extends BaseEntity {
    private props: AudioEntityProps;

    constructor(props: AudioEntityProps, baseProps?: BaseEntityProps) {
        super(baseProps);

        this.props = props;
    }

    get filename(): string {
        return this.props.filename;
    }

    set filename(filename: string) {
        this.props.filename = filename;
    }

    get size(): number {
        return this.props.size;
    }

    get mimetype(): string {
        return this.props.mimetype;
    }

    get path(): string {
        return this.props.path;
    }
}
