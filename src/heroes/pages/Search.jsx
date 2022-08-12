import {  useLocation, useNavigate } from "react-router-dom";
import queryString from 'query-string'
import { useForm } from "../../hooks/useForm"
import { HeroCard } from "../components/HeroCard"
import {getHeroByName} from '../helpers/getHeroByName'

export const Search = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const {q = ''} = queryString.parse(location.search);
  const heroes = getHeroByName( q )
  const {searchText , onInputChange} = useForm({
  searchText: q
  });

  const onSearhSubmit = (e)=>{
    e.preventDefault();
   // if(searchText.trim().length <=1) return
    navigate(`?q=${searchText}`);
  }
  return (
   <>
      <h1>search</h1>
      <hr/>
    <div className="row">
    <div className="col-5">
        <h4> Searching</h4>
        <hr/>
        <form onSubmit={onSearhSubmit}>
          <input 
            type="text" 
            placeholder="search hero"  
            className="form-control" 
            name="searchText"
            autoComplete="off"
            value={searchText}
            onChange= {onInputChange}
            />

            <button className=" mt-1 btn btn-outline-primary">
              Search
            </button>

        </form>

      </div>
      <div className="col-7 ">
        <h4> Results</h4>
        <hr />
        {
          q ==='' ? <div className="alert alert-primary"> Search a hero</div> :
           heroes.length === 0  &&  <div className="alert alert-danger"> the hero <b> {q}</b> is not registered </div>
        }
        
        

        {heroes.map( hero => (
          <HeroCard  key={hero.id}{...hero} />
        ))}
       {/*   */}

      </div>
    </div>
      
   </>
  )
}
