import type { NextAuthOptions } from 'next-auth';
import NextAuth from 'next-auth';
import GitHubProvider from 'next-auth/providers/github';
import CredentialsProvider from 'next-auth/providers/credentials';
import { GithubProfile } from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';
import { GoogleProfile } from 'next-auth/providers/google';
import { headers } from 'next/headers';
import { URL_BASE_BACKEND } from '@/store/config';
import { IResProfile } from '../interface';

const OPTIONS: NextAuthOptions = {
	session: {
		maxAge: 86400, // 30 days
	},
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID ?? '',
			clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? '',

			// profile(profile) {
			// 	return {
			// 	  id: profile.sub,
			// 	  name: profile.name,
			// 	  email: profile.email,
			// 	  image: profile.picture,
			// 	}
			// },
			profile: async profile => {
				try {
					const newUser = {
						username: profile.email,
						firstname: profile.name,
						email: profile.email,
					};
					const response: IResProfile = await fetch(`${URL_BASE_BACKEND}/user/creategoogle`, {
						method: 'POST',
						headers: {
							'Content-Type': 'application/json',
						},
						body: JSON.stringify(newUser),
					})
						.then(res => res.json())
						.catch(err => console.log('error data project', err));

					if (response?.status == 405) {
						return null;
					}
					const userProfile = {
						...profile,
						id: profile.sub,
						email: profile.email,
						username: response.username,
						firstname: response.firstname ?? profile.name,
						lastname: response.lastname ?? '',
						role: 'User',
					};
					return userProfile;
				} catch (err) {
					console.log('what is the error', err);
				}
			},
		}),
		GitHubProvider({
			profile(profile: GithubProfile) {
				return {
					...profile,
					role: profile.role ?? 'user',
					id: profile.id.toString() ?? 10,
					image: profile.avatar_url,
				};
			},
			clientId: 'asd',
			clientSecret: 'asd',
		}),
		CredentialsProvider({
			name: 'Sign in',
			credentials: {
				email: {
					label: 'Email',
					type: 'email',
					placeholder: 'example@example.com',
				},
				password: { label: 'Password', type: 'password' },
			},
			async authorize(credentials, req) {
				const ip = req.headers?.['x-forwarded-for'] || '::1';
				const response = await fetch(`${URL_BASE_BACKEND}/user`, {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({ ...credentials, ip: ip }),
				}).then(res => res.json());

				if (response.verified === true) {
					const user = {
						id: response.id,
						name: response.firstname,
						email: response.email,
						role: 'admin',
					};
					return user;
				} else {
					return null;
				}
			},
		}),
	],
	pages: {
		signIn: '/account/login',
		error: '/account/login',
		signOut: '/account/login',
	},
	callbacks: {
		session: async ({ session, user }) => {
			return Promise.resolve(session);
		},
		async jwt({ token, user, account }) {
			const isSignIn = user ? true : false;
			if (isSignIn) {
				const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/${account?.provider}/callback?access_token=${account?.access_token}`);
				const data = await response.json();
			}
			return Promise.resolve(token);
		},
	},
};

const handler = NextAuth(OPTIONS);

export { handler as GET, handler as POST };
