const fs = require("fs");
const path = require("path");
let product = [];

module.exports = class Products {
  constructor(t) {
    this.title = t;
  }
  async addData() {
    await fs.appendFile(
      path.join(__dirname, "data.txt"),
      `${this.title} `,
      "utf-8",
      (err) => {
        if (err) {
          console.log(this.title);
        } else {
          console.log("done");
        }
      }
    );
  }
  static fetchAll() {
    let data = fs.readFileSync(path.join(__dirname, "data.txt"), "utf-8");
    return data.trim().split(" ");
  }
};
