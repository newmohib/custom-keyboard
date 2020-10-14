
let arr = [
    { type: "num", value: 0, backColor: "#FF6347" },
    { type: "num", value: 1, backColor: "#FF6347" },
    { type: "num", value: 2, backColor: "#FF6347" },
    { type: "num", value: 3, backColor: "#FF6347" },
    { type: "num", value: 4, backColor: "#FF6347" },
    { type: "num", value: 5, backColor: "#FF6347" },
    { type: "num", value: 6, backColor: "#FF6347" },
    { type: "num", value: 7, backColor: "#FF6347" },
    { type: "num", value: 8, backColor: "#FF6347" },
    { type: "num", value: 9, backColor: "#FF6347" },
    { type: "num", value: 'P', backColor: "#FF6347" },
    { type: "num", value: 'M', backColor: "#FF6347" },
    { type: "num", value: 'H', backColor: "#FF6347" },
    { type: "num", value: 'R', backColor: "#FF6347" },
    { type: "str", value: "King", backColor: "#7FFFD4" },
    { type: "str", value: "Queen", backColor: "#DEB887" },
    { type: "str", value: "Full", backColor: "#F5F5DC" },
    { type: "str", value: "Twin", backColor: "#FFE4C4" },
    { type: "str", value: "Bunk", backColor: "#ADD8E6" },
    { type: "str", value: "Night", backColor: "#8A2BE2" },
    { type: "str", value: "Dress", backColor: "#A52A2A" },
    { type: "str", value: "Chest", backColor: "#5F9EA0" },
    { type: "str", value: "Sec", backColor: "#DEB887" },
    { type: "str", value: "Couch", backColor: "#D2691E" },
    { type: "str", value: "Reclin", backColor: "#FF7F50" },
    { type: "str", value: "Hide", backColor: "#7FFFD4" },
    { type: "str", value: "End", backColor: "#6495ED" },
    { type: "str", value: "Coffee", backColor: "#FFF8DC" },
    { type: "str", value: "TV", backColor: "#DC143C" },
    { type: "str", value: "Stand", backColor: "#808000" },
    { type: "str", value: "Chair", backColor: "#7FFFD4" },
    { type: "str", value: "Lazy", backColor: "#008B8B" },
    { type: "str", value: "Book", backColor: "#B8860B" },
    { type: "str", value: "Shelf", backColor: "#B8860B" },
    { type: "str", value: "Book", backColor: "#B8860B" },
    { type: "str", value: "Dine", backColor: "#B8860B" },
    { type: "str", value: "China", backColor: "#B8860B" },
    { type: "str", value: "Cubby", backColor: "#B8860B" },
    { type: "str", value: "Shoe", backColor: "#B8860B" },
    { type: "str", value: "Pack", backColor: "#B8860B" },
    { type: "str", value: "Dump", backColor: "#B8860B" },
    { type: "str", value: "Bring", backColor: "#B8860B" },
    { type: "str", value: "Wrap", backColor: "#B8860B" },
    { type: "str", value: "File", backColor: "#B8860B" },
    { type: "str", value: "Stool", backColor: "#B8860B" },
    { type: "str", value: "Desk", backColor: "#B8860B" },
    { type: "str", value: "Hutch", backColor: "#B8860B" },
    { type: "str", value: "Platform-", backColor: "#B8860B" },
    { type: "str", value: "Mech-", backColor: "#B8860B" },
    { type: "str", value: "Boxes", backColor: "#B8860B" },
    { type: "str", value: "Bins", backColor: "#B8860B" },
    { type: "str", value: "Patio", backColor: "#B8860B" },
    { type: "str", value: "BBQ", backColor: "#B8860B" },
    { type: "str", value: "Plants", backColor: "#B8860B" },
    { type: "str", value: "Tool", backColor: "#B8860B" },
    { type: "str", value: "Fit", backColor: "#B8860B" },
    { type: "str", value: "Wood-", backColor: "#B8860B" },
    { type: "str", value: "Metal-", backColor: "#B8860B" },
    { type: "str", value: "Glass-", backColor: "#B8860B" },
    { type: "str", value: "Plastic-", backColor: "#B8860B" },
    { type: "str", value: "Heavy-", backColor: "#B8860B" },
    { type: "str", value: "Big-", backColor: "#B8860B" },
    { type: "str", value: "Move", backColor: "#B8860B" },
    { type: "str", value: "-", backColor: "#B8860B" },
    { type: "str", value: "&", backColor: "#B8860B" },
    { type: "str", value: ".", backColor: "#B8860B" },
    { type: "str", value: "/", backColor: "#B8860B" }

];;

