import { createTRPCLoader } from 'trpc-remix';
import { publicProcedure, router } from '../trpc';

export const appRouter = router({
  greeting: publicProcedure.query(() => 'hello tRPC-Remix'),
});

export type AppRouter = typeof appRouter;

export const trpcLoader = createTRPCLoader(appRouter);
