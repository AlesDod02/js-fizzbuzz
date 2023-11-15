let lista = document.getElementById("listanumeri");


for (let i=1; i < 101; i++) {
    let listItem = document.createElement("li")
    
    if (i%15==0){
        listItem.textContent="fizzbuzz"
        //i=fizzbuzz
        console.log("fizzbuzz")
    }
    else if(i%5==0){
        listItem.textContent="buzz"
        //i=buzz
        console.log("buzz");
    }
    else if(i%3==0){
        listItem.textContent="fizz"
        //i=fizz
        console.log("fizz");
    }
    else {
        console.log(i)
        listItem.textContent=i
    }
    listanumeri.appendChild(listItem)
   
}


