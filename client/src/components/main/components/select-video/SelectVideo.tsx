import { FileVideo, ListMusic } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Textarea } from '@/components/ui/textarea';
import { ChangeEvent, FormEvent, useMemo, useState } from 'react';
import React from 'react';
import { useProcessMediaContext } from '../../context/hook/useProcessMediaContext';
import { getFFmpeg } from '@/lib/ffmpeg/ffmpeg';
import { fetchFile } from '@ffmpeg/util';

export const SelectVideo = () => {
    const [videoFile, setVideoFile] = useState<File | undefined>();
    const [transcriptionPrompt, setTranscriptionPrompt] = useState<string>('');
    const { setMediaId } = useProcessMediaContext();

    const convertVideoToAudio = async (video: File): Promise<File> => {
        const ffmpeg = await getFFmpeg();

        console.log('Conversion started');

        await ffmpeg.writeFile('input.mp4', await fetchFile(video));
        ffmpeg.on('progress', ({ progress }) => {
            console.log(`Conversion progress: ${Math.round(progress * 100)}`);
        });
        await ffmpeg.exec([
            '-i',
            'input.mp4',
            '-map',
            '0:a',
            '-b:a',
            '20k',
            '-acodec',
            'libmp3lame',
            'output.mp3',
        ]);

        const audioType = 'audio/mpeg';
        const data = await ffmpeg.readFile('output.mp3');
        const dataBlob = new Blob([data], { type: audioType });
        const audioFile = new File([dataBlob], 'audio.mp3', {
            type: audioType,
        });

        console.log(`Conversion finished`);

        return audioFile;
    };

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

    const handleVideoTranscription = async (
        event: FormEvent<HTMLFormElement>,
    ) => {
        event.preventDefault();

        if (!videoFile) {
            return;
        }

        const audioFile = await convertVideoToAudio(videoFile);

        console.log(audioFile);

        const fakeMediaId = 'TODO - Set created Audio ID as argument';
        setMediaId(fakeMediaId);
    };

    return (
        <form className="space-y-3" onSubmit={handleVideoTranscription}>
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
                    value={transcriptionPrompt}
                    onChange={(event) =>
                        setTranscriptionPrompt(event.target.value)
                    }
                    disabled={!videoFile}
                />
            </div>

            <Button type="submit" className="w-full" disabled={!videoFile}>
                Generate Audio Transcription
                <ListMusic className="w-4 h-4 ml-2" />
            </Button>
        </form>
    );
};
