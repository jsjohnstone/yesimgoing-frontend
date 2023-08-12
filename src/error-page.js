import { useRouteError } from "react-router-dom";
import Emoji from 'react-emojis';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="d-flex align-items-center justify-content-center text-center min-vh-100">
        <div id="error-page">
        <Emoji emoji="disappointed-face"  size="100"/>
        <br /><br />
        <h1><b>We'd love to take you there...</b></h1>
        <h2>...but something went wrong</h2>
        <p>
            <i>{error.statusText || error.message}</i>
        </p>
        </div>
    </div>
  );
}