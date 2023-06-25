import type { ActionFunction } from "@remix-run/node";
import { destroyUserSession } from "~/data/auth.server";

export const action: ActionFunction = ({ request }) => destroyUserSession(request);


