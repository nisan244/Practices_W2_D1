var friends = ["rahim", "karim", "abdul", "sadsd", "heroAlom"];

let big_ele = friends[0];
for (let i = 1; i < friends.length; i++){
    if (big_ele.length < friends[i].length) {
        big_ele = friends[i];
    }

}

console.log(big_ele);