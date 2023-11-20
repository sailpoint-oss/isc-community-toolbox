import type { EventDocument } from 'sailpoint-api-client';

export type Data<T> = {
	data?: T[];
	errors?: Array<{ message: string }>;
};

export interface FetchResponse<T> {
	json(): () => Promise<Data<T>>;
}

export type SourceEvents = {
	name: string;
	accounts: { started?: EventDocument | undefined; passed?: EventDocument | undefined };
	entitlements: { started?: EventDocument | undefined; passed?: EventDocument | undefined };
};
