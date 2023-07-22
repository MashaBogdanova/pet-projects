interface IParam {
    id: number,
    wins: number,
    time: number
}

export async function addWinnerData(params: IParam) {
    const url: string = `http://127.0.0.1:3000/winners`;
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(params)
        });
        return await response.json();
    } catch (e) {
        console.error(e);
    }
}
