// const operationButtons = document.querySelectorAll('[data-operation]')
// const numberButtons = document.querySelectorAll('[data-number]')
// const equalButton = document.querySelector('[data-equal]')
// const clearAllBtn = document.querySelector('[data-clear-all]')
// const deleteBtn = document.querySelector('[data-deletel]')
// const previousTextElement = document.querySelector('[data-previous-oper]')
// const currentTextElement = document.querySelector('[data-current-oper]')

// TODO: Backspace/delete button

(function() {
    "use strict";

    var element = function(element) {
        if (element.charAt(0) === "#"){
            return document.querySelector(element);
        }

        return document.querySelectorAll(element)
    }

    let currentData =  element ("#data-current-oper")
    let previousData = element ("#data-previous-oper")
    let equals = element("#equals")
    let numbers = element(".num-el")
    let domOperator = element(".sign-keys")
    let clearEl = element("#clear")
    let deletEl = element(".delete")
    let newNum = ""  
    let oldNum = "" 
    let resultNum;
    let operator;





        
    var setNum = function() {
        if (resultNum) {
            newNum = this.getAttribute("data-number")
            resultNum = ""
        } else {
            newNum += this.getAttribute("data-number")
        }

        currentData.innerHTML = newNum;
    }

    var moveNum = function() {
        oldNum = newNum;
        newNum = "";
        operator = this.getAttribute("data-operation");

        equals.setAttribute("data-equal", "");
    }

    // When equals is clicked
    let displayData = function() {
        oldNum = parseFloat(oldNum);
        newNum = parseFloat(newNum);

         // Perform operation
        if (operator === "addition") {
            resultNum = oldNum + newNum;
        } else if (operator === "multiply") {
            resultNum = oldNum *  newNum;
        } else if (operator === "minus") {
            resultNum = oldNum - newNum;
        } else if (operator === "divide") {
            resultNum = oldNum / newNum;
        } else {
            resultNum = newNum;
        }

        currentData.innerHTML = resultNum ;
        equals.setAttribute("data-equal", resultNum);

        oldNum = 0;
        newNum = resultNum;

        previousData.innerHTML = newNum
        currentData.innerHTML = ""

    }

    // AC button for clearing everything
    let clearAll = function() {
        oldNum = ""
        newNum = ""
        currentData.innerHTML = "";
        currentData.innerHTML = "0";
        previousData.innerHTML = "0";
        equals.setAttribute("data-equal", resultNum)
    }

    // DEL for deleting the last number in case of input error
    //************** HERE ***************** */
    let deleteLast = function() {
        currentData.textContent = currentData.textContent.slice(0, -1)
    }

    // Add click event to numbers
    for (let i = 0; i < numbers.length; i++) {
        numbers[i].onclick = setNum;
    }

    // Add click event to operators
    for(let i = 0; i < domOperator.length; i++) {
        domOperator[i].onclick = moveNum;
    }

    // Add click event to equal sign
    equals.onclick = displayData;

    // Add click event to clear button
    clearEl.onclick = clearAll;

    deletEl.onclick = deleteLast //************** HERE ***************** */


}())
