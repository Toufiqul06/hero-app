
import { Outlet } from 'react-router'
import Footer from '../components/Footer'
import Navbar from '../Components/Navbar'

const MainLayout = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      <Navbar />
      <main className="min-h-[80vh]">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout
