const sum = array => {
    let total = 0;
    for (let i = 2; i < array.length; i++) {
        total += Number(array[i]);
    }
    return total;
}

console.log(sum(process.argv));