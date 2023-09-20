import { Dispatch, SetStateAction, createContext } from 'react';

export interface ProcessMediaContextValues {
    promptText: string;
    setPromptText: Dispatch<SetStateAction<string>>;
    mediaId: string;
    setMediaId: Dispatch<SetStateAction<string>>;
}

export const ProcessMediaContext = createContext(
    {} as ProcessMediaContextValues,
);
