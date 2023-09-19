import { Prompt } from '@/models/prompt.model';
import { AxiosHttpClient } from './client.api';

export const PromptsAPI = () => {
    const BASE_URI = 'prompts';

    const findMany = async (): Promise<Array<Prompt>> => {
        const promptsResponse = await AxiosHttpClient.get(`${BASE_URI}`);

        return promptsResponse.data.prompts;
    };

    return {
        promptsAPI: {
            findMany,
        },
    };
};
