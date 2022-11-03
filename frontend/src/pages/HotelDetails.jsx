import { useEffect, useState } from 'react'
import { useApi } from '../hooks'
import { useParams, Link } from 'react-router-dom'
const DESCRIPTION_ENDPOINT = 'properties/get-description';
// 
function HotelDetails () {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const { loading, getRequest } = useApi();
  const getDetails = async () => {
    const { data: fetched } = await getRequest(DESCRIPTION_ENDPOINT, {
      hotel_ids: id,
      check_out: '2022-11-15',
      languagecode: 'en-us',
      check_in: '2022-11-13'
    })
    setData(fetched);
  }
  useEffect(() => {
    document.title = 'Hotel Description';
    getDetails();
  }, [])
  return (
    <div className='flex flex-col gap-3'>
      <div className='font-bold'>Hotel descriptions:</div>
      <Link className='underline text-blue-400' to="/filter">Back</Link>
      {
        loading && 'Fetching description...'
      }
      {
        !loading && data && data.map((item) => (
          <div key={item.descriptiontype_id} className="text-sm">
            {item.description}
          </div>
        ))
      }
    </div>
  )
}
export default HotelDetails
