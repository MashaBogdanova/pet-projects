export async function fetchData(pageName: string, pageNumber?: number, limit?: number) {

    const url: string = `http://127.0.0.1:3000/${pageName}?_page=${pageNumber}&_limit=${limit}`;
    try {
        return await fetch(url);
    } catch (e) {
        console.error(e);
    }
}
