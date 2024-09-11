import showdown from "showdown";
import fs from "fs";

const converter = new showdown.Converter();

const markdown = fs.readFileSync("src/model/documentation.md", {
  encoding: "utf-8",
});
const html = converter.makeHtml(markdown);

fs.writeFileSync(
  "src/app/rules/documentation/documentation.component.html",
  html,
);
