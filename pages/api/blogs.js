// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as fs from "fs";
export default function handler(req, res) {
  fs.readFile("../../blogdata/how-to-learn-js", (err, data) => {
    // console.log("err:", err);
    console.log("data:", data);
  })
  res.status(200).json({ name: "Abhishek Ranjan" });
}
