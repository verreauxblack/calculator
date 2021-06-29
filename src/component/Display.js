function Display({ value, onKeyPress, theme }) {
    return (
        <div>
            <form>
                <input id='display' onKeyPress={onKeyPress} type="text" value={value} onChange={onKeyPress} style={{ background: theme.color.background.screen, color: theme.color.head.primary }} />
            </form>
        </div>
    )
}

export default Display;