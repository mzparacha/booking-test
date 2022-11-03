import { Fragment } from 'react'
import PropTypes from 'prop-types'
import Input from './Input';

const ActivityInput = ({ input, onChange }) => {
  const nameChange = (v) => onChange({
    name: v,
    url: input.url
  });
  const urlChange = (v) => onChange({
    name: input.name,
    url: v
  });
  return (
    <div className='flex gap-3 w-full'>
      <div className='w-1/2'>
        <Input placeholder="Activity Name" type="text" value={input.name} onChange={nameChange} />
      </div>
      <div className='w-1/2'>
        <Input placeholder="Activity Url" type="text" value={input.url} onChange={urlChange} />
      </div>
    </div>
  )
}

ActivityInput.propTypes = {
  input: PropTypes.any.isRequired,
  onChange: PropTypes.func
}

export default ActivityInput