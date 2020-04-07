var initial = {
    count: 20,
    operator: "+",
    digits: "2"
}

function getMax(digits) {
    digits = parseInt(digits);
    return parseInt("9".repeat(digits));
}

function getRandomInt(max) {
    return Math.floor(Math.random() * (max + 1));
}

function makeProblems(params) {
    var p = [];
    for (var i=0; i<20; i+=1) {
        var topNum = getRandomInt(getMax(digits));
        var bottomNum = getRandomInt(topNum);
        p.push({topNum: topNum, bottomNum: bottomNum, operator: operator})
    }
    return p;
}

/*
var problems = new Vue({
    el: '#problems',
    data: {
        problems: makeProblems(initial)
    }
});
*/