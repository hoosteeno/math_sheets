// take a count of digits and turn it into the top number for use in a random range
function getMax(digits) {
    digits = parseInt(digits) || 2;
    return parseInt("9".repeat(digits));
}

// get a random integer between 0 and a maximum number
function getRandomInt(max) {
    return Math.floor(Math.random() * (max + 1));
}

// produce an array of math problems with a top number, a bottom number, an operator, an answer
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

var app = new Vue({
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
    },
    methods: {
        print: function(event) {
            var controls = "digits="+this.digits+",operator="+this.operator+",showAnswers="+this.showAnswers;
            try {
                gtag('event', 'print', {
                    'event_category' : 'Controls', 
                    'event_label' : controls
                });
                window.print(); 
            } catch(e) {
                console.error(e);
            }
        }
    }
});