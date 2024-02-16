import './App.css'
import Card from './components/Card'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

function App() {

  return (
    <div>
      <Navbar />
      <div className='flex flex-col justify-center items-center gap-3 p-2'>
        <div className='w-5/6'>
          <button className='px-3 py-2 rounded-md bg-blue-500 text-white'>Button one</button>
        </div>
        <div className='w-5/6 border border-red-500 bg-red-200 p-3 rounded'>
          <p className='text-red-600'><span className='font-medium'>Alert!</span> This is awesome!</p>
        </div>
      </div>
      <div className='p-2 flex justify-center items-center'>
        <Card />
      </div>
      <Footer />
    </div>
  )
}

export default App
