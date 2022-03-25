import React from 'react';
import styled from 'styled-components';
import UserList from './containers/user-list';
import UserDetail from './containers/user-details';


function App() {
  return (
    <div>
        <h2>Username list: </h2>
        <UserList />
          <hr/>
        <h2>User details:  </h2>  
        <UserDetail />
    </div>
  );
}

export default App;
