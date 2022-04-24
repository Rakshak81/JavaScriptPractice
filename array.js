const addToBatch = (array, number) => {
    if(array.length >= 5) {
        return(array);
    }
    else {
        return(array.concat(number));
    }
}


console.log(addToBatch([1,2,3,4], 3));
console.log(addToBatch([1,8], 3));
console.log(addToBatch([1,4,5,6,7,7,8,9], 3));
console.log(addToBatch([1, 2, 3, 4, 5, 6, 7, 8, 9], 3));
console.log(addToBatch([], 3));