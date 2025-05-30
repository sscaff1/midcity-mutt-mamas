import { type RouteConfig, index, prefix, route } from '@react-router/dev/routes';

export default [
  index('routes/home.tsx'),
  ...prefix('dogs', [route(':dogId', './routes/dogs/dog.tsx')]),
] satisfies RouteConfig;
