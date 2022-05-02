import React from 'react'
import CheckPermissions from '../components/CheckPermissions';

const AdminPage = (props) => {
  if(props.permissions)
    return (
      <div>
        <h3>Panel admina</h3>
        <button onClick={props.handleLogout}>Wyloguj</button>
      </div>      
    );
  else
    return <CheckPermissions  permissions={props.permissions}
                              handleLogin={props.handleLogin} />;
}

export default AdminPage;
