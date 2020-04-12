// take a count of digits and turn it into the top number of a random range
function getMax(digits) {
    digits = parseInt(digits) || 2;
    return parseInt("9".repeat(digits));
}

// get a random integer between 0 and a maximum number
function getRandomInt(max) {
    return Math.floor(Math.random() * (max + 1));
}

// produce a math problem with a top number, a bottom number, and an operator
function makeProblems(digits, operator) {
    var p = [];
    for (var i=0; i<25; i+=1) {
        var topNum = getRandomInt(getMax(digits));
        var bottomNum = getRandomInt(topNum);
        var answer = 0;
        switch(operator) {
            case "+":
                answer = topNum + bottomNum;
                break;
            case "-":
                answer = topNum - bottomNum;
                break;
            case "x": 
                answer = topNum * bottomNum;
                break;
            case "÷": 
                topNum = topNum || 1;
                bottomNum = bottomNum || 1;
                var remainder = topNum % bottomNum;
                answer = Math.floor(topNum / bottomNum) + (remainder ? " r" + remainder : "");
                break;
        }
        p.push({topNum: topNum, bottomNum: bottomNum, operator: operator, answer: answer})
    }
    return p;
}

Vue.component('problem-item', {
    props: ['problem', 'showAnswers']
});

var problems = new Vue({
    el: '#problem-container',
    data: {
        digits: 2,
        operator: "+",
        showAnswers: false
    },
    computed: {
        problems: function() {
            return makeProblems(this.digits, this.operator);
        }
    }
});
