import { FileVideo, Github, Upload, Wand2 } from "lucide-react";
import { Button } from "./components/ui/button";
import { Separator } from "./components/ui/separator";
import { Textarea } from "./components/ui/textarea";
import { Label } from "@radix-ui/react-label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./components/ui/select";
import { Slider } from "./components/ui/slider";

const App = () => {
  return (
    <div className="upload-ai__container min-h-screen flex flex-col">
      <header className="upload-ai__header px-6 py-3 flex items-center justify-between border-b">
        <h1 className="text-xl font-bold">
          <a href="/">upload.ai</a>
        </h1>

        <div className="flex items-center gap-3">
          <span className="text-sm text-muted-foreground">
            Developed with ❤️ on the Rocketseat NLW
          </span>

          <Separator orientation="vertical" className="h-6" />

          <Button variant="outline">
            <Github className="h-4 w-4 mr-2" />
            Github
          </Button>
        </div>
      </header>
      <main className="upload-ai__body flex-1 p-6 flex gap-6">
        <div className="prompt-area flex flex-col flex-1 gap-4">
          <div className="grid grid-rows-2 gap-4 flex-1">
            <Textarea
              placeholder="Type the AI Prompt..."
              className="resize-none p-4 leading-relaxed"
            />
            <Textarea
              placeholder="Generated AI Result..."
              className="resize-none p-4 leading-relaxed"
              readOnly
            />
          </div>
          <p className="text-sm text-muted-foreground">
            Note: You can use the variable
            <code className="text-violet-400">{" {transcription}"}</code> in
            your prompt to add the selected video transcription content.
          </p>
        </div>

        <aside className="sidebar-area w-80 space-y-6">
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
              <Label htmlFor="transcription-prompt">Transcription Prompt</Label>
              <Textarea
                id="transcription-prompt"
                placeholder="Type keywords mentioned in the video separated by a comma ( , )"
                className="h-20 leading-relaxed resize-none"
              />
            </div>

            <Button type="submit" className="w-full">
              Upload video
              <Upload className="w-4 h-4 ml-2" />
            </Button>
          </form>

          <Separator />

          <form className="space-y-3">
            <div className="space-y-2">
              <Label htmlFor="model">Prompt Template</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select a prompt template" />
                </SelectTrigger>

                <SelectContent>
                  <SelectItem value="title">Video Title (Pt-br)</SelectItem>
                  <SelectItem value="description">
                    Video Description (Pt-br)
                  </SelectItem>
                </SelectContent>
              </Select>
              <span className="block text-xs text-muted-foreground italic">
                You will be able to customize this option soon
              </span>
            </div>

            <div className="space-y-2">
              <Label htmlFor="model">Model</Label>
              <Select disabled defaultValue="gpt-3.5">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>

                <SelectContent>
                  <SelectItem value="gpt-3.5">GPT 3.5-turbo 16k</SelectItem>
                </SelectContent>
              </Select>
              <span className="block text-xs text-muted-foreground italic">
                You will be able to customize this option soon
              </span>
            </div>

            <Separator />

            <div className="space-y-2">
              <Label htmlFor="model">Temperature</Label>
              <Slider min={0} max={1} step={0.1} />
              <span className="block text-xs text-muted-foreground italic">
                Greater values will generate more creative results (But with
                more error probabilities)
              </span>
            </div>

            <Separator />

            <Button type="submit" className="w-full">
              Execute <Wand2 className="w-4 h-4 ml-2" />
            </Button>
          </form>
        </aside>
      </main>
    </div>
  );
};

export default App;
