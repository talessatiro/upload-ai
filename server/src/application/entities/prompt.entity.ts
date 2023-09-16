import { BaseEntity } from './base.entity';

interface PromptEntityProps {
    title: string;
    template: string;
}

export class PromptEntity extends BaseEntity {
    private props: PromptEntityProps;

    constructor({ title, template }: PromptEntityProps, id?: string) {
        super(id);

        this.props.title = title;
        this.props.template = template;
    }

    public get title(): string {
        return this.props.title;
    }

    public get template(): string {
        return this.props.template;
    }
}
