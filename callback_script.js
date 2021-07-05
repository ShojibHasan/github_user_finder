// callback function

// setTimeout(function(){
//     console.log("Hello World")
// },2000)



// Synchoronus way
// let persons =[
//     {firstName: "Shojib",lastName: "Hasan"},
//     {firstName: "Fazle",lastName: "Rahat"},
// ]


// function createPerson(person){
//     setTimeout(function(){
//         persons.push(person);
//     },4000)
// }


// function getperson(){
//     setTimeout(function(){
//         let output = '';
//         persons.forEach(function(person){
//             output += `<li> ${person.firstName} ${person.lastName} </li>`
//         });
//         document.getElementById('output').innerHTML = output;
        
//     },1000);
// }


// Async way

// let persons =[
//     {firstName: "Shojib",lastName: "Hasan"},
//     {firstName: "Fazle",lastName: "Rahat"},
// ]


// function createPerson(person,callback){
//     setTimeout(function(){
//         persons.push(person);
//         callback();
//     },2000)
// }


// function getperson(){
//     setTimeout(function(){
//         let output = '';
//         persons.forEach(function(person){
//             output += `<li> ${person.firstName} ${person.lastName} </li>`
//         });
//         document.getElementById('output').innerHTML = output;
        
//     },500);
// }

// createPerson({firstName:"Roney", lastName:"CHy"},getperson);

// getperson()



// Promises


let persons =[
    {firstName: "Shojib",lastName: "Hasan"},
    {firstName: "Fazle",lastName: "Rahat"},
]


function createPerson(person){
    let prom = new Promise(function(resolve,reject){
        persons.push(person);
        let error = false;
        if(!error){
            resolve();
        }
        else{
            reject('Error!, Something wrong!');
        }
       

    });
    return prom
    
}


function getperson(){
    setTimeout(function(){
        let output = '';
        persons.forEach(function(person){
            output += `<li> ${person.firstName} ${person.lastName} </li>`
        });
        document.getElementById('output').innerHTML = output;
        
    },500);
}

createPerson({firstName:"Roney", lastName:"CHy"}).then(getperson).catch(function(err){
    console.log(err);
});

getperson()