let initialFromLength = 10;
let fromLength = initialFromLength;
let strButtonView = 28;
let toLength = fromLength + strButtonView;
let total = arr.length;
let isShow = false;
let selectionStart = 0;
let selectionEnd = 0;
let createElement = document.getElementById("calculatorValue");

//2nd

let initialFromLength2 = 10;
let fromLength2 = initialFromLength2;
let strButtonView2 = 28;
let toLength2 = fromLength2 + strButtonView2;
let total2 = arr.length;
let isShow2 = false;
let selectionStart2 = 0;
let selectionEnd2 = 0;
let createElement2 = document.getElementById("calculatorValue2");

const createButton = () => {
    var buttonText = '';
    var buttonNum = '';
    arr.map((item, index) => {
        if (item.type === "str" && index >= fromLength && index <= toLength) {
            buttonText += `<div class="col col-md pl-0 pr-0 pb-0 mb-0 "><button onclick="getData('${item.value}')" type="button" class="btn-light p-0 btn-block button_custom_br">${item.value} </button></div>`;
        }
        else if (item.type === "num") {
            buttonNum += `<div class="col col-md pl-0 pr-0 mb-0 "><button onclick="getData('${item.value}')" type="button" class="btn-light p-0 btn-block button_custom_br">${item.value} </button></div>`;
        }
    });
    document.getElementById("allNum").innerHTML = buttonNum;
    document.getElementById("allStr").innerHTML = buttonText;
};
const getData = (value) => {
    let existValue = createElement.value;
    let totalLength = 0;
    let superscript = { 0: '\u2070', 1: '\u00B9', 2: '\u00B2', 3: '\u00B3', 4: '\u2074', 5: '\u2075', 6: '\u2076', 7: '\u2077', 8: '\u2078', 9: '\u2079', P: '\u1d3e', M: '\u1d39', R: '\u1d3f', H: '\u1d34' }
    let subscript = { 0: '\u2080', 1: '\u2081', 2: '\u2082', 3: '\u2083', 4: '\u2084', 5: '\u2085', 6: '\u2086', 7: '\u2087', 8: '\u2088', 9: '\u2089' }
    let isNum = Number(value);
    console.log(isNum);
    if (value == 'space') {
        createElement.value = `${existValue} `;
    }
    else if (isNum || isNum == 0 || value == 'P' || value == 'M' || value == 'R' || value == 'H') {
        createElement.value = `${existValue}${superscript[value]}`;
        totalLength = `${existValue}${value}`.length;
    } else {
        let lastChe = existValue.substring(existValue.length - 1, existValue.length);
        if (existValue == '') {
            if (lastChe == "-") {
                createElement.value = `${existValue}${value}`;
            } else {
                createElement.value = `${existValue}${value}`;
            }
            totalLength = value.length;
        } else {
            if (lastChe == "-") {
                createElement.value = `${existValue}${value}`;
            } else if (lastChe == "." || lastChe == "," || lastChe == "&" || lastChe == "/") {
                createElement.value = `${existValue} ${value}`;
            } else if (value == "." || value == "," || value == "&" || value == "/") {
                createElement.value = `${existValue}${value}`;
            }
            else {
                createElement.value = `${existValue} ${value}`;
            }
            totalLength = `${existValue}${value}`.length;
        }
    }
    selectionStart = totalLength
    selectionEnd = totalLength
    createElement.focus();
}
const previous = () => {
    if (toLength - strButtonView > initialFromLength) {
        toLength = fromLength - 1;
        fromLength = toLength - strButtonView;
    } else {
        fromLength = initialFromLength;
    }
    createButton();
    createElement.focus();
};
const next = () => {
    if (fromLength + strButtonView < total) {
        fromLength = toLength + 1;
        toLength = fromLength + strButtonView;
    }
    createButton();
    createElement.focus();
}
createButton();
const isKeyboardShow = () => {
    document.getElementById("keyboard2").style.display = 'none';
    document.getElementById("showHide2").innerHTML = 'show';
    isShow2 = isShow2 ? isShow : isShow2;
    if (isShow) {
        console.log(1);
        document.getElementById("keyboard").style.display = 'none';
        isShow = !isShow;
        document.getElementById("showHide").innerHTML = 'show';
    } else {
        console.log(2);
        document.getElementById("keyboard").style.display = 'block';
        isShow = !isShow;
        document.getElementById("showHide").innerHTML = 'hide';
    }
    createElement.focus();
}

