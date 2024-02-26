import React from 'react'
import { auth } from '../utils/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO, SUPPORTED_LANGUAGES, USER_AVATAR } from '../utils/constants';
import { toggleGptSearchView } from '../utils/gptSlice';
import { chnageLanguage } from '../utils/configSlice';


const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(store => store.user)
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch)
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

  const handleLanguageChange = (e) => {
    dispatch(chnageLanguage(e.target.value))

  }


  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col  md:flex-row justify-between '>
      <img
        className='w-44 mx-auto md:mx-0'
        src={LOGO} alt="Logo" />

      {user && (<div className='flex p-2 justify-between '>
        {showGptSearch && (
          <select select className='p-2 m-2 bg-gray-900 text-white' onChange={handleLanguageChange}>
            {SUPPORTED_LANGUAGES.map(lang => <option key={lang.identifier} value={lang.identifier}> {lang.name}</option>)}

          </select>)}

        <button className='py-2 px-4 mx-4 my-2 bg-yellow-500 text-white rounded-lg' onClick={handleGptSearchClick}>

          {showGptSearch ? "Browse" : "GPT Seacrh"}

        </button>
        <img className=" hidden md:block w-12 h-12 m-3 cursor-pointer" alt="usericon" src={USER_AVATAR} />
        <button onClick={handleSignOut} className='font-bold text-white'>Sign out</button>
      </div>)
      }
    </div >
  )
}

export default Header