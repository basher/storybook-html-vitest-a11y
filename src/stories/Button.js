export const ButtonHtml = (args) => /*html*/ `
<button
    type="button"
    class="button"
    data-button="text"
    ${args.buttonSize ? `data-button-size="${args.buttonSize}"` : ''}
    ${args.buttonStyle ? `data-button-style="${args.buttonStyle}"` : ''}
>
    ${args.label}
</button>
`;
