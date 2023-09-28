import { useQuery } from "react-query";
import { SUPER_HEROS } from "../utils/queryKeys";
import axios from "axios";
import { HeroType } from "../utils/Interface";

const fetchSuperHeroes = ()=> {
  return axios.get('http://localhost:4000/superheroes')
}

const RQSuperheros = () => {

  const {isLoading, data, isError, error, isFetching} = useQuery(SUPER_HEROS, fetchSuperHeroes, {
    // cacheTime: 5000, // default time is 5 mins
    // staleTime: 30000, // default value is 0 seconds, 
    // refetchOnMount: false // default true 
    // refetchOnWindowFocus:true  // default is true
    // refetchInterval : 2000 // default is false || calls api after this amount of time => real time data shown
  })

  console.log({isLoading,isFetching  })

  if(isLoading) {
    return <h3>Loading...</h3>
  }

  if(isError) {
    console.log('error:',error)
    return <h3>{error?.message}</h3>
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