const backSpace = () => {
    var removeText = '';
    let existValue = createElement.value;
    if ((selectionStart >= 0) && selectionStart === selectionEnd) {
        var valueArr = existValue.split('');
        console.log("valueArr", valueArr);
        valueArr.splice(selectionStart - 1, 1);
        valueArr.filter(Boolean);
        removeText = valueArr.join('');

        if (selectionStart >= 0) {
            selectionStart = selectionStart - 1;
            selectionEnd = selectionEnd - 1
        }
    }
    else if (selectionStart < selectionEnd) {
        var valueArr = existValue.split('');
        valueArr.splice(selectionStart, selectionEnd - selectionStart);
        valueArr.filter(Boolean);
        removeText = valueArr.join('');
        selectionEnd = selectionStart;
    }
    console.log("selectionStart", selectionStart, "selectionEnd", selectionEnd, "Remaining Text", removeText);
    createElement.value = removeText;
    createElement.focus();
    createElement.selectionStart = createElement.selectionEnd = selectionStart;
}

createElement.addEventListener("click", () => {
    selectionStart = createElement.selectionStart;
    selectionEnd = createElement.selectionEnd;
    console.log("selectionStart", selectionStart, "selectionEnd", selectionEnd);

});

const reset = () => {
    createElement.value = "";
    createElement.focus();
}

//2nd

