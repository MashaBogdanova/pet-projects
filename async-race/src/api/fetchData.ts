export async function fetchData(pageName: string, pageNumber?: number, limit?: number) {
    const url: string = `http://127.0.0.1:3000/${pageName}?page=${pageNumber}limit=&${limit}`;
    try {
        const response = await fetch(url);
        return await response.json();
    } catch (e) {
        console.error(e);
    }
}
