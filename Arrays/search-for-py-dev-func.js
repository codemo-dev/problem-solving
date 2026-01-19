function getFirstPython(list) {
    for (let i = 0; i < list.length; i++) {
        if (list[i].language === "Python") {
            return `${list[i].firstName}, ${list[i].country}`;
        } else if (i + 1 === list.length && list[i].language !== "Python") {
            return "There will be no Python developers";
        }
    }
}
