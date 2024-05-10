'use client'
import { useEffect, useState } from 'react';

export const useFetchData = (fetchFunction) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(  () => {
    fetchFunction()
      .then((data) => {
        setData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
  }, [fetchFunction]); 

  return { data, isLoading, error };
};
