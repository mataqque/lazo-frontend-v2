import { z } from "zod";
import { type DynamicRoute } from "next-typesafe-url";

export const Route = {
    routeParams: z.object({
        category: z.tuple([z.string()]),
    }),
} satisfies DynamicRoute;

export type RouteType = typeof Route;
