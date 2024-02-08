import React from 'react'
import { auth } from '../utils/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO, USER_AVATAR } from '../utils/constants';
import { toggleGptSearchView } from '../utils/gptSlice';


const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(store => store.user)
  const handleSignOut = () => {

    signOut(auth).then(() => {

    }).catch((error) => {
      // An error happened.
      navigate("/error")
    });

  }


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {

        const { uid, email, displayName, photoURL } = user.uid;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));

        navigate("/browse")

      } else {
        // User is signed out
        dispatch(removeUser())
        navigate("/")
      }
    });
    return () =>
      //Unsubscribe when component unmount
      unsubscribe()

  }, [])

  const handleGptSearchClick = () => {
    //Toggle GPT Search

    dispatch(toggleGptSearchView())


  }


  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
      <img
        className='w-44'
        src={LOGO} alt="Logo" />

      {user && (<div className='flex p-2  '>
        <select>
          <option value="en"> English </option>
          <option value="hindi"> Hindi </option>
          <option value="spanish"> Spanish </option>

        </select>

        <button className='py-2 px-4 mx-4 my-2 bg-yellow-500 text-white rounded-lg' onClick={handleGptSearchClick}>GPT Seacrh</button>
        <img className=" w-12 h-12 m-3 cursor-pointer" alt="usericon" src={USER_AVATAR} />
        <button onClick={handleSignOut} className='font-bold text-white'>Sign out</button>
      </div>)}
    </div>
  )
}

export default Header