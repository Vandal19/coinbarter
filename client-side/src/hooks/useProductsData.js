import axios from 'axios';
import { useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setProducts } from '../features/productSlice';

const useProductsData = () => {

  const { id } = useParams();
  const dispatch = useDispatch();
  console.log("id", id)

  useEffect(() => {
    const getProducts = (categoryId) => {
      axios.get(`/products/${categoryId}`)
      .then(result => {
        dispatch(setProducts(result.data))
      })
    };

    if(id){
      getProducts(id)
    }
  }, [id, dispatch]);

}

export default useProductsData