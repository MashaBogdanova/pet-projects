export async function fetchWinner(id: number) {
    const url: string = `http://127.0.0.1:3000/winners/${id}`;
    try {
        const response = await fetch(url);
        return await response.json();
    } catch (e) {
        console.error(e);
    }
}
