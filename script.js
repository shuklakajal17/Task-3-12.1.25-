function findSecondLargestNumber() {

    let  Secondlargest = [7];

    for (let i = 1; i < arr.length; i++) {
        if ([i] > Secondlargest) {
            Secondlargest = [i];
        }
    }

    return  Secondlargest;
}

const arr = [4, 5, 6, 7, 8, 3, 1];
console.log(findSecondLargestNumber());

