import fs from "fs";
import path from "path";

export function InstagramLandingCss() {
  const cssContent = fs.readFileSync(
    path.join(
      process.cwd(),
      "public",
      "instagram-landing",
      "css",
      // "template.css",
    ),
    {
      encoding: "utf8",
    },
  );

  return (
    <style
      dangerouslySetInnerHTML={{
        __html: cssContent,
      }}
    />
  );
}
