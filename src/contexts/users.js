import { createContext, useContext, useState, useEffect } from "react";
import api from "../services/api";
import toast from 'react-hot-toast';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  const getUsers = () => {
    api.get('/users')
    .then(response => {
        setUsers(response.data.users);
    })
    .catch(err => {
        setUsers([]);
        console.log(err);
    })
  }

  useEffect(() => {
    getUsers();
  }, [])

  const registerPerson = (obj) => {

    api.post('/users', obj)
      .then(response => {
        getUsers();
        toast.success('Person Registered Successfully!');
      })
      .catch(err => {
        toast.error('Error when registering the person!')
        console.log(err);
      })
  }

  const updatePerson = (obj, id) => {
    api.patch(`/users/${id}`, obj)
      .then(response => {
        getUsers();
        toast.success('Person Updated Successfully!')
      })
      .catch(err => {
        toast.error('Error when updating the person!')
        console.log(err)
      })
  }

  const deletePerson = (id) => {
    api.delete(`/users/${id}`)
      .then(response => {
        getUsers();
        toast.success('Person Deleted Successfully!')
      })
      .catch(err => {
        toast.error('Error when deleting the person!')
        console.log(err)
      })
  }

  const addContact = (obj) => {
    api.post('/contacts', obj)
      .then(response => {
        getUsers();
        toast.success('Contact Registered Successfully!');
      })
      .catch(err => {
        toast.error('Error when registering the contact!')
        console.log(err);
      })
  }

  const updateContact = (obj, id) => {
    api.patch(`/contacts/${id}`, obj)
      .then(response => {
        getUsers();
        toast.success('Contact Updated Successfully!')
      })
      .catch(err => {
        toast.error('Error when updating the contact!')
        console.log(err)
      })
  }

  const delContact = (id) => {

    api.delete(`/contacts/${id}`)
      .then(response => {
        getUsers();
        toast.success('Contact Deleted Successfully!');
      })
      .catch(err => {
        toast.error('Error when deleting the contact!')
        console.log(err);
      })
  }

  return (
    <UserContext.Provider value={{ users, registerPerson, updatePerson, deletePerson, updateContact, addContact, delContact }}>
      {children}
    </UserContext.Provider>
  )
}

export const useUsers = () => useContext(UserContext);