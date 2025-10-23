import { useNavigate } from 'react-router-dom'

export default function Header() {
    const navigate = useNavigate()

    const handleFavorite = () => {
        navigate('/favorite')
    }
    const handleHome = () => {
        navigate('/home')
    }
  return (
    <header className='m-4'>
        {/* <h1>Header</h1> */}
        <div className="flex gap-4">
            <button className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-200' onClick={handleHome}>Home</button>
            <button className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-200' onClick={handleFavorite}>Favorite</button>  
        </div>
    </header>
  )
}
