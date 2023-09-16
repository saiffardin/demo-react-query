import axios from 'axios';
import { useEffect,useState } from 'react';
import { HeroType } from '../utils/Interface';

const Superheros = () => {

  const [isLoading,setIsLoading] = useState(true);
  const [data,setData] = useState<HeroType[]>([]);

  useEffect(() => {

    // setTimeout(()=>{
    //   axios.get('http://localhost:4000/superheroes')
    //   .then((res)=>res.data)
    //   .then((data)=>{
    //     setData(data);
    //     setIsLoading(false)
    //   })
    // },1000)
    
    axios.get('http://localhost:4000/superheroes')
      .then((res)=>res.data)
      .then((data)=>{
        setData(data);
        setIsLoading(false)
      })
    
  }, [])

  if(isLoading) {
    return <h1>Loading...</h1>
  }


  return (
    <div>
      <h1>Traditional Superheros</h1>
      <ul>
        {
          data.map(hero=><li key={hero.id}>{hero.name}</li>)
        }
      </ul>
    </div>
  );
};

export default Superheros;