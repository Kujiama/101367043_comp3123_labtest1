console.log("\n");
console.log("Question 2");
console.log("================");



const reslovedPromise = () =>{
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            let success = {'message':'delayed success!'}
            resolve(success);
        },500)
    });
}

const rejectedPromise = () =>{
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            try{
                throw new Error('error : delayed exception!')
            }catch(e){
                let err = {"message" : 'delayed exception!'};
                reject(err);
            }
        },500)
    });
}



reslovedPromise().then( (success) =>console.log(success) );
rejectedPromise().catch( (error) =>console.log(error) );

console.log("\n");
