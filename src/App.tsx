import React from 'react';

const App = () => {
  return (
    <div>
      <form>
        <h5>Login</h5>
        <div>
          <label htmlFor="username">User name:</label>
          <input type="text" name="username" id="username" />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" name="password" id="password" />
        </div>
      </form>
    </div>
  )
};

export default App;
