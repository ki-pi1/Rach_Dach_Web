import type { Handle } from '@sveltejs/kit';

const BASE = '/intern-preview/alex-123';

export const handle: Handle = async ({ event, resolve }) => {
	const p = event.url.pathname;
	if (!p.startsWith(BASE) && !p.startsWith('/_app/')) {
		return new Response('', { status: 404 });
	}
	return resolve(event);
};
