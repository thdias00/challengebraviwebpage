import { createContext, useContext, useState, useEffect } from "react";
import api from "../services/api";
//import toast from 'react-hot-toast';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  const getUsers = () => {
    api.get('/users')
    .then(response => {
        setUsers(response.data);
    })
    .catch(err => {
        setUsers([]);
        console.log(err);
    })
  }

  useEffect(() => {
    getUsers();
  }, [])

//   const habitCreate = (obj) => {
//     const { id } = JSON.parse(localStorage.getItem("@happyhabits:user")) || {};
//     const token = localStorage.getItem("@happyhabits:token") || '';
//     api.post('/habits/', { ...obj, "user": id }, {
//       headers: {
//         Authorization: `Bearer ${token}`
//       }
//     })
//       .then(response => {
//         getHabits();
//         toast.success('Hábito criado!');
//       })
//       .catch(err => {
//         toast.error('Erro ao criar hábito!')
//         console.log(err);
//       })
//   }
//   const habitUpdate = (obj, habitId) => {
//     const token = localStorage.getItem("@happyhabits:token") || '';
//     api.patch(`/habits/${habitId}/`, obj, {
//       headers: {
//         Authorization: `Bearer ${token}`
//       }
//     })
//       .then(response => {
//         getHabits();
//         toast.success('Hábito atualizado!')
//         console.log(response);
//       })
//       .catch(err => {
//         toast.error('Erro ao atualizar hábito!')
//         console.log(err)
//       })
//   }
//   const habitDelete = (habitId) => {
//     const token = localStorage.getItem("@happyhabits:token") || '';
//     api.delete(`/habits/${habitId}/`, {
//       headers: {
//         Authorization: `Bearer ${token}`
//       }
//     })
//       .then(response => {
//         getHabits();
//         toast.success('Hábito deletado!')
//         console.log(response);
//       })
//       .catch(err => {
//         toast.error('Erro ao deletar hábito!')
//         console.log(err)
//       })
//   }

  return (
    <UserContext.Provider value={{ users }}>
      {children}
    </UserContext.Provider>
  )
}

export const useUsers = () => useContext(UserContext);