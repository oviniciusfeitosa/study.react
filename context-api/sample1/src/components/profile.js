import React from 'react';
import { useAuth } from '../providers/auth';

// import { Container } from './styles';

function Profile() {

  const { user } = useAuth();

  return (
    <div>
        <h1>{user.name}</h1>
    </div>
  );
}

export default Profile;