import path from 'path'
const fullpath = path.join ('/path','index.py','file.java')
console.log("joined path= ",fullpath);
// our absolute path is    C:\Users\ASUS\Desktop\web dev projects\backend\lect_3pathmodule
const absolutepath =path.resolve();
console.log("we are currently working on " ,absolutepath);

// extension name
const extname= path.extname('resume.pdf');
console.log("extname =",extname);
if(extname== '.pdf')
    console.log("yes");
else
    console.log("no");


