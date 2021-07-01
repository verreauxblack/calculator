import keyStyle from './keypadStyle.js'

function Keypad({ onClick, theme }) {
    const Style = keyStyle(theme);
    const { buttonStyle, delStyle, equalStyle } = { ...Style }
    return (
        <div className="KeyPad" style={{ background: theme.color.background.keypad}} >
            <button name="7" onClick={onClick} style={buttonStyle} className="keys" >7</button>
            <button name="8" onClick={onClick} style={buttonStyle} className="keys" >8</button>
            <button name="9" onClick={onClick} style={buttonStyle} className="keys" >9</button>
            <button name="del" onClick={onClick} style={delStyle} className="keys del" >del</button>
            <button name="4" onClick={onClick} style={buttonStyle} className="keys" >4</button>
            <button name="5" onClick={onClick} style={buttonStyle} className="keys" >5</button>
            <button name="6" onClick={onClick} style={buttonStyle} className="keys" >6</button>
            <button name="+" onClick={onClick} style={buttonStyle} className="keys" >+</button>
            <button name="1" onClick={onClick} style={buttonStyle} className="keys" >1</button>
            <button name="2" onClick={onClick} style={buttonStyle} className="keys" >2</button>
            <button name="3" onClick={onClick} style={buttonStyle} className="keys" >3</button>
            <button name="-" onClick={onClick} style={buttonStyle} className="keys" >-</button>
            <button name="." onClick={onClick} style={buttonStyle} className="keys" >.</button>
            <button name="0" onClick={onClick} style={buttonStyle} className="keys" >0</button>
            <button name="/" onClick={onClick} style={buttonStyle} className="keys" >/</button>
            <button name="*" onClick={onClick} style={buttonStyle} className="keys" >x</button>
            <button name="reset" onClick={onClick} style={delStyle} className="keys reset" >reset</button>
            <button name="equal" onClick={onClick} style={equalStyle} className="keys equal" >=</button>
        </div>
    )
}

export default Keypad;