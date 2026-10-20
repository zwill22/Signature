import fs from "fs";
import path from "path";
import svg2img from "svg2img";

const dir = "./images";
const files = fs.readdirSync(dir, { withFileTypes: true });
const output = "png";

for (const file of files) {
  const filename = file.name;

  if (filename.endsWith(".svg")) {
    
    const filepath = path.resolve(path.join(dir, filename));

    const imgName = filename.split(".")[0];
    const outName = `${imgName}.${output}`

    console.log(`${filename} -> ${outName}`);

    const outpath = path.resolve(path.join(dir, outName));

    const svgString = fs.readFileSync(filepath);

    svg2img(svgString, function (error, buffer) {
      fs.writeFileSync(outpath, buffer);
    });
  }
}
