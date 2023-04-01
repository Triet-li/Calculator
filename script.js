function add(a, b) {
	return Number(a) + Number(b);
}

function substract(a, b) {
	return a - b;
}

function multiply(a, b) {
	return a * b;
}

function divide(a, b) {
	return a / b;
}

let num1, operator;

function operate(num1, operator, num2) {
	switch(operator) {
	case "+":
		return add(num1, num2);
		
	case "-":
		return substract(num1, num2);
	
	case "*":
		return multiply(num1, num2);
		
	case "/":
		return divide(num1, num2).toFixed(3);
		
	default:
		alert("Error!");
	}

}

let tempNum = 0;
let tempString;
let flag = 0;
let count = 0;
let c = false;
let floatNum = "";
let f = false;
// add clickable button: 
function changeDisplay(element) {
	let tempContent = element.target.textContent;
	

	if(displayContent.innerHTML == 0 && tempContent != "+" && tempContent != "-" && tempContent != "*" && tempContent != "/") {
		displayContent.innerHTML = tempContent;
		tempNum += tempContent;
		floatNum += tempContent;
		
	}
	else if(tempContent == "+" || tempContent == "-" || tempContent == "*" || tempContent == "/") {
		
	
		
		if(c == true) {
			result = operate(num1, operator, Number(tempNum));
			
			displayResult.innerHTML = result;
			num1 = result;
			operator = tempContent;
			tempNum = 0;
			floatNum = "";


			displayContent.innerHTML = ` ${result} ${operator } `;
			displayContent.innerHTML += " ";
			flag = 1;
		}
		else {
			num1 = Number(tempNum);

			operator = tempContent;
			tempNum = 0;
			floatNum = "";
			tempString = displayContent.innerHTML.split(" ")[count];

			if(flag == 1) {
				tempString += ` ${tempContent} `;
				++count;
				displayContent.innerHTML = ` ${tempString} `;
				flag = 0;
				
			}
			else {
				
				
				displayContent.innerHTML += ` ${tempContent} `;
				++flag;
				
			}
		}
	}
	else {
		
		if(displayContent.innerHTML.includes("+") || displayContent.innerHTML.includes("-") || 
			displayContent.innerHTML.includes("*") || displayContent.innerHTML.includes("/")) {
			c = true;
		}
		displayContent.innerHTML += tempContent;
		
		if (tempContent === ".") {
			f = true;
	    }

		if (!f) {
			tempNum = Number(tempNum) * 10 + Number(tempContent);
			floatNum += tempContent;
		} else {
			floatNum += tempContent;
			tempNum = Number(floatNum);
		}

	}
	

}
let displayContent = document.querySelector(".display-content");
let displayResult = document.querySelector(".display-result");
let result;

document.querySelector(".oEqual").addEventListener("click", () => {
	result = operate(num1, operator, tempNum);
	
	
	displayResult.innerHTML = result;
});
document.querySelector(".n1").addEventListener("click", changeDisplay);
document.querySelector(".n2").addEventListener("click", changeDisplay);
document.querySelector(".n3").addEventListener("click", changeDisplay);
document.querySelector(".n4").addEventListener("click", changeDisplay);
document.querySelector(".n5").addEventListener("click", changeDisplay);
document.querySelector(".n6").addEventListener("click", changeDisplay);
document.querySelector(".n7").addEventListener("click", changeDisplay);
document.querySelector(".n8").addEventListener("click", changeDisplay);
document.querySelector(".n9").addEventListener("click", changeDisplay);
document.querySelector(".n0").addEventListener("click", changeDisplay);
document.querySelector(".oPlus").addEventListener("click", changeDisplay);
document.querySelector(".oSubtract").addEventListener("click", changeDisplay);
document.querySelector(".oMultiply").addEventListener("click", changeDisplay);
document.querySelector(".oDivide").addEventListener("click", changeDisplay);
document.querySelector(".oDot").addEventListener("click", changeDisplay);
document.querySelector(".b-clear").addEventListener("click", () => { 
	displayContent.innerHTML = 0;
	tempNum = 0;
	floatNum = "";
	f = false;
	f1 = false;
	num1 = 0;
	c = false;
	flag = 0;
	displayResult.innerHTML = "";
	
});
document.querySelector(".b-delete").addEventListener("click", () => { 
	displayContent.innerHTML = 0; 
	num1 = 0;
	c = false;
	tempNum = 0;
	flag = 0;
	displayResult.innerHTML = "";
});
