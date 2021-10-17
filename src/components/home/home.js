import React from "react";
import FacebookLogin from 'react-facebook-login';
const Home = () => {
    const responseFacebook = (response) => {
        console.log(response);
    }
  return <div>
      <FacebookLogin
          appId="422517372598479"
          autoLoad
          callback={responseFacebook}
          render={renderProps => (
              <button onClick={renderProps.onClick}>This is my custom FB button</button>
          )}
      />
  </div>
}
export default Home