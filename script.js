// function greetings (){
    // setTimeout(function () {

    //     console.log("hei")}, 10000)

// SetTimeout = gir en ønsket "delay" 

//     console.log("hei");
// };

// function goodbye (){
//     console.log("hade");
// };

// greetings()
// goodbye()

let num1 = 6    
let num2 = 10
addSum(num1,num2, displaySum)
function addSum(one, two, callback){
    let result = one + two
    callback(result)
}

function displaySum (sum) {
    console.log(`til sammen er det : ${sum}`)
}

// let message = `Dette 
// er 
// en 
// multilinje 
// streng.`;
// console.log(message);