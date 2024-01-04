
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import tailWindLogo from './assets/tailwind.svg'
import './App.css'

import ContainerT from './components/Container'


const App = () => {
  //const [count, setCount] = useState(0)

  return (
    <>
      {/*<RouteReact /> */}
      <ContainerT>
        <div className='items-center  justify-center flex gap-3 ' style={{minHeight:"90vh"}}>
          <img src={viteLogo} />
          <img src={tailWindLogo} />
          <img src={reactLogo} />
        </div>
      </ContainerT>



    </>
  )
}

export default App
