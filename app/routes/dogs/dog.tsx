import { useLoaderData } from 'react-router';
import type { Route } from './+types/dog';

export const loader = async ({ params }: Route.LoaderArgs) => {
  return { dogId: params.dogId };
};

function Dog() {
  const { dogId } = useLoaderData<typeof loader>();
  console.log(dogId);
  return <div>Dog</div>;
}

export default Dog;
