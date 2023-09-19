import { Separator } from '../ui/separator';
import { SelectVideo } from './components/select-video/SelectVideo';
import { ExecutePrompt } from './components/execute-prompt/ExecutePrompt';
import { PromptInputs } from './components/prompt-inputs/PromptInputs';
import { useState } from 'react';

export const Main = () => {
    const [defaultPromptValue, setDefaultPromptValue] = useState<string>('');

    const handlePromptChange = (promptTemplate: string) => {
        setDefaultPromptValue(promptTemplate);
    };

    return (
        <main className="upload-ai__body flex-1 p-6 flex gap-6">
            <div className="prompt-area flex flex-col flex-1 gap-4">
                <PromptInputs defaultPromptValue={defaultPromptValue} />
            </div>

            <aside className="sidebar-area w-80 space-y-6">
                <SelectVideo />

                <Separator />

                <ExecutePrompt onPromptChange={handlePromptChange} />
            </aside>
        </main>
    );
};
