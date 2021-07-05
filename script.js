// var x;
// x=prompt("Enter Your Name")
// console.log(x)

// document.write(x)
// const a = prompt("Enter a Value")
// const fahrenheit = 9/5*a + 32
// document.write(fahrenheit)

// let person1 ={
//     firstname: "Shojib",
//     lastname: "Hasan",
//     dob: "30-04-1997",

//     fullname: function(){
//         console.log(`${this.firstname} ${this.lastname}`);
//     }
// }

// let person2={
//     firstname: "Mahfujul",
//     lastname: "Hasan",
//     dob: "30-04-1999",

//     fullname: function(){
//         console.log(`${this.firstname} ${this.lastname}`);
//     }
// }

// console.log(person1)
// console.log(person2)

// class Person{
//     constructor(fname,lname,birthdate){
//         this.firstname = fname;
//         this.lastname = lname;
//         this.dob = birthdate;
//     }
//     calculateAge(){
//         let birthdate = new Date(this.dob);
//         let diff = Date.now() - birthdate.getTime();
//         let ageDate = new Date(diff)
//         return Math.abs(ageDate.getUTCFullYear() - 1970)
//     }
// }

// let person1 = new Person("Shojib","Hasan","03-30-1999")
// console.log(person1.calculateAge())


// class Person{
//     constructor(fname,lname){
//         this.firstname = fname;
//         this.lastname = lname;

//     }
//     greeting(){
//         return `Hello ${this.firstname} ${this.lastname}`
//     }
// }

// class Customer extends Person{
//     constructor(fname,lname,phone,memberShip){
//         super(fname,lname);
//         this.phone = phone;
//         this.memberShip = memberShip;
//     }

//     fullname(){
//         console.log(this.firstname,this.lastname);
//     }

// }

// let person1 = new Person("Shojib","Hasan")
// console.log(person1)
// console.log(person1.greeting())

// let customer1 = new Customer("Shojib","Hasan","01687849347","6 month")

// console.log(customer1)
// console.log(customer1.fullname())



//static function



// let re;
// let str;

// re =/Hello/;
// str = "Hello World"

// let result = re.exec(str);
// let result1 = re.test(str);
// let result2 = str.match(re);
// let result3 = str.search(re);
// console.log(result)
// console.log(result1)
// console.log(result2)
// console.log(result3)



// function SumOfNumbers(n){
//     let total =0
//     for (let i=1; i<=n;i++){
//         total +=i
//     }
//     return total
// }
// let starttime = performance.now()
// console.log(SumOfNumbers(10))
// let endTime = performance.now()

// console.log(`Time Took ${(endTime-starttime)/1000} seconds`)


// function SumOFNumbers2(n){
//     return n*(n+1)/2
// }
// let starttime = performance.now()
// console.log(SumOFNumbers2(10000000))
// let endTime = performance.now()

// console.log(`Time Took ${(endTime-starttime)/1000} seconds`)



// Reverse a String

// function reverseStr(str){
//     let revered_str = ""
//     for(let i = str.length -1;i>=0;i--){
//         revered_str += str[i]
//     }
//     return revered_str
// }
// console.log(reverseStr('hello'))


// function reverseStr(str){
//     let revered_str = ""
//     for(char of str){
//         revered_str += char + revered_str
//     }
//     return revered_str
// }
// console.log(reverseStr('hello'))


// function reverseStr(str){
    
//     return str.split('').reduce((rev,char)=> char+rev,'')
// }
// console.log(reverseStr('hello'))



// Regular expressions

// let re;
// let str;
// re =/hello/;
// re = /hello/i;
// str = "Hello World"
// console.log(re.exec(str))


// function reTest(re, str){
//     if(re.test(str)){
//         console.log(`'${str}' matches '${re.source}'`);
//     }
//     else{
//         console.log(`'${str}' dosen't match '${re.source}'`)
//     }
// }

// // Meta Characters

// let re;
// re = /^hello/i;
// str = "Hello word"

// let re;
// let str;

// re = /^[0-9]{4}$/;
// str = "4000"

// console.log(re.test(str));


var student ={
    name: "Shojib Hasan",
    age: 24,
    hometown: "Dhaka"
}

var student_json = JSON.stringify(student)
console.log(student_json);


var student_new = JSON.parse(student_json)
console.log(student_new)

var person ={
    name: "Shojib",
    age: 25,
    hometown: "Dhaka",
    married: false,
    dob: '1995-05-12',
    // test_null = null,
    // test_undofined: undefined,
    greet: function(){
        console.log(`Hello ${this.name}`)
    }
}
var person_json = JSON.stringify(person);
console.log(person_json) 


var personNew = {
    "নাম" : "সজীব", 
    "বয়স" : "২৪",
    "বাড়ি" : "কুমিল্লা",
    "বিয়া" : "করি নাই",   
}
console.log(personNew)

var personNew_json = JSON.stringify(personNew)
console.log(personNew_json)


var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function(){
    if(this.readyState == 4 && this.status==200){
        var  data = this.responseText;
        jsonData(data)
    }
};
xmlhttp.open("GET","data.json",true);
xmlhttp.send();


function jsonData(json_obj){
    // console.log(json_obj);
    var js_obj = JSON.parse(json_obj)
    // console.log(js_obj)
    for (x in js_obj.person){
        // console.log(js_obj.person[x])
        var persons = js_obj.person;
        // console.log(persons[x])
        for (y in persons[x]){
            console.log(persons[x][y])
        }
    }
}


// Asynchronous Programming
//Get Data without loading the page

document.getElementById('get_data').addEventListener('click',loadData);
function loadData(){
    // create XHR object: Xml Http Request

    let xhr = new XMLHttpRequest();
    // Open Function
    xhr.open('GET','data.txt',true);
    xhr.onprogress = function(){
        console.log(xhr.readyState)
    }
    // xhr.onload = function(){
    //     if (this.status === 200){
    //         document.getElementById("load_data").innerHTML = this.responseText
    //     }
    // } 

    xhr.onreadystatechange = function(){
        if(this.status===200 && this.readyState===4){
            console.log(this.responseText)
            document.getElementById("ll").innerHTML = this.responseText
        }
    }
    xhr.send();
    console.log(xhr)

}