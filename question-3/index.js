console.log("\n");
console.log("Question 3");
console.log("================");

const fs = require('fs');
const path = require('path'); 
const logsDir = path.join(__dirname,'Logs');


//check if have logs directory
if(!fs.existsSync(logsDir)){
    fs.mkdirSync(logsDir);

    //change directory to the Logs Directory
    process.chdir(logsDir);

    //add 10 new files
    for (let i = 0; i < 10; i++){
        const fileName = `log${i}.txt`;
        fs.writeFileSync(fileName,fileName);
        console.log(fileName); 
    }

}else{
    const logsDirectory = fs.readdirSync(logsDir);
    
    //iterate through each file and delete
    logsDirectory.forEach( file => {
        console.log(`delete files...${file}`);
        fs.unlinkSync(path.join(logsDir,file));
    });

    //remove directory
    fs.rmdirSync(logsDir)
}


