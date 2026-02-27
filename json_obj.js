var obj = {
    name: "Kushagra",
    age: 24,
    city: "Gorakhpur"
}

var jsonstr = JSON.stringify(obj)

console.log("Obj to JSON : ", jsonstr)


var jsonStr = '{"name":"Kushagra","age":24,"city":"Gorakhpur"}'

var obj = JSON.parse(jsonStr);

console.log("JSON -----> OBJECT : ", obj)

console.log(obj.name)