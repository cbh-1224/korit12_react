import { CarResponse, Car } from '../types'
import axios from 'axios'

export const getCars = async(): Promise<CarResponse[]> => 
  {
  const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/vehicles`);

  return response.data._embedded.cars;
}

export const deleteCar = async(link: string) => {
  const response = await axios.delete(link);

  return response.data;
}

export const addCar = async (car: Car) => {
  const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/vehicles`, car, {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return response.data;
}