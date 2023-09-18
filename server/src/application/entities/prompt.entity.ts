import { BaseEntity, BaseEntityProps } from './base.entity';

interface PromptEntityProps {
    title: string;
    template: string;
}

export class PromptEntity extends BaseEntity {
    private props: PromptEntityProps;

    constructor(props: PromptEntityProps, baseProps?: BaseEntityProps) {
        super(baseProps);

        this.props.title = props.title;
        this.props.template = props.template;
    }

    public get title(): string {
        return this.props.title;
    }

    public get template(): string {
        return this.props.template;
    }
}
