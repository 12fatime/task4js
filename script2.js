const hesab=(array)=>{
    let kichik=array[0];
    let boyuk=array[0];
    if(array.length !==0){
        for(let i=1; i<array.length; i++){
            if(kichik>array[i]){
                kichik=array[i];
            }
            if(boyuk<array[i]){
                boyuk=array[i]
            }
        }
        let ferq= boyuk - kichik;
        console.log(ferq);
    }else{
        return "Array is empty!"
    }
}
console.log(hesab([5,7,9,12,14,16,18]));