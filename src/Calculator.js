
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

    return (
        <main className="main" style={{ background: themes.color.background.main }}>
            <section className="calc" >
                <Head setTheme={setTheme} custom={customTheme} theme={themes} />
                <Display value={result} theme={themes} />
                <Keypad onClick={e => setResult(OnClick(result, e.target.name))} theme={themes} />
            </section>
        </main>
    )
}

export default Calculator
