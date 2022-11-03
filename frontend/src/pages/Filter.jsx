import { useEffect, useState } from 'react';
import Results from '../components/Results';
import { useApi, usePagination } from '../hooks'
const ENDPOINT = 'properties/list';
export default function Filter () {
  const { getRequest, loading } = useApi();
  const [results, setResults] = useState([]);
  const [{ setCount, togglePagination }, Pagination] = usePagination({
    onPageChange: async (pg) => {
      await getData(pg - 1);
    }
  });

  // 
  const getData = async (offset = 0) => {
    togglePagination(false);
    const { data } = await getRequest(ENDPOINT, {
      offset: `${offset}`,
      guest_qty: '1',
      arrival_date: "2022-11-2",
      departure_date: "2022-11-5",
      dest_ids: '-3712125',
      room_qty: '1',
      search_type: 'city',
      children_qty: '2',
      children_age: '5,7',
      search_id: 'none',
      price_filter_currencycode: 'USD',
      order_by: 'popularity',
      languagecode: 'en-us',
      travel_purpose: 'leisure'
    });
    setCount(data.count);
    setResults(data.result);
    togglePagination(true);
  }
  // 
  useEffect(() => {
    getData();
    document.title = 'Filter Hotels';
  }, []);
  return (
    <div className='flex flex-col gap-3'>
      {loading && 'Fetching results...'}
      {!loading && <Results data={results} />}
      <Pagination />
    </div>
  )
}
