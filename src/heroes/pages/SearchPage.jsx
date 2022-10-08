
import { useLocation, useNavigate } from 'react-router-dom'
import queryString from 'query-string'
import { useForm } from '../../hooks/useForm';
import { getHeroesByName } from '../helpers.js/getHeroesByName';
import { HeroCard } from '../components/HeroCard';
import { useEffect } from 'react';
import { useSelector } from 'react-redux'
  


export const SearchPage = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const { q = '' } = queryString.parse( location.search )
  
  const { user } = useSelector(state => state.auth)
  const heroes = getHeroesByName( q )
  
  const showSearch = (q.length === 0);
  const showError = (q.length > 0) && heroes.length === 0;
 
 
  const { clearInput, onInputChange, stateForm, searchText } = useForm({
    searchText: q
  })

  const handleSubmitForm = (e) => {
    e.preventDefault();
    if ( searchText.trim().length <= 1 ) return;
    navigate(`?q=${ searchText.toLowerCase().trim() }`)
    clearInput();
  }

  useEffect(() => {
    
    localStorage.setItem('user', JSON.stringify( user ) )
  
  }, [])
  

  return (
    <>
      <h1>Search</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />
          <form 
            onSubmit={ handleSubmitForm }
          >
            <input
              type="text"
              placeholder='Search a hero'
              className='form-control'
              name='searchText'
              value={ searchText }
              autoComplete='off'
              onChange={ onInputChange }
            />

            <button
              className='btn btn-outline-primary mt-1'
              type='onSubmit'
            >
              Search
            </button>
          </form>
        </div>

        <div className="col-7">
          <h4>Results</h4>
          <hr />

          <div className="alert alert-primary animate__animated animate__fadeInLeft"
              style={{ display: showSearch ? '' : 'none' }}>
            Search a hero
          </div>

          <div className="alert alert-danger animate__animated animate__fadeIn"
               style={{ display: showError ? '' : 'none' }} >
            There´s no results for { q }
          </div>

          { heroes &&
            heroes.map ( hero => (
              <HeroCard 
                 key={hero.id} 
                 { ...hero }
              />
            ) )
          }

        </div>
      </div>

    </>
  )
}
