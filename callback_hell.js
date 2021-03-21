const {
  readdir,
  readFile,
  writeFile
} = require("fs");
const {
  join
} = require("path");
const inbox = join(__dirname, "inbox");
const outbox = join(__dirname, "outbox");

const reverseText = str =>
  str
  .split("")
  .reverse()
  .join("");

/* Limpiamos el callback hell compartimentando las funciones 
   y facilitando la lectura y comprensión del código. Aún tenemos
   llamadas a funciones dentro de otras funciones, pero el orden
   de ejecución es comprensible y responden a acciones claras y
   bien detalladas */

function read(){
  readdir(inbox, (error, files) =>{
    if (error){
      return console.log("Error: Folder inaccessible");
    }
    readfiles(files);  
  });
}

function readfiles(files){
  files.forEach(file => {
    readFile(join(inbox, file), "utf8", (error, data) => {
      if (error) {
        return console.log("Error: File error");
      }
      write(file,data);
    });
  }); 
}

function write(file,data){
  writeFile(join(outbox, file), reverseText(data), error => {
        if (error) {
           return console.log("Error: File could not be saved!");
        }
        console.log(`${file} was successfully saved in the outbox!`);
  });
}

read();

