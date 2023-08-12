import Emoji from 'react-emojis';

export default function Root() {
    return (
      <>
        <div className="d-flex align-items-center justify-content-center text-center min-vh-100">
                <div>
                    <Emoji emoji="party-popper" size="100"/>
                    <h2 className="m-4">
                      <b>Coming soon</b>
                    </h2>
                </div>
          </div>
      </>
    );
  }