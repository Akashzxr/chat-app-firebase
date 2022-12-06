import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Chat from './components/chat/Chat';
import UserSearch from './components/sidebar/usersearch/UserSearch';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { useEffect } from 'react';

function App() {
  const {user,isSignin} = useSelector((state)=>state.auth);
  const {adduser} = useSelector((state)=>state.data)
  
  useEffect(()=>{
    

  },[user,adduser,isSignin])

  return(
    <div>
        {user ?
          <div className="App">
              <Sidebar/>
              <Chat/>
              {adduser ? <UserSearch/> : null}
              
         </div>
         : <Navigate to={'/'} /> }
    </div>
  )

}

export default App;
