import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Chat from './components/chat/Chat';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { useEffect } from 'react';

function App() {
  const {user} = useSelector((state)=>state.auth)

  useEffect(()=>{

  },[user])

  return(
    <div>
        {user ?
          <div className="App">
              <Sidebar/>
              <Chat/>
         </div>
         : <Navigate to={'/'} /> }
    </div>
  )

}

export default App;
