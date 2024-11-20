const ar = [5, 13, 8, 11, 3, 6, 19, 1, 14, 9, 15, 12, 10, 17, 7, 2, 16, 20, 18, 4];

for (let i = 0; i < ar.length; i++){
    for (let j = i + 1; j < ar.length; j++){
        if (ar[i] > ar[j]) {
            let temp = ar[i];
            ar[i] = ar[j];
            ar[j] = temp;
        }
    }
}

console.log(...ar);