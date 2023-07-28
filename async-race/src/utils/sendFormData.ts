export async function sendFormData(e: Event, form: HTMLFormElement, apiCallback: any, inputSelector: string, carId?: number) {
    e.preventDefault();
    const formData: FormData = new FormData(form);
    const name = formData.get('name') as string;
    const color = formData.get('color') as string;
    let newCar;

    if (name.length !== 0 && color.length !== 0) {
        newCar = await apiCallback({ name: name, color: color, id: carId });
        const input: HTMLInputElement | null = document.querySelector(inputSelector);
        if (input) {
            input.value = '';
        }
    }
    return newCar;
}
