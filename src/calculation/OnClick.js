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
    if (result === "0") {
        return button;
    } else if (result === Infinity) {
        return button
    } else if (result !== "0" && flag !== 0) {
        flag = 0
        if (button !== '+' &&
            button !== '-' &&
            button !== '/' &&
            button !== '*'
        ) {
            return button
        } else {
            return result + button
        }
    } else {
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