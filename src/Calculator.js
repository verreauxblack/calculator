/* eslint-disable no-fallthrough */
/* eslint-disable no-eval */
import React, { useState, useEffect } from 'react'

import Head from './component/Head';

import Keypad from './component/Keypad'
import Display from './component/Display';

import { useTheme } from './theme/useTheme'

import { setToLS, getFromLS } from './utils/storage';


const Calculator = () => {

    const [result, setResult] = useState("");
    const [customTheme, setCustomTheme] = useState(0);
    const [themes, setThemes] = useState(getFromLS('theme'))


    const { setMode } = useTheme();

    function onClick(e) {
        setResult(result.concat(e.target.name))
    }
    function del() {
        setResult(result.slice(0, -1));
    }
    function reset() {
        setResult("");
    }
    function equal() {
        setResult(eval(result));
    }

    function handleKey(event) {
        console.log(event.key)
        switch (event.key) {
            case '1':
                setResult(result.concat(event.key));
            case 2:
                setResult(result.concat("2"));
            case 3:
                setResult(result.concat("3"));
            case 4:
                setResult(result.concat("4"));
            case 5:
                setResult(result.concat("5"));
            case 6:
                setResult(result.concat("6"));
            case 7:
                setResult(result.concat("7"));
            case 8:
                setResult(result.concat("8"));
            case 9:
                setResult(result.concat("9"));
            case 0:
                setResult(result.concat("0"));
            case '-':
                setResult(result.concat('-'));
            case '+':
                setResult(result.concat("+"));
            case '*':
                setResult(result.concat("*"));
            case '/':
                setResult(result.concat("/"));
            case 'Del':
                del();
            case 'enter':
                equal();
            default:
                return "";
        }
    }

    const setTheme = (value) => {
        setCustomTheme(value)

    }

    useEffect(() => {
        const data = getFromLS('ThemeNum');
        data && setCustomTheme(data);
        setThemes(getFromLS('theme'))

    }, [])

    useEffect(() => {
        setToLS('ThemeNum', customTheme);
        setMode(customTheme)
    })
    useEffect(() => {
        setThemes(getFromLS('theme'))
    }, [customTheme])

    return (
        <main className="main" style={{ background: themes.color.background.main }}>
            <section className="calc" >
                <Head setTheme={setTheme} custom={customTheme} theme={themes} />

                <Display value={result} onKeyPress={handleKey} theme={themes} />
                <Keypad onClick={onClick} equal={equal} onKeyPress={handleKey} reset={reset} del={del} theme={themes} />
            </section>
        </main>
    )
}

export default Calculator
