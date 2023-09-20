import { useMemo, useState } from 'react';
import {
    ProcessMediaContext,
    ProcessMediaContextValues,
} from '../ProcessMediaContext';

type ProcessMediaProviderProps = {
    children: React.ReactNode;
};

export const ProcessMediaProvider = ({
    children,
}: ProcessMediaProviderProps) => {
    const [promptText, setPromptText] = useState<string>('');
    const [mediaId, setMediaId] = useState<string>('');

    const value = useMemo(() => {
        const providerValue: ProcessMediaContextValues = {
            promptText,
            setPromptText,
            mediaId,
            setMediaId,
        };

        return providerValue;
    }, [mediaId, promptText]);

    return (
        <ProcessMediaContext.Provider value={value}>
            {children}
        </ProcessMediaContext.Provider>
    );
};
