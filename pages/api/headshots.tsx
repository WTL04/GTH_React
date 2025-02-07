import { NextApiRequest, NextApiResponse } from "next"; // adding type to delpoy on vercel
import path from "path";
import fs from "fs";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const headshotDirectory = path.join(process.cwd(), "public/images/headshots");
  const headshotFiles = fs.readdirSync(headshotDirectory);
  const images = headshotFiles.map((file) => `/images/headshots/${file}`);

  res.status(200).json(images);
}
