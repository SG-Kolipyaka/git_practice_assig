let prime_count=0;
function checkprime(num){
    for(i=1;i<=num;i++){
        if(num%i==0){
            prime_count++;
        }
    }
    if(prime_count==2){
        console.log("Prime");
    } else { console.log("No"); }
    
}
console.log(checkprime(13));