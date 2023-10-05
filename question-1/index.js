
console.log("\n");
console.log("Question 1");
console.log("================");

const mixedArray = ["PIZZA",10,true,25,false,"Wings"];

const lowerCaseWords = (mixedArray) => {

    let lowerCased = [];

    return new Promise((resolve, reject) => {
        //verify the array using the built in .isArray method 
        if(!Array.isArray(mixedArray)){
            reject( console.log("this is not an array") );
        }
        
        //use array filter to get strings from the mixed array
        let stringOnlyArr= mixedArray.filter( element => typeof(element) === "string");
        
        //iterate through each string
        stringOnlyArr.forEach(word => {
            word = word.split(""); 
            word = word.map( letter => letter.toLowerCase() ).join("");
            lowerCased.push(word);
        });

        resolve( console.log(lowerCased) );
    });
}

lowerCaseWords(mixedArray)
    .then( (modifiedArr) => modifiedArr)
    .catch( (reject) => reject)

console.log("\n");



