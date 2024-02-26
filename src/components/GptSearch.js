import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptSuggestion from './GptSuggestion'
import { BG_URL } from '../utils/constants'

const GptSearch = () => {
  return (

    <>

      <div className='fixed -z-10'>
        <img className='object-cover h-screen w-screen' src={BG_URL} alt="logo" />
      </div>
      <div className=''>
        <GptSearchBar />
        <GptSuggestion />
      </div>

    </>
  )
}

export default GptSearch