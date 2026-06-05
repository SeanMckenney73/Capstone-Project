import React, { createContext, useState, useContext } from "react";

const UserContext = React.createContext();

export const UserProvider = (props) => {
  const [currentUser, setCurrentUser] = useState({});
  const API_URL = "http://localhost:3000/api/users";

  
  const handleUpdateUser = (user) => {
    setCurrentUser(user);
  };


  const registerUser = async (userData) => {
  const response = await fetch(`${API_URL}/create`, { 
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(userData)
  });
  
  const result = await response.json();

  if (response.ok || result.result === 200) {
    handleUpdateUser(result.data); 
  }
  return result;
};
  
  const loginUser = async (credentials) => {
    const response = await fetch(`${API_URL}/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credentials)
    });
    const result = await response.json();
    if (response.ok) handleUpdateUser(result.data); 
    return result;
  };

  
  const updateDBUser = async (id, updatedData) => {
    const response = await fetch(`${API_URL}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedData)
    });
    const result = await response.json();
    if (response.ok) handleUpdateUser(result.data); 
    return result;
  };

  
  const deleteDBUser = async (id) => {
    const response = await fetch(`${API_URL}/${id}`, {
      method: 'DELETE'
    });
    const result = await response.json();
    if (response.ok) handleUpdateUser({}); 
    return result;
  };

  return (
    <UserContext.Provider value={{ 
      currentUser, 
      handleUpdateUser, 
      loginUser, 
      updateDBUser, 
      deleteDBUser,
      registerUser 
    }}>
      {props.children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};
