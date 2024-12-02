// code your solution here
const record = [
    { year: "2015", result: "W" },
    { year: "2014", result: "N/A" },
    { year: "2013", result: "L" },
    { year: "1998", result: "W" },
    { year: "1997", result: "W" },
    //...
]

superbowlWin(record);

function superbowlWin(Arr) {
    const win = Arr.find(function (Arr) {
        return Arr.result === "W";
    })
    return win ? win.year : undefined
}

console.log(superbowlWin(record))