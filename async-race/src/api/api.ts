export async function getData() {
    const baseURL: string = 'http://127.0.0.1:3000/garage';
    try {
        const response = await fetch(baseURL);
        return await response.json();
    } catch (e) {
        console.error(e);
    }
}
