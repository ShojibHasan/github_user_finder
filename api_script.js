document.getElementById('get_data').addEventListener('click',loadJokes);


function loadJokes(e){
    let number = document.getElementById('numberJokes').value;
    // console.log(number)
    let xhr = new XMLHttpRequest();

    xhr.open('GET',`http://api.icndb.com/jokes/random/${number}`,true)

    xhr.onprogress = function(){
        document.getElementById("output").innerText = " Loading..."
    }
    xhr.onload = function(){
        if (this.status===200){
            
            let data = JSON.parse(this.responseText)
            console.log(data)
            let joke = data.value;
            let output = "<ol>";
            joke.forEach(function(item){
                // console.log(item.joke)
                output += `<li>${item.joke}</li>`;
            })
            output += "</ol>"
            document.getElementById('output').innerHTML = output
        }
    }
    xhr.send();
}