const createButton2 = () => {
    var buttonText = '';
    var buttonNum = '';
    arr.map((item, index) => {
        if (item.type === "str" && index >= fromLength2 && index <= toLength2) {
            buttonText += `<div class="col col-md pl-0 pr-0 pb-0 mb-0 "><button onclick="getData2('${item.value}')" type="button" class="btn-light p-0 btn-block button_custom_br">${item.value} </button></div>`;
        }
        else if (item.type === "num") {
            buttonNum += `<div class="col col-md pl-0 pr-0 mb-0 "><button onclick="getData2('${item.value}')" type="button" class="btn-light p-0 btn-block button_custom_br">${item.value} </button></div>`;
        }
    });
    document.getElementById("allNum2").innerHTML = buttonNum;
    document.getElementById("allStr2").innerHTML = buttonText;
};
const getData2 = (value) => {
    let existValue = createElement2.value;
    let totalLength = 0;
    let superscript = { 0: '\u2070', 1: '\u00B9', 2: '\u00B2', 3: '\u00B3', 4: '\u2074', 5: '\u2075', 6: '\u2076', 7: '\u2077', 8: '\u2078', 9: '\u2079', P: '\u1d3e', M: '\u1d39', R: '\u1d3f', H: '\u1d34' }
    let subscript = { 0: '\u2080', 1: '\u2081', 2: '\u2082', 3: '\u2083', 4: '\u2084', 5: '\u2085', 6: '\u2086', 7: '\u2087', 8: '\u2088', 9: '\u2089' }
    let isNum = Number(value);
    console.log(isNum);
    if (value == 'space') {
        createElement2.value = `${existValue} `;
    }
    else if (isNum || isNum == 0 || value == 'P' || value == 'M' || value == 'R' || value == 'H') {
        createElement2.value = `${existValue}${superscript[value]}`;
        totalLength = `${existValue}${value}`.length;
    } else {
        let lastChe = existValue.substring(existValue.length - 1, existValue.length);
        if (existValue == '') {
            if (lastChe == "-") {
                createElement2.value = `${existValue}${value}`;
            } else {
                createElement2.value = `${existValue}${value}`;
            }
            totalLength = value.length;
        } else {
            if (lastChe == "-") {
                createElement2.value = `${existValue}${value}`;
            } else if (lastChe == "." || lastChe == "," || lastChe == "&" || lastChe == "/") {
                createElement2.value = `${existValue} ${value}`;
            } else if (value == "." || value == "," || value == "&" || value == "/") {
                createElement2.value = `${existValue}${value}`;
            }
            else {
                createElement2.value = `${existValue} ${value}`;
            }
            totalLength = `${existValue}${value}`.length;
        }
    }
    selectionStart2 = totalLength
    selectionEnd2 = totalLength
    createElement2.focus();
}
const previous2 = () => {
    if (toLength2 - strButtonView2 > initialFromLength2) {
        toLength2 = fromLength2 - 1;
        fromLength2 = toLength2 - strButtonView2;
    } else {
        fromLength2 = initialFromLength2;
    }
    createButton2();
    createElement2.focus();
};
const next2 = () => {
    if (fromLength2 + strButtonView2 < total2) {
        fromLength2 = toLength2 + 1;
        toLength2 = fromLength2 + strButtonView2;
    }
    createButton2();
    createElement2.focus();
}
createButton2();
const isKeyboardShow2 = () => {
    document.getElementById("keyboard").style.display = 'none';
    document.getElementById("showHide").innerHTML = 'show';
    isShow = isShow ? isShow2 : isShow;
    if (isShow2) {
        document.getElementById("keyboard2").style.display = 'none';
        isShow2 = !isShow2;
        document.getElementById("showHide2").innerHTML = 'show';
    } else {
        document.getElementById("keyboard2").style.display = 'block';
        isShow2 = !isShow2;
        document.getElementById("showHide2").innerHTML = 'hide'
    }
    createElement2.focus();
}

const backSpace2 = () => {
    var removeText = '';
    let existValue = createElement2.value;
    if ((selectionStart2 >= 0) && selectionStart2 === selectionEnd2) {
        var valueArr = existValue.split('');
        console.log("valueArr", valueArr);
        valueArr.splice(selectionStart2 - 1, 1);
        valueArr.filter(Boolean);
        removeText = valueArr.join('');

        if (selectionStart2 >= 0) {
            selectionStart2 = selectionStart2 - 1;
            selectionEnd2 = selectionEnd2 - 1
        }
    }
    else if (selectionStart2 < selectionEnd2) {
        var valueArr = existValue.split('');
        valueArr.splice(selectionStart2, selectionEnd2 - selectionStart2);
        valueArr.filter(Boolean);
        removeText = valueArr.join('');
        selectionEnd2 = selectionStart2;
    }
    console.log("selectionStart2", selectionStart2, "selectionEnd2", selectionEnd2, "Remaining Text", removeText);
    createElement2.value = removeText;
    createElement2.focus();
    createElement2.selectionStart2 = createElement2.selectionEnd2 = selectionStart2;
}

createElement2.addEventListener("click", () => {
    selectionStart2 = createElement2.selectionStart2;
    selectionEnd2 = createElement2.selectionEnd2;
    console.log("selectionStart2", selectionStart2, "selectionEnd2", selectionEnd2);

});

const reset2 = () => {
    createElement2.value = "";
    createElement2.focus();
}