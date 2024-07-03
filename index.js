//declare a variable and assign it to prompt users for their flavour of froyo
const userInputString = prompt ('What flavours would you like for your froyo? (please key in each flavours separated by commas', 'vanilla,vanilla,vanilla,strawberry,coffee,coffee');

// Split the string of flavours into an array of strings.
const stringArray = userInputString.split(',');

//A loop is used to iterate through the array of flavors
const flavoursCount = {};
for( let i = 0; i < stringArray.length; i++) {
//using if statements to check if the flavor already exists.
    if(flavoursCount[stringArray[i]]){
         flavoursCount[stringArray[i]] += 1;
    } else {
         flavoursCount[stringArray[i]] = 1;
    }
}

console.log("Froyo Flavours:" ,flavoursCount);
