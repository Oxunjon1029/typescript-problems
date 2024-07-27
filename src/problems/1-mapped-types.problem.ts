import { Equal, Expect } from '../helpers/type-utils';
interface User {
	id: number;
	name: string;
	email: string;
}

type Generic<T extends object> = {
	[k in keyof T]?: T[k] | null | undefined;
};


const user1: Generic<User> = {
	id: null,
	name: 'John Doe',
};

const user2: Generic<Pick<User, 'id' | 'name'>> = {
	id: null,
	name: 'John Doe',
};

type tests = [
	Expect<
		Equal<
			typeof user1,
			{
				id?: number | null | undefined;
				name?: string | null | undefined;
				email?: string | null | undefined;
			}
		>
	>,
	Expect<
		Equal<
			typeof user2,
			{
				id?: number | null | undefined;
				name?: string | null | undefined;
			}
		>
	>
];
