import {readFile,writeFile,appendFile,mkdir} from 'fs/promises'
// read file content
//we create a function with name diff from readFile
// 'utf-8' represents the file type that is the format in which it will be encoded 
const read_file= async (filename) =>
{
    const data=await readFile(filename,'utf-8')
    console.log(data);
};
read_file('sample.txt')


// Create file
 const create_file = async (fileName,content) =>{
    await writeFile(fileName,content)
    console.log("File created successfully....")
 }
 create_file('testing.txt','just another file made for testing ');


// add content to file 
const extratext ="additional textt "
const append_file=async(filename,content)=>
{
    await appendFile(filename,content);
    
}
append_file('testing.txt',extratext)

//add directory/folder 
 const create_folder = async(foldername) =>
 {
    await mkdir(foldername);
 }
 create_folder('newfolder');
 // adding folders inside a folder with recirsive = true feature 

 const create_folders = async(folder_name) =>
 {
    await mkdir(folder_name,{recursive:true});
 }
 create_folders('newfolder/newfolder2');
 create_folders('newfolder/newfolder3');
 


