import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './UserList.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get('https://dummyjson.com/users')
      .then((response) => {
        if (Array.isArray(response.data.users)) {
          setUsers(response.data.users);
        } else {
          console.error('API response does not match the expected format:', response.data);
        }
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <h1 style={{textAlign:'center'}}>Dummy Data</h1>
      <table className='table table-dark'>
        <thead>
          <tr>
            <th>Sl. No</th>
            <th>Profile Pic</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Gender</th>
            <th>E-mail</th>
            <th>Username</th>
            <th>Domain</th>
            <th>IP</th>
            <th>University</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>
                <img
                  src={user.profilePicture}
                  alt="Profile"
                  onError={(e) => { e.target.onerror = null; e.target.src = 'URL_TO_DEFAULT_IMAGE' }}
                />
              </td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.gender}</td>
              <td>{user.email}</td>
              <td>{user.username}</td>
              <td>{user.domain}</td>
              <td>{user.ip}</td>
              <td>{user.university}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;