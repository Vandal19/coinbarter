import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from "../features/userSlice";
import axios from 'axios'
import { useNavigate } from 'react-router'
import { isItemInFavorite, sumQuantity } from '../features/favoriteSlice';

export const useUserData = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user.user)

  // useEffect(() => {
  //   const userData = JSON.parse(localStorage.getItem('user'));
  //   if (userData) {
  //     dispatch(login(userData))
  //   }

  //   const favoriteData = async () => {
  //     try {
  //       const myFavorites = await axios.post(`/favorites/${user.id}`)
  //       console.log("myfavorite", myFavorites.data)
  //       // const parseData = JSON.stringify(localStorage.getItem(myFavorites))
  //       dispatch(sumQuantity(myFavorites.data))


  //     } catch (error) {
  //       console.log(error.response);
  //     }
  //   }
  //   if(user?.id){
  //     favoriteData();
  //   }

  //   console.log("favData", favoriteData)
  // }, [dispatch, user?.id])


// login authentication
  const loginAuth = async (values) => {
    try {
      const { data } = await axios.post('/auth/login', { ...values })
      dispatch(login({...data}))
      navigate("/")
      // console.log("data", res.data)

    } catch (error) {
      console.log(error.response);
    }
    // .post("/auth/login")
    // .then((data) => {
    //   // if (!data) return;
    //   dispatch({email, password})
    //   console.log("data", data);
    //   localStorage.setItem('user', JSON.stringify(data.data))
    //   return Response.data
    // })
    // .catch((err) => {
    //   console.log(err);
    // });
    }

    // const favData = async (values) => {
    //   try {
    //     const { data } = await axios.post(`/favorites/${user.id}`, { ...values })
    //     dispatch(isItemInFavorite({...data}))
    //   } catch (error) {
    //     console.log(error.response);
    //   }
    // }

    // console.log("favData", favData)

  return {
    loginAuth,
    useUserData,
  }
}