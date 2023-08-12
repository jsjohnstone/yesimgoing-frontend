import Emoji from 'react-emojis';

export default function ErrorBlock() {

  return (
        <div id="error-page">
        <Emoji emoji="disappointed-face"  size="100"/>
        <br /><br />
        <h1><b>We'd love to take you there...</b></h1>
        <h2>...but something went wrong</h2>
        </div>
  );
}