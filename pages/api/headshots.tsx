import fs from "fs";
import path from "path";

// API that grabs directory of local image in JSON format
export default function handler(req, res) {
  const headshotDirectory = path.join(process.cwd(), "public/images/headshots");
  const headshotFiles = fs.readdirSync(headshotDirectory);
  const images = headshotFiles.map((file) => `/images/headshots/${file}`);
  res.status(200).json(images);
}
