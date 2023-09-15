import { Wand2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Slider } from "@/components/ui/slider";

type ExecutePromptProps = {
  onPromptChange?: (promptId: string) => void;
};

export const ExecutePrompt = ({ onPromptChange }: ExecutePromptProps) => {
  return (
    <form className="space-y-3">
      <div className="space-y-2">
        <Label htmlFor="model">Prompt Template</Label>
        <Select onValueChange={onPromptChange}>
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
          Greater values will generate more creative results (But with more
          error probabilities)
        </span>
      </div>

      <Separator />

      <Button type="submit" className="w-full">
        Execute <Wand2 className="w-4 h-4 ml-2" />
      </Button>
    </form>
  );
};