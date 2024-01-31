
import { Link, Outlet} from "react-router-dom";
import './App.css'




function App() {

  return (
    <>
    <header>
      <Link to={'/'}>main page</Link>
      <Link to={'contact'}>contact</Link>
      <Link to={'register'}>register</Link>
    </header>
    </>
  )
}

export default App
