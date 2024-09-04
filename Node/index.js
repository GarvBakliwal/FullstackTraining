// READ FILE SYNC

const fs = require('fs');
const { log } = require('console');
const os = require('os');
const path = require('path')

// const data = fs.readFileSync('./Node/index.txt','utf-8');
// console.log(data);
// console.log('Reading File Ended');

// // NON BLOCKING
// fs.readFile('./Node/index.txt','utf-8',(err,data)=>{
//     console.log(data);
// })
// console.log('async file ended');

// WRITE
// writeFile and writeFileSync
// fs.writeFileSync('./Node/Text.txt','Hello Garv');

// fs.writeFile('./Node/example.txt','asyncdata',()=>{
    //     console.log('File Created');
    
    // })
    
    // APPEND
    // fs.appendFile('./Node/index.txt','\nadding using append',()=>{
        //     console.log('new data added');
        // })
        
        
        // RENAME
        // fs.renameSync('./Node/index.txt','./Node/Demo.txt')
        
// OPERATING SYSTEM MODULE
// GIVES THE DETAILS ABOUT THE SYSTEM WHERE THE NODE JS IS INSTALLED
// console.log(os.hostname());
// console.log(os.platform());
// console.log(os.cpus());
// log(os.arch())
// log(os.totalmem());
// log(os.freemem());


// PATH MODULES
// path.dirname

// log(path.dirname('/Users/garv/Desktop/College/Fullstack Training/Node/index.js'));

// log(path.basename('/Users/garv/Desktop/College/Fullstack Training/Node/index.js'))

// log(path.extname('/Users/garv/Desktop/College/Fullstack Training/Node/index.js'))

// log(path.parse('/Users/garv/Desktop/College/Fullstack Training/Node/index.js'))

// log(path.resolve('Users','garv','Dekstop','College'));

// log(path.join('Users','garv','Dekstop','College'));

// __dirname
// log(__dirname)
// log(__filename)


const finalPath = path.join(__dirname,'Demo.txt');
fs.readFile(finalPath,'utf-8',(err,data)=>{
    log(data)
})