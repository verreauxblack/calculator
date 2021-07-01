const styles = (theme) => {
    const Style = {
        delStyle: {
            background: theme.color.keys.primary.background,
            color: "white",
            boxShadow: `0px 5px 0px 0px ${theme.color.keys.primary.shadow}`,
            WebkitBoxShadow: `0px 5px 0px 0px ${theme.color.keys.primary.shadow}`,
            MozBoxShadow: `0px 5px 0px 0px ${theme.color.keys.primary.shadow} `
        },
        equalStyle: {
            background: theme.color.keys.secondary.background,
            color: theme.color.text.secondary,
            boxShadow: `0px 5px 0px 0px ${theme.color.keys.secondary.shadow}`,
            WebkitBoxShadow: `0px 5px 0px 0px ${theme.color.keys.secondary.shadow}`,
            MozBoxShadow: `0px 5px 0px 0px ${theme.color.keys.secondary.shadow} `
        },
        buttonStyle: {
            background: theme.color.keys.tertiary.background,
            color: theme.color.text.primary,
            boxShadow: `0px 5px 0px 0px ${theme.color.keys.tertiary.shadow}`,
            WebkitBoxShadow: `0px 5px 0px 0px ${theme.color.keys.tertiary.shadow}`,
            MozBoxShadow: `0px 5px 0px 0px ${theme.color.keys.tertiary.shadow} `
        }
    };
    return Style
}
export default styles;