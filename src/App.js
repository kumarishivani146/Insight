import React, {useEffect} from 'react';
import {useSelector,useDispatch} from "react-redux";
import './App.css';
import Login from './Component/auth/Login';
import Insight from './Component/Insight.js';
import { logout,login, selectUser } from './features/userSlice';
import { auth } from './firebase';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          login({
            uid: authUser.uid,
            email: authUser.email,
            displayName: authUser.displayName,
            photo: authUser.photoURL,
          })
        );
      } else {
        dispatch(logout());
      }
      console.log(authUser);
    });
  }, [dispatch]);
  return (
    <div className="App">
      {
        user?(<Insight/>):(<Login/>)
      }
      
    </div>
  );
}

export default App;
