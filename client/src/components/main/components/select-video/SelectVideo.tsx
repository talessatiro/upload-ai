import { FileVideo, ListMusic } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Textarea } from '@/components/ui/textarea';
import { ChangeEvent, MouseEvent, useMemo, useState } from 'react';
import React from 'react';

type SelectVideoProps = {
    onTranscribedVideo?: (mediaId: string) => void;
};

export const SelectVideo = ({ onTranscribedVideo }: SelectVideoProps) => {
    const [videoFile, setVideoFile] = useState<File | undefined>();

    const handleSelectVideo = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];

        if (file) {
            setVideoFile(file);
        }
    };

    const videoPreview = useMemo(() => {
        if (videoFile) {
            return URL.createObjectURL(videoFile);
        }
    }, [videoFile]);

    const handleVideoTranscription = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();

        onTranscribedVideo?.('TODO - Set created Audio ID as argument');
    };

    return (
        <form className="space-y-3">
            <Label
                htmlFor="video"
                className="border border-dashed cursor-pointer flex flex-col rounded-md aspect-video items-center justify-center text-sm gap-2 text-muted-foreground hover:bg-primary/20"
            >
                {videoFile ? (
                    <video src={videoPreview} />
                ) : (
                    <React.Fragment>
                        <FileVideo className="w-4 h-4" />
                        Select a video
                    </React.Fragment>
                )}
            </Label>
            <input
                id="video"
                type="file"
                accept="video/mp4"
                className="sr-only"
                onChange={handleSelectVideo}
            />

            <Separator />

            <div className="space-y-2">
                <Label htmlFor="transcription-prompt">
                    Transcription Prompt
                </Label>
                <Textarea
                    id="transcription-prompt"
                    placeholder="Type keywords mentioned in the video separated by a comma ( , )"
                    className="h-20 leading-relaxed resize-none"
                    disabled={!videoFile}
                />
            </div>

            <Button
                type="submit"
                className="w-full"
                onClick={handleVideoTranscription}
                disabled={!videoFile}
            >
                Generate Audio Transcription
                <ListMusic className="w-4 h-4 ml-2" />
            </Button>
        </form>
    );
};
