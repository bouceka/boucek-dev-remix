import {
    json,
    type ActionArgs,
    type LoaderArgs,
  } from "@remix-run/node"; // or cloudflare/deno
  import { isRouteErrorResponse, useParams, useRouteError } from "@remix-run/react";
import { Action } from "~/components/action/action.component";
  
  export const loader = async ({ params }: LoaderArgs) => {
    if (params["*"]) {
      throw json({ message: 'Could not find anything on this url' }, { status: 404, statusText: 'Not Found' });
    }
  
  };
  
  export const action = async ({ params }: ActionArgs) => {
    console.log(params["*"]);
  };
  
  export default function PostRoute() {
    const params = useParams();
    console.log(params["*"]);
}

export function ErrorBoundary() {
    const error = useRouteError();
    const params = useParams();
    if (isRouteErrorResponse(error) && error.status === 404) {
      return (
        <main className='project-detail '>
          <div className='row'>
            <div className=''>Uh oh! The url '{params.name}' does not exist!</div>
            <Action variant='secondary' as='link' to='/'>
              Back to Homepage
            </Action>
          </div>
        </main>
      );
    }
  
    return (
      <div>
        <h1>Uh oh ...</h1>
        <p>Something went wrong.</p>
      </div>
    );
  }
  