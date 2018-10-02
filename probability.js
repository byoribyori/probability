(function () {
    'use strict';
    const 当たり確率 = document.getElementById('当たり確率input');
    const 回数 = document.getElementById('回数input');
    const 希望確率 = document.getElementById('希望確率input');
    const assessmentButton = document.getElementById('assessment');
    const clearButton = document.getElementById('clear');
    const oneperButton = document.getElementById('oneper');
    const tenperButton = document.getElementById('tenper');
    const tenButton = document.getElementById('ten');
    const hundredButton = document.getElementById('hundred');
    const ninetyButton = document.getElementById('ninety');
    const ninetynineButton = document.getElementById('ninetynine');
    const resultDivided = document.getElementById('result-area');
    const resultDivided2 = document.getElementById('result-area2');
    const resultDivided3 = document.getElementById('result-area3');

    document.onkeydown = function (e) {
        if (e.keyCode === 32) {
         clearButton.onclick();
        }
    }

    function removeAllChildren(element) {
        while (element.firstChild) {
            element.removeChild(element.firstChild);
        }
    }

    clearButton.onclick = () => {
        console.clear();
        var inputs = document.getElementsByTagName("input");
        for (var i = 0; i < inputs.length; i++) {
            if (inputs[i].type == "text") {
                inputs[i].value = "";
            }
        }
    }

    oneperButton.onclick = () => {
        var inputs = document.getElementsByTagName("input");
        if (inputs[0].value.length === 0) {
            inputs[0].value = "0";
        } else {
            if (isNaN(inputs[0].value) === true) {
                inputs[0].value = "0";
            }
        }
        var input = parseFloat(inputs[0].value);
        var input = input += 1;
        inputs[0].value = input;
    }
    tenperButton.onclick = () => {
        var inputs = document.getElementsByTagName("input");
        if (inputs[0].value.length === 0) {
            inputs[0].value = "0";
        } else {
            if (isNaN(inputs[0].value) === true) {
                inputs[0].value = "0";
            }
        }
        var input = parseFloat(inputs[0].value);
        var input = input += 10;
        inputs[0].value = input;
    }
    tenButton.onclick = () => {
        var inputs = document.getElementsByTagName("input");
        if (inputs[4].value.length === 0) {
            inputs[4].value = "0";
        } else {
            if (isNaN(inputs[4].value) === true) {
                inputs[4].value = "0";
            }
        }
        var input = parseFloat(inputs[4].value);
        var input = input += 10;
        inputs[4].value = input;
    }
    hundredButton.onclick = () => {
        var inputs = document.getElementsByTagName("input");
        if (inputs[4].value.length === 0) {
            inputs[4].value = "0";
        } else {
            if (isNaN(inputs[4].value) === true) {
                inputs[4].value = "0";
            }
        }
        var input = parseFloat(inputs[4].value);
        var input = input += 100;
        inputs[4].value = input;
    }
    ninetyButton.onclick = () => {
        var inputs = document.getElementsByTagName("input");
        if (inputs[2].value.length === 0) {
            inputs[2].value = "0";
        }
        inputs[2].value = "90";
    }
    ninetynineButton.onclick = () => {
        var inputs = document.getElementsByTagName("input");
        if (inputs[2].value.length === 0) {
            inputs[2].value = "0";
        }
        inputs[2].value = "99";
    }

    assessmentButton.onclick = () => {
        var 当たり確率文字列 = 当たり確率.value;
        var 回数文字列 = 回数.value;
        var 回数文字列 = Math.floor(回数文字列);
        
        if (isNaN(当たり確率.value) === true 　|| isNaN(回数.value) === true) {
            alert('計算できません');
            return;
        }
        if (isNaN(希望確率.value) === true) {
            alert('計算できません');
            return;
        }
        if (当たり確率文字列 <= 0 || 回数文字列 < 0) {
            alert('計算できません');
            return;
        };
        if (当たり確率文字列.length === 0 || 希望確率.value < 0) {
            alert('計算できません');
            return;
        };
        if (当たり確率文字列 > 100 || 希望確率.value >= 100) {
            alert('計算できません');
            return;
        };

        removeAllChildren(resultDivided);
        removeAllChildren(resultDivided2);
        removeAllChildren(resultDivided3);
        const paragragh = document.createElement('p');
        const paragragh2 = document.createElement('p');
        const paragragh3 = document.createElement('p');

        console.clear();
        console.log(当たり確率.value + ' 以下の数が出ればあたり');

        var 希望終わり = false;
        var ガチャ終わり = false;
        var ii = 0;
        var end = false;
        var yaku = false;
        var 当たり回数 = 0;
        const 確率 = 当たり確率.value * 100;
        var random = 100000;
        var 当たり確率文字列 = 100 - 当たり確率文字列;
        var 当たり確率文字列 = 当たり確率文字列 / 100;
        var 結果 = 1;
        if(希望確率.value <= 当たり確率.value){
            var 希望確率まで = 0;
            var 希望終わり = true;
        }

        for (var iii = 0; ガチャ終わり === false; iii++) {
            if (回数文字列 === ii) {
                var 最終結果 = 結果 * 100;
                var 最終結果 = 100 - 最終結果;


                var 最終結果2 = (最終結果 + '');
                if (最終結果 < 10) {
                    if (最終結果2.charAt(5) === '') {
                    } else {
                        var yaku = true;
                    }
                } else {
                    if (最終結果2.charAt(6) === '') {
                    } else {
                        var yaku = true;
                    }
                }
                var 最終結果 = Math.round(最終結果 * 1000) / 1000;
                if (確率 < 10000) {
                    if (最終結果 === 100) {
                        var 最終結果 = 最終結果 - 0.01;
                    }
                }
            }
            var ii = ii + 1;
            var 結果 = 1 * 結果 * 当たり確率文字列;
            if (希望終わり === false && 希望確率.value < 100 - (結果 * 100)) {
                var 希望確率まで = iii;
                var 希望終わり = true;
            }
            if (iii > 回数文字列 && 希望終わり === true) {
                var ガチャ終わり = true;
            }
        }

        for (var ガチャ回数 = 1; end === false; ガチャ回数++) {
            var random = Math.floor(Math.random() * 10000 + 1);
            if (random > 確率) {
                if (random < 1000) {
                    if (ガチャ回数 < 10) {
                        console.log(' ' + ガチャ回数 + '回目=> ' + ' ' + (random / 100));
                    } else {
                        console.log(ガチャ回数 + '回目=> ' + ' ' + (random / 100));
                    }
                } else {
                    if (ガチャ回数 < 10) {
                        console.log(' ' + ガチャ回数 + '回目=> ' + (random / 100));
                    } else {
                        console.log(ガチャ回数 + '回目=> ' + (random / 100));
                    }
                }
            } else {
                var 当たり回数 = 当たり回数 + 1;
                if (random < 1000) {
                    if (ガチャ回数 < 10) {
                        console.log(' ' + ガチャ回数 + '回目=> ' + ' ' + (random / 100) + '  あたり!! ' + 当たり回数 + '回目');
                    } else {
                        console.log(ガチャ回数 + '回目=> ' + ' ' + (random / 100) + '  あたり!! ' + 当たり回数 + '回目');
                    }
                } else {
                    if (ガチャ回数 < 10) {
                        console.log(' ' + ガチャ回数 + '回目=> ' + (random / 100) + '  あたり!! ' + 当たり回数 + '回目');
                    } else {
                        console.log(ガチャ回数 + '回目=> ' + (random / 100) + '  あたり!! ' + 当たり回数 + '回目');
                    }
                } 

                if (ガチャ回数 > 回数.value) {
                    if(回数.value > 0){
                        if(yaku === true){
                        paragragh.innerText = 回数文字列 + '回で' + 当たり確率.value + '%の当たりが1回でも当たる確率は\n約' + 最終結果 + '%です';
                        }else{
                        paragragh.innerText = 回数文字列 + '回で' + 当たり確率.value + '%の当たりが1回でも当たる確率は\n' + 最終結果 + '%です';
                        }
                    }
                    paragragh3.innerText = 'シミュレーションでは' + ガチャ回数 + '回目で当たりました';
                    if (希望確率.value > 0) {
                        paragragh2.innerText = '1回でも当たる確率が' + 希望確率.value + '%になるには' + (希望確率まで + 1) + '回必要です';
                    }
                    resultDivided.appendChild(paragragh);
                    resultDivided2.appendChild(paragragh2);
                    resultDivided3.appendChild(paragragh3);
                    return;
                }
            }

            if (ガチャ回数 === 回数文字列 && 当たり回数 > 0) {
                if(回数.value > 0){
                    if(yaku === true){
                    paragragh.innerText = 回数文字列 + '回で' + 当たり確率.value + '%の当たりが1回でも当たる確率は\n約' + 最終結果 + '%です';
                    }else{
                    paragragh.innerText = 回数文字列 + '回で' + 当たり確率.value + '%の当たりが1回でも当たる確率は\n' + 最終結果 + '%です';
                    }
                }
                paragragh3.innerText = 'シミュレーションでは' + ガチャ回数 + '回中' + 当たり回数 + '回当たりました\n(' + 当たり回数 + '/' + ガチャ回数 + '=' + ((当たり回数 / ガチャ回数) * 100)　+ '%)';
                if (希望確率.value > 0) {
                    paragragh2.innerText = '1回でも当たる確率が' + 希望確率.value + '%になるには' + (希望確率まで + 1) + '回必要です';
                }
                resultDivided.appendChild(paragragh);
                resultDivided2.appendChild(paragragh2);
                resultDivided3.appendChild(paragragh3);
                return;
            }
        }
    };
})();
