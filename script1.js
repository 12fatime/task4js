const hesab=(number)=>{
    let arr=[]
    while(number !==1){
        if(number % 2 ==0){
            number= number / 2;
            arr.push(number)
        }else{
            number= number * 3 + 1;
            arr.push(number)

        }
    }
    return arr;
}
console.log(hesab(40));