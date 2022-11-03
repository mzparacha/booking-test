import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

function Result ({ hotel }) {
  return (
    <div className='w-1/2 p-2 h-full flex'>
      <div className='flex flex-col w-full p-2 h-full border border-gray-200 rounded-lg'>
        <div className='w-full'>
          <img src={hotel.main_photo_url} className="w-32 mx-auto rounded-lg" alt="Hotel Phto" />
        </div>
        <div>
          <span className='font-bold w-32 inline-block'>Hotel Name:</span>
          {hotel.hotel_name}
         
        </div>
        <div><span className='font-bold w-32 inline-block'>Address:</span>{hotel.address}</div>
        <div><span className='font-bold w-32 inline-block'>Currency Code:</span>{hotel.currency_code}</div>
        <div><span className='font-bold w-32 inline-block'>Hotel Id:</span>{hotel.hotel_id}</div>
        <div><span className='font-bold w-32 inline-block'>Country Trans:</span>{hotel.country_trans}</div>
        <div><span className='font-bold w-32 inline-block'>Departure Date:</span>2022-11-13</div>
        <div><span className='font-bold w-32 inline-block'>Arrival Name:</span>2022-11-15</div>
        <div> <Link className='underline' to={`/hotel/${hotel.hotel_id}`}>
            Description
            </Link></div>
      </div>
    </div>
  )
}

Result.propTypes = {
  hotel: PropTypes.object.isRequired
}

export default Result
