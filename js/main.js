let lista = document.getElementById("listanumeri");


for (let i=1; i < 101; i++) {
    let listItem = document.createElement("li");
    
    if (i%15==0){
        listItem.textContent="FizzBuzz"
        //i=fizzbuzz
        console.log("FizzBuzz");
    }
    else if(i%5==0){
        listItem.textContent="Buzz"
        //i=buzz
        console.log("Buzz");
    }
    else if(i%3==0){
        listItem.textContent="Fizz"
        //i=fizz
        console.log("Fizz");
    }
    else {
        console.log(i)
        listItem.textContent=i
    }
    listanumeri.appendChild(listItem)
    listItem.classList.add("text-primary");
   
}


