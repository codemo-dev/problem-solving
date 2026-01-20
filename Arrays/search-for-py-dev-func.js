function getFirstPython(list) {
    for (let i = 0; i < list.length; i++) {
        if (list[i].language === "Python") {
            return `${list[i].firstName}, ${list[i].country}`;
        } else if (i + 1 === list.length && list[i].language !== "Python") {
            return "There will be no Python developers";
        }
    }
};

let list = [
    {firstName : "Mohamed", age : 19, language : "JavaScript", country : "Sudan"},
    {firstName : "Sadeg", age : 23, language : "Python", country : "Sudan"},
    {firstName : "Ahmad", age : 29, language : "Java", country : "egypt"}
];

console.log(getFirstPython(list));