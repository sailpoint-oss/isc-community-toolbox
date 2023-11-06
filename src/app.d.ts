import type { AxiosError } from 'axios';

declare global {
	namespace App {
		interface Error {
			message: string;
			AxiosError?: AxiosError;
			Error?: Any;
		}
	}
}
