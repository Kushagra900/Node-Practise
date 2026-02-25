//function declaration

console.log("server is running!");

function sum(a,b)
{
return a+b;
}

console.log(sum(4,5));

var sumnum = (a,b) => {
    return a+b;
}

let res = sumnum(9,9);
console.log(res);

var func = (sumnum) => {
    let res = sumnum(88, 12);
    console.log("Result of the callback function is: ", res);
    
}

func(sumnum);


var multiply = (a,b) => a*b;

function multipurpose(a,b, callback)
{
console.log("sum of the given  numeber is: ", (a+b));

console.log("Product of the given number evaluated through callback  is: ", callback(a,b));

}

multipurpose(10, 20, multiply);