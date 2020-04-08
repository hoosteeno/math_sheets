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

function makeProblems(digits, operator) {
    var p = [];
    for (var i=0; i<20; i+=1) {
        var topNum = getRandomInt(getMax(digits));
        var bottomNum = getRandomInt(topNum);
        p.push({topNum: topNum, bottomNum: bottomNum, operator: operator})
    }
    return p;
}

Vue.component('problem-item', {
    props: ['problem']
});

var problems = new Vue({
    el: '#problem-container',
    data: {
        digits: 2,
        operator: "+"
    },
    computed: {
        problems: function() {
            return makeProblems(this.digits, this.operator);
        }
    }
});
