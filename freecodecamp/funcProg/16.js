const squareList = arr => {
    // Only change code below this line
    const res = arr.filter(elem => elem > 0 && Number.isInteger(elem))
    const res1 = res.map(elem => elem*elem)
    return res1;
    // Only change code above this line
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);