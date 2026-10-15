import fs from "fs";
import path from "path";
import svg2img from "svg2img";

const dir = ".";
const files = fs.readdirSync(dir, { withFileTypes: true });

for (const file of files) {
  const filename = file.name;

  if (filename.endsWith(".svg")) {
    const filepath = path.resolve(path.join(dir, filename));

    const imgName = filename.split(".")[0];

    const outpath = path.resolve(path.join(dir, `${imgName}.png`));

    const svgString = fs.readFileSync(filepath);

    svg2img(svgString, function (error, buffer) {
      fs.writeFileSync(outpath, buffer);
    });
  }
}
