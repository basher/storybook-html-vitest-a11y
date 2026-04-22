export const ButtonHtml = (args) => /*html*/ `
<button
    type="button"
    class="button"
    data-button="text"
    ${args.buttonStyle ? `data-button-style="${args.buttonStyle}"` : ''}
>
    ${args.label}
</button>
`;
