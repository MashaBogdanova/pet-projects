import { ICallbackParams } from '../utils/sendFormData';
import { ICar } from '../types/dataTypes';

export async function addNewCar(params: ICallbackParams): Promise<ICar | undefined> {
    const url: string = 'http://127.0.0.1:3000/garage';
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
