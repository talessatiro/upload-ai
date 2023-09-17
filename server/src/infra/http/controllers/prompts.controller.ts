import { Controller, Get } from '@nestjs/common';
import { ListPromptsUserCase } from 'src/application/user-cases/list-prompts.user-case';
import { PromptViewModel } from '../view-models/prompt.view-model';

@Controller('prompts')
export class PromptsController {
    constructor(private readonly listPromptsUserCase: ListPromptsUserCase) {}

    @Get()
    async listPrompts() {
        const { prompts } = await this.listPromptsUserCase.execute();

        return {
            prompts: prompts.map(PromptViewModel.toHTTP),
        };
    }
}
