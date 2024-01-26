import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('https://localhost:7081/WeatherForecast');
        setUsers(response.data);
      } catch (error) {
        setError('Error fetching data');
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map(user => (
          <li key={user.userId}>
            {user.firstName} {user.lastName} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;