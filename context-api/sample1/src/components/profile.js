import React from 'react';
import { useAuth } from '../providers/auth';

// import { Container } from './styles';

function Profile() {

  const { user } = useAuth();

  return (
    <div>
        <h1>Profile</h1>
        <p><b>Name:</b> {user.name}</p>
    </div>
  );
}

export default Profile;