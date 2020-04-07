var initialParams = {
    count: 20,
    operator: "+",
    digits: "2"
}

function getMax(digits) {
    digits = parseInt(digits) || 2;
    return parseInt("9".repeat(digits));
}

function getRandomInt(max) {
    return Math.floor(Math.random() * (max + 1));
}

function makeProblems(params) {
    var p = [];
    for (var i=0; i<params.count; i+=1) {
        var topNum = getRandomInt(getMax(params.digits));
        var bottomNum = getRandomInt(topNum);
        p.push({topNum: topNum, bottomNum: bottomNum, operator: params.operator})
    }
    return p;
}

Vue.component('problem-item', {
    props: ['problem']
});

var problems = new Vue({
    el: '#problem-container',
    data: {
        problems: makeProblems(initialParams)
    }
});
