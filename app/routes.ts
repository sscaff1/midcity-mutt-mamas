import { type RouteConfig, index, prefix, route } from '@react-router/dev/routes';

export default [
  index('routes/home.tsx'),
  route('donate', './routes/donate.tsx'),
  route('contact-us', './routes/contact-us.tsx'),
  route('meet-the-mamas', './routes/meet-the-mamas.tsx'),
  route('adopt', './routes/adopt.tsx'),
  route('foster', './routes/foster.tsx'),
  ...prefix('dogs', [route(':dogId', './routes/dogs/dog.tsx')]),
] satisfies RouteConfig;
