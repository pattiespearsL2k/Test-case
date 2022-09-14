const { _ } = Cypress;
export function getAttrObject($element: any) {
    return Object.fromEntries(
        // @ts-ignore
        Array.from($element[0].attributes).map((item) => [item.name, item.value])
    );
}
export function getTexts($el: any) {
    return _.map($el, 'innerText').map((values) => _.map(values, (value) => value.trim()));
}
