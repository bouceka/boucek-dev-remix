import { ActionFunction, LoaderFunction, redirect } from "@remix-run/node";
import { destroyUserSession } from "~/data/auth.server";

export const action: ActionFunction = ({ request }) => destroyUserSession(request);


