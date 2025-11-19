import { useLoaderData } from 'react-router';
import type { Route } from './+types/dog';
import getDog from '~/utils/getDog';
import DogComponent from '~/components/Dog/Dog';

export const loader = async ({ params }: Route.LoaderArgs) => {
  const dog = await getDog({ id: params.dogId });
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
