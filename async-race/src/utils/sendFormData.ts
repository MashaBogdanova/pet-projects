export function sendFormData(e: Event, form: HTMLFormElement, apiCallback: any, inputStyles: string, id?: number) {
    e.preventDefault();
    const formData: FormData = new FormData(form);
    const name = formData.get('name') as string;
    const color = formData.get('color') as string;

    if (name.length !== 0 && color.length !== 0) {
        apiCallback({name: name, color: color, id: id});
        const input: HTMLInputElement | null = document.querySelector(inputStyles);
        if (input) {
            input.value = '';
        }
    }
}
