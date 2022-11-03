import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BlogItem from '../components/BlogItem';
import { useLocalApi } from '../hooks';
const Home = () => {
  const { getRequest } = useLocalApi();
  const [data, setData] = useState([]);
  useEffect(() => {
    document.title = 'Home';
    (async function getBlogs () {
      const newData = await getRequest('blog');
      setData(newData.data)
    })();

  }, [])
  return (
    <div className='flex flex-col w-full'>
      <div className='flex justify-between'>
        <h3 className='font-bold border-b border-black'>Experiences</h3>
        <Link className='text-blue-500' to='/blog-create'>Create New Experience</Link>
      </div>

      <div className='w-full flex flex-col rounded gap-2 py-2'>
        {
          data.map(((blog) => <BlogItem key={blog._id} blog={blog} />))
        }
      </div>
    </div>
  )
}
export default Home