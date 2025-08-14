'use client';

import { use } from 'react';
import { Login } from './Login';

export default function LoginPage({ searchParams }: { searchParams: Promise<{ magicLink: string }> }) {
	const params = use(searchParams);
	const wantsMagicLink = params.magicLink === 'yes';
	return <Login isPasswordLogin={!wantsMagicLink} />;
}
