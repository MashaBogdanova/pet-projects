export async function removeCarData(page: string, id: number) {
    const baseURL: string = `http://127.0.0.1:3000/${page}/${id}`;
    try {
        await fetch(baseURL, {
            method: 'DELETE'
        });
    } catch (e) {
        console.error(e);
    }
}
