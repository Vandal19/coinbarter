// import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { login, logout } from "../features/userSlice";
// import axios from 'axios'

// export const useUserData = () => {
//   const dispatch = useDispatch();

//   useEffect(() => {
//     const userData = JSON.parse(localStorage.getItem('user'));
//     if (userData) {
//       dispatch(login(userData))
//     }
//   }, [dispatch])

//   const loginAuth = async (dispatch) => {
//     // try {
//     //   await axios.post('/auth/login')
//     //   console.log("rest")
//     //   // let data = res.data
//     //   // dispatch(login({...data.data}))
//     //   // console.log("data", res.data)

//     // } catch (error) {
//     //   console.log(error.response);
//     //   return error.response;
//     // }
//     return axios
//     .post("/auth/login")
//     .then((data) => {
//       // if (!data) return;
//       dispatch({email, password})
//       console.log("data", data);
//       localStorage.setItem('user', JSON.stringify(data.data))
//       return Response.data
//     })
//     .catch((err) => {
//       console.log(err);
//     });
//   }
//   return {
//     loginAuth
//   }
// }