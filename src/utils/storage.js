export const setToLS = (key, value) => window.localStorage.setItem(key, JSON.stringify(value));

export const getFromLS = key => {
    const values = window.localStorage.getItem(key);

    if(values) {
        return JSON.parse(values);
    }
}