let count=0;
function checkprime(num){
    for(i=1;i<=num;i++){
        if(num%i==0){
            count++;
        }
    }
    if(count==2){
        console.log("Prime")
    }
    return false;
}
console.log(checkprime());