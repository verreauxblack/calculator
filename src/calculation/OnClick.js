/* eslint-disable no-eval */
let flag = 0;
const onClick = (result, button) => {

    if (button !== 'del' &&
        button !== 'reset' &&
        button !== 'equal'
    ) {
        return checkDisplay(result, button);
    } else if (button === 'del') {
        return (result !== "0") ? (result.length > 1) ? result.slice(0, -1) : '0' : result;
    } else if (button === 'reset') {
        return "0"
    } else if (button === 'equal') {
        return equal(result);
    }
}

const checkDisplay = (result, button) => {
    if (button === "." && result === "0") { // if usser 1st enter dot
        return "0."
    } else if (result === "0") { // other than dot
        if(button !== '+' && button !== '-' && button !== '/' && button !== '*') // numbers
            return button;
        else // if operatos
            return "0"+button;
    } else if (result === Infinity) {
        return button
    } else if (result !== "0" && flag !== 0) { // after Enter pressed
        flag = 0;
        if(button === "."){
            return "0.";
        }else if (button !== '+' && button !== '-' && button !== '/' && button !== '*') { // number means start a new value
            return button
        } else { // operator means contiune with previous answer
            return result + button
        }
    }
    else if (result !== '0') {
        let temp = result[result.length - 1];
        if( temp === "." &&  button === '.') // not repeating dot in end 
            return result;
        if ((temp === "+" || temp === "-" || temp === "/" || temp === "*") &&
            (button === '+' || button === '-' || button === '/' || button === '*') // not repeating operators in end
        ) {
            return  result.slice(0, -1) + button;
        }
        else {
            return result + button
        }
    }
    else {
        return result + button
    }
};

const equal = (result) => {
    flag = 1;
    let temp = result[result.length - 1];
    if (temp !== "+" &&
        temp !== "-" &&
        temp !== "/" &&
        temp !== "*"
    ) {
        return eval(result);
    } else {
        return result.length === 1 ? "0" : result.slice(0, -1)
    }
}

export default onClick;