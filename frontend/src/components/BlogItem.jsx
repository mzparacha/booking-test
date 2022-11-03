import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment';

function BlogItem ({ blog }) {
  return (
    <div className='text-sm flex flex-col border border-blue-300 p-3 gap-1 w-full rounded-lg'>
      <div className='text-xs'>
        {moment(blog.createdAt).format('DD-MMM-YYYY')}
      </div>
      <div className='flex w-full border-b border-blue-100'>
        <span className='w-1/2'><span className='font-bold'>Name: </span>{blog.firstName} {blog.lastName}</span>
        <span className='w-1/2'><span className='font-bold'>From:</span> {blog.from}</span>
      </div>
      <div className='text-sm'>
        Went to <span className='text-blue-800 font-semibold'>{blog.country}</span> and stayed at  <span className='text-blue-800 font-semibold'>{blog.hotel}</span>
      </div>
      {
        blog.activities && blog.activities.length > 0 &&
        <div className='w-full'>
          <span className='font-bold underline'>
            Activities
          </span>
          <ul>
            {
              blog.activities.map((item => <li key={item._id}>
                <a href={item.url} className='w-full underline text-sm'>{item.name}</a>
              </li>
              ))
            }
          </ul>
        </div>
      }
      {
        blog.hotelPics && blog.hotelPics.length > 0 &&
        <div className='w-full'>
          <span className='font-bold underline'>
            Pictures
          </span>
          <div className='flex flex-wrap w-full'>

          </div>
          {
            blog.hotelPics.map(((item, index) => <li key={`pic-${index}`}>
              <div className='w-1/3'>
                <img src={item} alt="hotel pic" />
              </div>
            </li>
            ))
          }
        </div>
      }
    </div>
  )
}

BlogItem.propTypes = {
  blog: PropTypes.any
}

export default BlogItem
