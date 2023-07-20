interface IParam {
    id: number,
    status: 'started' | 'stopped' | 'drive'
}

export async function toggleCarEngine(params: IParam) {
    if (Number.isInteger(params.id)) {
        const queryParams = new URLSearchParams({
            id: String(params.id),
            status: params.status,
        });

        const url: string = `http://127.0.0.1:3000/engine?${queryParams}`;

        try {
            const response = await fetch(url, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const data = await response.json();
            const {velocity, distance} = data;
            return velocity === 0 ? undefined : distance / velocity
        } catch (e) {
            console.error(e);
        }
    }
}
