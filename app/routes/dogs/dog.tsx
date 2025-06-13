import { useLoaderData } from 'react-router';
import type { Route } from './+types/dog';
import getToken from '~/utils/getToken';
import getDog from '~/utils/getDog';
import DogComponent from '~/components/Dog/Dog';

export const loader = async ({ params }: Route.LoaderArgs) => {
  let token;
  try {
    token = await getToken();
  } catch (error: unknown) {
    if (error instanceof DOMException && error.code === 401) {
      token = await getToken({ shouldRefetch: true });
    }
  }
  if (!token) {
    throw new Error('Failed to get token');
  }
  const dog = await getDog({ token, id: params.dogId });
  return { dog };
};

function Dog() {
  const { dog } = useLoaderData<typeof loader>();
  return (
    <>
      <meta title={`${dog.name} | Mid City Mutt Mamas`} />
      <meta name="description" content={`Learn more about ${dog.name} and their story.`} />
      <title>{`${dog.name} | Mid City Mutt Mamas`}</title>
      <DogComponent dog={dog} />
    </>
  );
}

export default Dog;
