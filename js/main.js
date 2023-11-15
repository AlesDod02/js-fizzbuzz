
for (let i=1; i < 101; i++) {
    
    if (i%15==0){
        //i=fizzbuzz
        console.log("fizzbuzz")
    }
    else if(i%5==0){
        //i=buzz
        console.log("buzz");
    }
    else if(i%3==0){
        //i=fizz
        console.log("fizz");
    }
    else {
        console.log(i);
    }
}