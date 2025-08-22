'use client';
import { getSupabaseBrowserClient } from '@/supabase-utils/browserClient';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useRef } from 'react';

export const Login = ({ isPasswordLogin }: { isPasswordLogin: boolean }) => {
	const emailInputRef = useRef(null);
	const passwordInputRef = useRef(null);
	const supabase = getSupabaseBrowserClient();
	const router = useRouter();

	return (
		<form
			onSubmit={(event) => {
				event.preventDefault();
				supabase.auth
					.signInWithPassword({
						email: emailInputRef.current.value,
						password: passwordInputRef.current.value,
					})
					.then((result) => {
						if (result.data?.user) {
							router.push('/tickets');
						} else {
							alert('Could not sign in');
						}
					});
			}}
		>
			<article style={{ maxWidth: '480px', margin: 'auto' }}>
				<header>Login</header>

				<fieldset>
					<label htmlFor='email'>
						Email <input ref={emailInputRef} type='email' id='email' name='email' required />
					</label>

					{isPasswordLogin && (
						<label htmlFor='password'>
							Password <input ref={passwordInputRef} type='password' id='password' name='password' />
						</label>
					)}
				</fieldset>

				<p>
					{isPasswordLogin ? (
						<Link
							href={{
								pathname: '/',
								query: { magicLink: 'yes' },
							}}
						>
							Go to Magic Link Login
						</Link>
					) : (
						<Link
							href={{
								pathname: '/',
								query: { magicLink: 'no' },
							}}
						>
							Go to Password Login
						</Link>
					)}
				</p>

				<button type='submit'>
					Sign in with
					{isPasswordLogin ? ' Password' : ' Magic Link'}
				</button>
			</article>
		</form>
	);
};
