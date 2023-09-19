import { Textarea } from '@/components/ui/textarea';
import React, { useEffect, useState } from 'react';

type PromptInputsProps = {
    defaultPromptValue?: string;
};

export const PromptInputs = ({ defaultPromptValue }: PromptInputsProps) => {
    const [promptValue, setPromptValue] = useState<string>('');

    useEffect(() => {
        if (defaultPromptValue) {
            setPromptValue(defaultPromptValue);
        }
    }, [defaultPromptValue]);

    return (
        <React.Fragment>
            <div className="grid grid-rows-2 gap-4 flex-1">
                <Textarea
                    placeholder="Type the AI Prompt..."
                    className="resize-none p-4 leading-relaxed"
                    value={promptValue}
                    onChange={(e) => setPromptValue(e.target.value)}
                />
                <Textarea
                    placeholder="Generated AI Result..."
                    className="resize-none p-4 leading-relaxed"
                    readOnly
                />
            </div>
            <p className="text-sm text-muted-foreground">
                Note: You can use the variable
                <code className="text-violet-400">{' {transcription}'}</code> in
                your prompt to add the selected video transcription content.
            </p>
        </React.Fragment>
    );
};
