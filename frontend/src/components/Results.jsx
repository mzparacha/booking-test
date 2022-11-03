import PropTypes from 'prop-types'
import Result from './Result'
function Results ({ data }) {
  return (
    <div className='flex flex-wrap w-full'>
      {
        data.map((item) => <Result key={item.id} hotel={item} />
        )
      }
    </div>
  )
}
Results.propTypes = {
  data: PropTypes.array.isRequired
}
export default Results
