function points(games) {
  let list = []
  for (let i = 0; i < games.length; i++) {
    let subList = games[i].split(":");
    if (Number(subList[0]) > Number(subList[1])) {
        list.push(3);
    } else if (Number(subList[0]) < Number(subList[1])) {
        list.push(0);
    } else if (Number(subList[0]) === Number(subList[1])) {
        list.push(1);
    }
  }
  return list.reduce((acc, curr) => acc + curr);
}

let list = ["3:1", "1:1", "0:2"];

console.log(points(list))