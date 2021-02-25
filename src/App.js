import "./styles.css";
import React from 'react';
import { withAuthenticator, AmplifySignOut} from "@aws-amplify/ui-react";
function App() {
  return (
    <div className="App">
      <header>
      <h1>We Now have Auth!</h1>
      </header>
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <AmplifySignOut/>
    </div>
  );
}

export default withAuthenticator(App);
