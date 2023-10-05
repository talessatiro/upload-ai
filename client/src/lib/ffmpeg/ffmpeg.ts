import { FFmpeg } from '@ffmpeg/ffmpeg';
import coreURL from './config/ffmpeg-core.js?url';
import wasmURL from './config/ffmpeg-core.wasm?url';
import workerURL from './config/ffmpeg-worker.js?url';

let ffmpeg: FFmpeg | null;

export const getFFmpeg = async (): Promise<FFmpeg> => {
    if (ffmpeg) {
        return ffmpeg;
    }

    ffmpeg = new FFmpeg();

    if (!ffmpeg.loaded) {
        await ffmpeg.load({
            coreURL,
            wasmURL,
            workerURL,
        });
    }

    return ffmpeg;
};
