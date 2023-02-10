// import os from "os";
import { core } from "./calc.js";
import readline from "readline";
import {readFileSync, writeFileSync, existsSync} from "fs"
import {join} from "path"

// console.log("Nodemon");
// for (let i=0; i<10; i++){
//     console.log(i);
// }

// console.log(os.cpus());   
// process.stdin.on("data", (d)=>{
//     const data=d.toString();
//     const str=data.split('');
//     console.log("Вы ввели ----->", data);
//     console.log("Калькулятор ----->", core( Number(str[0]), str[1], Number(str[2])));
// })

// console.log(core);



// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });
// rl.question("What is your favorite food? ", (answer) => {
//   console.log(`Oh, so your favorite food is ${answer}`);
// });


// const file1=readFileSync('calc.js', {encoding:'utf8'})

// console.log(file1);
// if (existsSync('calc1.js')){
//     console.log("Файл существует!!!");
// } else{

// writeFileSync('calc1.js', file1)}



