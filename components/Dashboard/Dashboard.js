import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers, followUser } from './userSlice';

import './Dashboard.scss'; 

const Dashboard = () => {
  const users = useSelector((state) => state.user.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleFollow = (userId) => {
    dispatch(followUser(userId));
  };

  return (
    <div className="container">
      <h2 className="mt-4">Dashboard</h2>
      <div className="row user-list">
        {users.map((user) => (
          <div key={user.id} className="col-md-4 mb-4">
            <div className="card">
              <img src={user.profilePicture} alt={user.username} className="card-img-top" />
              <div className="card-body">
                <h3 className="card-title">{user.username}</h3>
                <p className="card-text">{user.firstName}</p>
                <button className="btn btn-primary" onClick={() => handleFollow(user.id)}>
                  Follow
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
