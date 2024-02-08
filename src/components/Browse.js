
import useNowPLayingMovies from '../hooks/useNowPlayingMovies'
import Header from './Header'
import Maincontainer from './Maincontainer'
import SecondaryContainer from './SecondaryContainer'
import usePopularMovies from '../hooks/usePopularMovies'
import GptSearch from './GptSearch'
import { useSelector } from 'react-redux'

const Browse = () => {
  //fetch data from tmdb api and update store
  const showGptSearch = useSelector(store => store.gpt.showGptSearch);

  useNowPLayingMovies()
  usePopularMovies()

  return (
    <div>
      <Header />
      {
        showGptSearch ? (<GptSearch />) : (<>
          <Maincontainer />
          <SecondaryContainer />
        </>
        )}


    </div>
  )
}

export default Browse