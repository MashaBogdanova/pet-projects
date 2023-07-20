interface IParam {
    name: string,
    color: string,
    id: number
}

export async function updateCar(params: IParam) {
    if (Number.isInteger(params.id)) {
        const url: string = `http://127.0.0.1:3000/garage/${params.id}`;
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
}
