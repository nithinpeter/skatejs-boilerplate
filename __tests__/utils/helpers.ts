export const render = (Component) => {
    const fixtureElement = document.getElementById('test-fixture'); 
    const el = document.createElement(Component.is);
    fixtureElement.appendChild(el);
    return el;
}

export const find = (selector: string) => {
    return document.querySelectorAll(selector);
}

export const findOne = (selector: string) => {
    return document.querySelector(selector);
}
