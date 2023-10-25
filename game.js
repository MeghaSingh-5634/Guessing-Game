const max=prompt("Enter the maximum number");
const random=Math.floor(Math.random()*max)+1;
let guess=prompt("Guess the number");
while(true){
    if(guess=="Quit"){
        console.group("The player quits");
        break;
    }
    else if(guess==random){
        console.log("Yay! You guessed it right.The random number is ",random);
        break;
    }
    else if(guess<random){
        guess=prompt("Hint:You entered a smaller number than expected.");
    }
    else {
        guess=prompt("Hint:You entered a larger number than expected.");
    }
    
    
}
