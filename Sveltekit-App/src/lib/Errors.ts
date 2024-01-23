import { error } from '@sveltejs/kit';
import axios from 'axios';

export function HandleError(message: string = 'issue during fetch', err: unknown) {
	console.log(err);

	if (axios.isAxiosError(err)) {
		error(500, { message, AxiosError: err });
	} else {
		error(500, { message, Error: err });
	}
}
