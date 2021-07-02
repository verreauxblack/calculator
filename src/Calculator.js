
import React, { useState, useEffect } from 'react'

import Head from './component/Head';
import Keypad from './component/Keypad'
import Display from './component/Display';

import { useTheme } from './theme/useTheme'
import { setToLS, getFromLS } from './utils/storage';

import { OnClick } from './calculation';

const Calculator = () => {

    const [result, setResult] = useState("0");
    const [customTheme, setCustomTheme] = useState("0");
    const [themes, setThemes] = useState(getFromLS('theme'))


    const { setMode } = useTheme();

    const setTheme = (value) => setCustomTheme(value)

    //set the previously selected theme after page reload
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
    
    // function commafy( num ) {
    //     var str = num.toString().split('.');
    //     if (str[0].length >= 5) {
    //         str[0] = str[0].replace(/(\d)(?=(\d{3})+$)/g, '$1,');
    //     }
    //     if (str[1] && str[1].length >= 5) {
    //         str[1] = str[1].replace(/(\d{3})/g, '$1 ');
    //     }
    //     return str.join('.');
    // }

    return (
        <main className="main" style={{ background: themes.color.background.main }}>
            <section className="calc" >
                <Head setTheme={setTheme} custom={customTheme} theme={themes} />
                <Display value={result} theme={themes} />
                <Keypad onClick={e => setResult(OnClick(result, e.target.name))} theme={themes} />
                
            </section>
            <footer className="footer">
                <a href="https://twitter.com/verreauxblack" rel="noreferrer" target="_blank" style={{ color: themes.color.head.primary }} > @verreauxblack</a>
            </footer>
        </main>
    )
}

export default Calculator
