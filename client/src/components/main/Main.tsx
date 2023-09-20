import { Separator } from '../ui/separator';
import { SelectVideo } from './components/select-video/SelectVideo';
import { ExecutePrompt } from './components/execute-prompt/ExecutePrompt';
import { PromptInputs } from './components/prompt-inputs/PromptInputs';
import { ProcessMediaProvider } from './context/provider/ProcessMediaProvider';

export const Main = () => {
    return (
        <main className="upload-ai__body flex-1 p-6 flex gap-6">
            <ProcessMediaProvider>
                <div className="prompt-area flex flex-col flex-1 gap-4">
                    <PromptInputs />
                </div>

                <aside className="sidebar-area w-80 space-y-6">
                    <SelectVideo />

                    <Separator />

                    <ExecutePrompt />
                </aside>
            </ProcessMediaProvider>
        </main>
    );
};
