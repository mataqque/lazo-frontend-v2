interface UserData {
	id: string;
	username: string;
	name?: string;
	email: string;
	role: string;
}

interface Session {
	user: UserData;
	expires: string;
}

interface UpdateSession {
	(data: Session): void;
}

interface AuthenticatedSession {
	update: UpdateSession;
	data: Session;
	status: 'authenticated';
}

interface LoadingSession {
	update: UpdateSession;
	data: null;
	status: 'loading';
}

interface UnauthenticatedOrLoadingSession {
	update: UpdateSession;
	data: null;
	status: 'unauthenticated' | 'loading';
}

export type ISession<R extends boolean = false> = R extends true ? AuthenticatedSession | LoadingSession : AuthenticatedSession | UnauthenticatedOrLoadingSession;

export interface IResProfile {
	id: string;
	verified: boolean;
	username: string;
	email: string;
	firstname: string;
	lastname: string;
	status?: number;
}
export interface Role {
	id: number;
	name: string;
	description: string;
	type: string;
	createdAt: string;
	updatedAt: string;
}
