import React from 'react';
import './moodtiles.css';
import happy from '../Happy';
import sad from '../Sad'
import crying from '../Crying'
import anxious from '../Anxious'
import excited from '../Excited'
import angry from '../Angry';
import { useState } from 'react';


export default function MoodTiles()
{
    
const [happyQuote, setHappyQuote] = useState(null);
const [sadQuote, setSadQuote] = useState(null);
const [angryQuote, setAngryQuote] = useState(null);
const [excitedQuote, setExcitedQuote] = useState(null);
const [anxiousQuote, setAnxiousQuote] = useState(null);
const [cryingQuote, setCryingQuote] = useState(null);
const [activeMood, setActiveMood] = useState(null);

  

  
  const toggleQuote =(mood) =>
  {
    if(activeMood === mood)
    {
        setActiveMood(null);
    }
    else
    {
        setActiveMood(mood);
        if(mood==='happy')
        {
            const randomIndex = Math.floor(Math.random() * happy.length);
    setHappyQuote(happy[randomIndex]);
        }
        else if(mood === 'sad')
        {
            const randomIndex = Math.floor(Math.random() * sad.length);
    setSadQuote(sad[randomIndex]);
        }
        else if(mood === 'angry')
        {
            const randomIndex = Math.floor(Math.random() * angry.length);
            setAngryQuote(angry[randomIndex]);
        }
        else if(mood === 'anxious')
        {
            const randomIndex = Math.floor(Math.random() * anxious.length);
            setAnxiousQuote(anxious[randomIndex]);
        }

        else if(mood === 'excited')
        {
            const randomIndex = Math.floor(Math.random() * excited.length);
    setExcitedQuote(excited[randomIndex]);
        }

        else if(mood === 'crying')
        {
            const randomIndex = Math.floor(Math.random() * crying.length);
            setCryingQuote(crying[randomIndex]);
        }

    }
  };

    return(
        <>
        <div className="moodTiles">
            <button  className={`moodTilesButton ${activeMood === 'happy' ? 'active' : ''}`}
            onClick={()=> toggleQuote('happy')}>
            <h3>😃Happy</h3>
            </button>


              {activeMood === 'happy' && happyQuote && (
                <div>
                    <p className='currentMood'>{happyQuote.text}</p>
                </div>
            )}

            <button className={`moodTilesButton ${activeMood === 'sad' ? 'active' : ''}`} 
             onClick={()=> toggleQuote('sad')}>
            <h3>😔Sad</h3>
            </button>
            {activeMood === 'sad' && sadQuote && (
                <div>
                    <p  className='currentMood'>{sadQuote.text}</p>
                </div>
            )}

            <button  className={`moodTilesButton ${activeMood === 'angry' ? 'active' : ''}`} 
             onClick={()=> toggleQuote('angry')}>
            <h3>😡Angry</h3>
            </button>
            {activeMood === 'angry' && angryQuote && (
                <div>
                    <p  className='currentMood'>{angryQuote.text}</p>
                </div>
            )}

            <button  className={`moodTilesButton ${activeMood === 'sad' ? 'active' : ''}`}
             onClick={()=> toggleQuote('anxious')}>
            <h3>😫Anxious</h3>
            </button>
            {activeMood === 'anxious' && anxiousQuote && (
                <div>
                    <p  className='currentMood'>{anxiousQuote.text}</p>
                </div>
            )}

            <button  className={`moodTilesButton ${activeMood === 'sad' ? 'active' : ''}`}
             onClick={()=> toggleQuote('crying')}>
            <h3>😭Crying</h3>
            </button>
            {activeMood === 'crying' && cryingQuote && (
                <div>
                    <p  className='currentMood'>{cryingQuote.text}</p>
                </div>
            )}

            <button  className={`moodTilesButton ${activeMood === 'sad' ? 'active' : ''}`}
             onClick={()=> toggleQuote('excited')}>
            <h3>🥳Excited</h3>
            </button>
            {activeMood === 'excited' && excitedQuote && (
                <div>
                    <p  className='currentMood'>{excitedQuote.text}</p>
                </div>
            )}
            

        </div>
        </>
    );
}