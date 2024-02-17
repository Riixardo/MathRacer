import {BrowserRouter, Routes, Route} from 'react-router-dom'
import About from './pages/About'
import Homepage from './pages/Homepage'


export default function App() {
    return (
        <div>
        <BrowserRouter>
            <Routes>
                <Route index element={<Homepage/>} />
                <Route path='/home' element={<Homepage/>} />
                <Route path="/about" element={<About/>} />
                <Route path='*' element={<Homepage/>} />
            </Routes>
        </BrowserRouter>
        </div>
    )
}