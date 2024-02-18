import {BrowserRouter, Routes, Route} from 'react-router-dom'
import About from './pages/About'
import Homepage from './pages/Homepage'
import StartGame from './pages/StartGame'
import Game from './pages/Game'
import Login from './pages/Login'
import Signup from './pages/Signup'


export default function App() {
    return (
        <div>
        <BrowserRouter>
            <Routes>
                <Route index element={<Login/>} />
                <Route path='/login' element={<Login/>} />
                <Route path='/signup' element={<Signup/>} />
                <Route path='/home' element={<Homepage/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/startgame" element={<StartGame/>}/>
                <Route path="/game" element={<Game/>}/>
                <Route path='*' element={<Homepage/>} />
            </Routes>
        </BrowserRouter>
        </div>
    )
}