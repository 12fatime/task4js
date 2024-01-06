function hesab(array, number) {
    for (let element of array) {
        if (element === number) {
            console.log(`${number} have in array!`);
            return true;
        }
    }
    console.log(`${number} don't have in array!`);
    return false;
}

console.log(hesab([5,6,9,10,13,15,18],15));