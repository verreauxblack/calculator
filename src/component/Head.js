import TriToggle from "./TriToggle";

const Head = ({ setTheme, custom, theme }) => {
    return (
        <header className="head" style={{ color: theme.color.head.primary }}>
            <div>
                <h2>calc</h2>
            </div>
            <div className="right" >
                <div className="up" >
                    <p>1</p><p> 2</p><p> 3</p>
                </div>
                <div className="down" >
                    <p>theme</p>
                    <TriToggle setTheme={setTheme} custom={custom} theme={theme} />
                </div>
            </div>
        </header>
    )
};

export default Head;