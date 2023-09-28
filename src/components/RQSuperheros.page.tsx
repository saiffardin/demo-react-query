import { useQuery } from "react-query";
import { SUPER_HEROS } from "../utils/queryKeys";
import axios from "axios";
import { HeroType } from "../utils/Interface";

const fetchSuperHeroes = ()=> {
  return axios.get('http://localhost:4000/superheroes')
}

const RQSuperheros = () => {

  const {isLoading, data} = useQuery(SUPER_HEROS, fetchSuperHeroes)


  if(isLoading) {
    return <h3>Loading...</h3>
  }

  return (
    <div>
      <h1>RQSuperheros</h1>
      
      <ul>
        {
          data?.data.map((hero:HeroType)=>(
            <li key={hero.id}>{hero.name}</li>
          ))

        }
      </ul>
    </div>
  );
};

export default RQSuperheros;