import React, { useRef } from 'react';
import lang from '../utils/languageConstants';
import { useSelector } from 'react-redux';
import openai from '../utils/openai';

const GptSearchBar = () => {
  const langKey = useSelector(store => store.config.lang);
  const searchText = useRef(null);

  const handleGptSearchClick = async () => {
    const gptQuery = "Act as Movie Recommendation system and suggest some movies for the query " + searchText.current.value + " only give me names of 5 movies, comma separated like the example result given ahead. Example Result: 3 Idiots, Tamasha, Sonu ke Titu ki Sweety, Dhol, Tubelight";

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: 'user', content: gptQuery }],
      model: 'gpt-3.5-turbo',
    });

    if (!gptResults.choices) {
      // Error handling
      console.error('Error in API response');
      return;
    }

    console.log(gptResults.choices?.at.message.content);
    const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");
  };

  return (
    <div className='pt-[10%] flex justify-center'>
      <form className='w-1/2 bg-black grid grid-cols-12' onSubmit={(e) => e.preventDefault()}>
        <input type="text" className='p-4 m-4 col-span-9' placeholder={lang[langKey].gptSearchPlaceholder} ref={searchText} />

        <button className='py-2 px-4 bg-red-500 text-white rounded-lg col-span-3 m-4' onClick={handleGptSearchClick}>
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
