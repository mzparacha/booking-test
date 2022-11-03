import axios from 'axios';
const {
  VITE_LOCAL_API: baseURL,
} = import.meta.env;
const instance = axios.create({
  baseURL
})
const objectToText = (object) => Object.entries(object)
  .map(([k, v]) => v !== undefined ? `${k}=${v}` : null)
  .filter(c => c)
  .join('&')

const useLocalApi = () => {


  return {
    async getRequest (resource, query = {}, options = {}) {
      try {
        const response = await axios.get(`${baseURL}/${resource}${query ? `?${objectToText(query)}` : ''}`, options)
        return response;
      } catch (error) {
        console.error('Error while performing GET request', error)
        return null;
      }
    },
    async post (resource, data) {
      try {
        const response = await axios.post(`${baseURL}/${resource}`, data);
        return response;
      } catch (error) {
        console.error('Error while updating a resource', error);
        return null;
      }
    },
  }
}
export default useLocalApi;
