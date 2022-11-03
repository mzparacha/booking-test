import React from 'react'
import PropTypes from 'prop-types'

const Input = ({ placeholder = "", type, value, setValue, required = true, onChange = null }) => {
  return (
    <input
      className='border border-black w-full rounded px-2 py-'
      type={type}
      value={value}
      onChange={({ target }) => {
        if (setValue) {
          setValue(target.value);
        }
        if (onChange) {
          onChange(target.value);
        }
      }}
      placeholder={placeholder}
      required={required}
    />
  )
}

Input.propTypes = {
  setValue: PropTypes.func,
  required: PropTypes.bool,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  value: PropTypes.any.isRequired,
  type: PropTypes.string.isRequired,
}

export default Input