function TriToggle({setTheme, custom, theme}) {

    const onChange = (e) => setTheme(e.target.value);

    const check = () => (custom === "0") ? 5 : (custom === "1") ? 30 : 49;

    return (
        <div className="wrapper" style={{background: theme.color.background.keypad}}>
            <label htmlFor="one" id="one_label" ></label>
            <input type="radio" name="triToggle" id="one" value="0" onChange={onChange}/>
            <label htmlFor="two" id="two_label" ></label>
            <input type="radio" name="triToggle" id="two" value="1" onChange={onChange}/>
            <label htmlFor="three" id="three_label" ></label>
            <input type="radio" name="triToggle" id="three" value="2" onChange={onChange}/>
            <div className="toggle" style={{left: `${check()}px`, background: theme.color.keys.secondary.background}}></div>
        </div>
    )
}

export  default TriToggle;
