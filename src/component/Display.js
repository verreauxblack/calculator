function Display({ value, theme }) {
    const style = {
        background: theme.color.background.screen,
        textShadow: `0 0 0 ${theme.color.head.primary }`
    }
    return (
        <div>
            <form>
                <input id='display' type="text" onChange={()=>""} value={value} style={style} />
            </form>
        </div>
    )
}

export default Display;