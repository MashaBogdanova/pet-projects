export async function removeCarData(page: string, id: number) {
    const url: string = `http://127.0.0.1:3000/${page}/${id}`;
    try {
        await fetch(url, {
            method: 'DELETE'
        });
    } catch (e) {
        console.error(e);
    }
}
