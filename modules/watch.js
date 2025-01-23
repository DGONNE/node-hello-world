/* const fs = require("fs");
const { exec } = require("child_process");

fs.watch("index.js", (eventType, filename) => {
  if (eventType === "change") {
    console.log(`${filename} è stato modificato!`);
    exec("node index.js", (err, stdout, stderr) => {
      if (err) {
        console.error(`Errore nell'esecuzione del file: ${err}`);
        return;
      }
      console.log(stdout);
    });
  }
});

console.log("..."); */
