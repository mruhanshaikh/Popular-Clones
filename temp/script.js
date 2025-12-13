let count=3;
let pass="ruhan";
while(count>0){
    let input=prompt("Enter Password");
    if(input===pass){
        console.log("Succesfull login");
        break;
    }else{
        count--;
        console.warn(`${count} Attempt Remaing`);
    }   
}
console.error("Account Locked");