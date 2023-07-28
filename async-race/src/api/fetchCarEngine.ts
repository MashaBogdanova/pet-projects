interface IParam {
    id: number,
    status: 'started' | 'stopped' | 'drive'
}

export async function fetchCarEngine(params: IParam): Promise<number | undefined> {
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

            if (!response.ok && response.status === 500) {
                return 0;
            }

            const data = await response.json();
            const { velocity, distance } = data;
            return Math.round((distance / velocity) / 1000);

        } catch (e) {
            console.log(e);
        }
    }
}
