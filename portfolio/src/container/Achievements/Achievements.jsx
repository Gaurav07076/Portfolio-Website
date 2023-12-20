import React from 'react'
import { AppWrap, MotionWrap } from '../../wrapper'
import { urlFor, client } from '../../client';

const Achievements = () => {

    const [achievement, setAchievement] = useState([]);

  useEffect(() => {
    const query = '*[_type == "achievements"]';
   

    client.fetch(query).then((data) => {
      setAchievement(data);
      console.log(experiences)
    });
  }, []);




  return (
    <>
    <div><h1>Achievements</h1></div>
    <div>
        <div>

        </div>
        <div>
            
        </div>
        <div>
            
        </div>
        <div>
            
        </div>

    </div>
    </>
  )
}


export default AppWrap(
    MotionWrap(Achievements,),
    'achievements','app__primarybg'
  );