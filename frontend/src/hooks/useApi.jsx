import { useState } from 'react'
import axios from 'axios';
const {
  VITE_API_HOST_URL: apiUrl,
  VITE_API_HOST: apiHost,
  VITE_API_HOST_HEADER: hostHeader,
  VITE_API_KEY_HEADER: keyHeader,
  VITE_API_KEY: apiKey
} = import.meta.env;
const instance = axios.create({
  baseURL: apiUrl,
})
const objectToText = (object) => Object.entries(object)
  .map(([k, v]) => v !== undefined ? `${k}=${v}` : null)
  .filter(c => c)
  .join('&')
const useApi = () => {
  const [loading, setLoading] = useState(false);
  const sendRequest = (method, url, options = {}) => {
    const sendOptions = {
      method,
      url: `${apiUrl}/${url}`,
      headers: {
        'X-RapidAPI-Key': apiKey,
        'X-RapidAPI-Host': apiHost
      },
      ...options
    }
    return instance(sendOptions)
  }
  return {
    loading,
    async getRequest (resource, query = {}, options = {}) {
      setLoading(true);
      let response = null;
      try {
        response = await sendRequest(
          'get',
          `${resource}${query ? `?${objectToText(query)}` : ''}`,
          options
        )
      } catch (error) {
        console.error('Error while performing GET request', error)
      }
      setLoading(false);
      return response;
    },
  }
}
export default useApi;
