import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types'
import ActivityInput from './ActivityInput'
// 
const ActivitiesInput = ({ onChange }) => {
  const [inputs, setInputs] = useState([{
    name: '',
    url: ''
  }]);
  const changed = (index) => (data) => {
    const newState = inputs.map((item, idx) => {
      if (index === idx) {
        return data;
      }
      return item;
    })
    setInputs(newState);
    onChange(newState);
  }
  const addNew = (e) => {
    setInputs([
      ...inputs,
      { name: "", url: '' }
    ])
  }
  const remove = (idx) => e => {
    setInputs(inputs.filter((_, index) => index !== idx))
  }
  return (
    <div className='w-full flex flex-col gap-2'>
      <h6 className='font-bold'>Activities</h6>
      {
        inputs.map((input, index) =>
          <div className="flex w-full" key={"input" + index}>
            <ActivityInput input={input} onChange={changed(index)} />
            {inputs.length > 1 && <div className="w-8 flex h-8">
              <button className='bg-red-200 rounded-full px-2 grid items-center mx-auto my-auto' type="button" onClick={remove(index)}>-</button>
            </div>
            }
          </div>
        )
      }
      <button onClick={addNew} type='button' className='rounded-lg border-primary border block bg-blue-400 text-black'>Add More Activities</button>
    </div>
  )
}
ActivitiesInput.propTypes = {
  onChange: PropTypes.func.isRequired
}
export default ActivitiesInput