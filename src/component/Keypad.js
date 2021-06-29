import keyStyle from './keypadStyle.js'

function Keypad({ onClick, onKeyPress, del, reset, equal, theme }) {
    const Style = keyStyle(theme);
    const {buttonStyle, delStyle, equalStyle} = {...Style}
    return (
        <div className="KeyPad" style={{ background: theme.color.background.keypad, color: theme.color.text.primary }} >
            <button onKeyPress={onKeyPress} className="keys" name="7" value={7} onClick={onClick} style={buttonStyle}>7</button>
            <button onKeyPress={onKeyPress} className="keys" name="8" value={8} onClick={onClick} style={buttonStyle}>8</button>
            <button onKeyPress={onKeyPress} className="keys" name="9" value={9} onClick={onClick} style={buttonStyle}>9</button>
            <button onKeyPress={onKeyPress} className="keys del" name="del" onClick={del} style={delStyle}>DEL</button>
            <button onKeyPress={onKeyPress} className="keys" name="4" value={4} onClick={onClick} style={buttonStyle}>4</button>
            <button onKeyPress={onKeyPress} className="keys" name="5" value={5} onClick={onClick} style={buttonStyle}>5</button>
            <button onKeyPress={onKeyPress} className="keys" name="6" value={6} onClick={onClick} style={buttonStyle}>6</button>
            <button onKeyPress={onKeyPress} className="keys" name="+" onClick={onClick}  style={buttonStyle}>+</button>
            <button onKeyPress={onKeyPress} className="keys" name="1" value={1} onClick={onClick} style={buttonStyle}>1</button>
            <button onKeyPress={onKeyPress} className="keys" name="2" value={2} onClick={onClick} style={buttonStyle}>2</button>
            <button onKeyPress={onKeyPress} className="keys" name="3" value={3} onClick={onClick} style={buttonStyle}>3</button>
            <button onKeyPress={onKeyPress} className="keys" name="-" onClick={onClick} style={buttonStyle}>-</button>
            <button onKeyPress={onKeyPress} className="keys" name="." onClick={onClick} style={buttonStyle}>.</button>
            <button onKeyPress={onKeyPress} className="keys" name="0" value={0} onClick={onClick} style={buttonStyle}>0</button>
            <button onKeyPress={onKeyPress} className="keys" name="/" onClick={onClick} style={buttonStyle}>/</button>
            <button onKeyPress={onKeyPress} className="keys" name="*" onClick={onClick} style={buttonStyle}>x</button>
            <button onKeyPress={onKeyPress} className="keys reset" name="reset" onClick={reset} style={delStyle}>reset</button>
            <button onKeyPress={onKeyPress} className="keys equal" name="equal" onClick={equal} style={equalStyle} >=</button>
        </div>
    )
}

export default Keypad
