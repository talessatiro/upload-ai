import { FileVideo, Upload } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Textarea } from '@/components/ui/textarea';

type SelectVideoProps = {
    onMediaUpload?: (mediaId: string) => void;
};

export const SelectVideo = ({ onMediaUpload }: SelectVideoProps) => {
    return (
        <form className="space-y-3">
            <Label
                htmlFor="video"
                className="border border-dashed cursor-pointer flex flex-col rounded-md aspect-video items-center justify-center text-sm gap-2 text-muted-foreground hover:bg-primary/20"
            >
                <FileVideo className="w-4 h-4" />
                Select a video
            </Label>
            <input
                id="video"
                type="file"
                accept="video/mp4"
                className="sr-only"
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
                />
            </div>

            <Button
                type="submit"
                className="w-full"
                onClick={() => onMediaUpload?.('TODO')}
            >
                Upload
                <Upload className="w-4 h-4 ml-2" />
            </Button>
        </form>
    );
};
