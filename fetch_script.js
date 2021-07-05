document.getElementById("get_data").addEventListener('click',getData);





// function getData(){
//     fetch('http://api.icndb.com/jokes/random').then(function(res){
//         //console.log(res.json())

//         return res.json()
//     })
//     .then(function(data){
//         console.log(data)
//     })
//     .catch(function(err){
//         console.log(err);
//     })
// }

// Arrorw Function
// let test = (pearam1) => param1 ;


function getData(){
    fetch('http://api.icndb.com/jokes/random')
    .then(res => res.json())
    .then(data => {console.log(data); })
    .catch(err => {console.log(err);})
}