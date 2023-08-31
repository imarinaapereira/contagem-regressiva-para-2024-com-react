import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import Title from './components/Title'
import Counter from './components/Counter'
import useCountdown from '../hooks/useCountdown'
let Imagem = 'https://cdn.pixabay.com/photo/2015/01/01/22/54/sylvester-586225_1280.jpg'
function App() {
  const [count, setCount] = useState(0)
  const [day, hour, minute, second] = useCountdown("Jan 1,2024 00:00:00")
  return (
    <div className='app' style={{ backgroundImage: `url(${Imagem})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
      <div className='container'>
        <Title title="contagem regressiva para 2024" />
        <div className='countdown-container'>
          <Counter title="dias" number={day} />
          <Counter title="horas" number={hour} />
          <Counter title="minutos" number={minute} />
          <Counter title="segundos" number={second} />
        </div>
      </div>
    </div >
  )
}

export default App
