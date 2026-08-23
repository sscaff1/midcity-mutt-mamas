import { sendFosterApplicationEmail } from '~/utils/mailgun.server';
import type { FosterApplicationFormData } from '~/types/FosterApplication';
import type { Route } from './+types/foster-application';

export async function action({ request }: Route.ActionArgs) {
  if (request.method !== 'POST') {
    return Response.json({ ok: false, error: 'Method not allowed' }, { status: 405 });
  }

  const data = (await request.json()) as FosterApplicationFormData;

  if (!data.name || !data.email || !data.signature || !data.agreementAccepted) {
    return Response.json({ ok: false, error: 'Missing required fields.' }, { status: 400 });
  }

  try {
    await sendFosterApplicationEmail(data);
    return Response.json({ ok: true });
  } catch (error) {
    console.error('Failed to send foster application email', error);
    return Response.json(
      { ok: false, error: 'Failed to send your application. Please try again or email us directly.' },
      { status: 502 },
    );
  }
}
