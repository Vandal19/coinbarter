import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { login, logout } from "../features/userSlice";
import axios from 'axios'
import { useNavigate } from 'react-router'
import { isItemInFavorite } from '../features/favoriteSlice';

export const useUserData = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch();

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('user'));
    if (userData) {
      dispatch(login(userData))
    }

    const favoriteData = JSON.parse(localStorage.getItem('favorite'))
    if(favoriteData){
      dispatch(favoriteData(isItemInFavorite))
    }

    console.log("favData", favoriteData)
  }, [dispatch])


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

    const favData = async (values) => {
      try {
        const { data } = await axios.post('/', { ...values })
      } catch (error) {

      }
    }

  return {
    loginAuth
  }
}