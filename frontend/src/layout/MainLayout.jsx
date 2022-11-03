import { Outlet } from 'react-router-dom';
import { Nav } from '../components';
function MainLayout () {
  return (
    <div>
      <Nav />
      <div className='container mx-auto py-3'>
        <Outlet />
      </div>
    </div>
  )
}

export default MainLayout