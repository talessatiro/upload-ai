import { Github } from "lucide-react";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";

export const Header = () => {
  const redirectToGithubPage = () => {
    window.open("https://github.com/talessatiro/upload-ai", "_blank");
  };

  return (
    <header className="upload-ai__header px-6 py-3 flex items-center justify-between border-b">
      <h1 className="text-xl font-bold">
        <a href="/">upload.ai</a>
      </h1>

      <div className="flex items-center gap-3">
        <span className="text-sm text-muted-foreground">
          Inspired by Rocketseat NLW ❤️
        </span>

        <Separator orientation="vertical" className="h-6" />

        <Button variant="outline" onClick={redirectToGithubPage}>
          <Github className="h-4 w-4 mr-2" />
          Github
        </Button>
      </div>
    </header>
  );
};
