
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ActivitiesInput from './ActivitiesInput';
import Input from './Input';
import PhotosInput from './PhotosInput';
import { useLocalApi } from '../hooks';

const BlogCreate = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [from, setFrom] = useState('');
  const [country, setCountry] = useState('');
  const [hotel, setHotel] = useState('');
  const [hotelPics, setHotelPics] = useState([]);
  const [activities, setActivities] = useState([]);
  const { post } = useLocalApi();
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    const request = {
      firstName,
      lastName,
      country,
      from,
      hotel,
      hotelPics,
      activities
    };
    const data = await post('blog', request);
    if (data) {
      navigate('/');
      return;
    }
  }
  const activitiesChange = (data) => {
    setActivities(data);
  }
  const hotelsChange = (data) => {
    setHotelPics(data);
  }
  useEffect(() => {
    document.title = 'Create New Experience';
  }, [])
  return (
    <div className='flex flex-col'>
      <h3 className='font-bold'>Create New</h3>
      <div className='w-full h-1 w-full border-b border-black'></div>
      <form onSubmit={onSubmit} className='flex flex-col gap-3 pt-4'>
        <div className='flex w-full'>
          <label className='w-48' htmlFor="firstName">First Name:</label>
          <Input type="text" value={firstName} setValue={setFirstName} />
        </div>
        <div className='flex w-full'>
          <label className='w-48' htmlFor="lastName">Last Name:</label>
          <Input type="text" value={lastName} setValue={setLastName} />
        </div>
        <div className='flex w-full'>
          <label className='w-48' htmlFor="from">Your Country</label>
          <Input type="text" value={from} setValue={setFrom} />
        </div>
        <div className='flex w-full'>
          <label className='w-48' htmlFor="country">Visited Country</label>
          <Input type="text" value={country} setValue={setCountry} />
        </div>
        <div className='flex w-full'>
          <label className='w-48' htmlFor="hotel">Hotel Stayed</label>
          <Input type="text" value={hotel} setValue={setHotel} />
        </div>
        <PhotosInput onChange={hotelsChange} />
        <ActivitiesInput onChange={activitiesChange} />
        <button type="submit" className='bg-blue-600 text-white rounded-lg' >
          Create Blog
        </button>
      </form>
    </div>
  )
}

export default BlogCreate