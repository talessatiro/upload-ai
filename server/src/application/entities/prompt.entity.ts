import { BaseEntity, BaseEntityProps } from './base.entity';

interface PromptEntityProps {
    title: string;
    template: string;
}

export class PromptEntity extends BaseEntity {
    private props: PromptEntityProps;

    constructor(props: PromptEntityProps, baseProps?: BaseEntityProps) {
        super(baseProps);

        this.props = props;
    }

    public get title(): string {
        return this.props.title;
    }

    public set title(title: string) {
        this.props.title = title;
    }

    public get template(): string {
        return this.props.template;
    }

    public set template(template: string) {
        this.props.template = template;
    }
}
