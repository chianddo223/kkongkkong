'use strict';

const checkParti = prompt('참가자 수는?');

let n = 1;

const callBtn = document.querySelector('button');
const callInput = document.querySelector('#input_id');

const makeDiv = document.createElement("div");

const inspectString = isNaN(checkParti);
if (inspectString === true || checkParti === null) {

} else {
    const makePTag = document.createElement("p");
    makePTag.innerText = `참가자 수는 ${checkParti}명`;
    document.body.appendChild(makePTag);
    callBtn.addEventListener("click", handleClick);
}

function handleClick() {
    if (callInput.value.length === 3) {
        const newDiv = document.createElement("div");
        newDiv.innerText = `${n}번째 참가자 : ${callInput.value} 쿵쿵따`;
        makeDiv.appendChild(newDiv);
        document.body.appendChild(makeDiv);
        callInput.value = "";
        n = n + 1;
        if (n === parseInt(checkParti) + 1) 
            n = 1;
    } else {
        alert('3글자를 입력하세요')
        callInput.value = "";
    }
}