interface IParam {
    wins: number,
    time: number
}

export async function updateWinnerData(params: IParam, id: number,) {
    const url: string = `http://127.0.0.1:3000/winners/${id}`;
    try {
        const response = await fetch(url, {
            method: 'PUT',
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
