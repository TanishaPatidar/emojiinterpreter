import React ,{useState} from 'react';
import "./styles.css";

const emojiDictionary={
  "😀":"It conveys cheerfulness and joy towards something positive",
  "😃":"Smiley emoji denotes happiness and positive feelings",
  "😅":"Phew emoji, grinning face with sweat, relief emoj",
  "🤣":"Used when someone cracks a hilarious joke ",
  "😍":"Heart face"
};

var emojiList=Object.keys(emojiDictionary);

export default function App(){

  const[meaning ,setMeaning]=useState(" ");

  function clickInputChange(event){
    var emoji=event.target.value;
    var meaning =emojiDictionary[emoji];

    if(meaning===undefined){
      meaning="We don't have this emoji in our database";
    }
    setMeaning(meaning);
}

function clickEmojiHandler(emoji){
   var meaning=emojiDictionary[emoji];
   setMeaning(meaning);
 }

  return (
    <div className="App">
      <h1>inside outt</h1>
      <input onChange={clickInputChange}></input>
      <h3>{meaning}</h3>

      <h4>Emoji we know</h4>
      {
        // to access each element from list and perform function
        emojiList.map(function(emoji){
          return <span onClick={()=>clickEmojiHandler(emoji)} 
          style={{fontSize:"2rem",cursor:"pointer",padding:"0.5rem"}}>{emoji}
          </span>
        }
        )//function close
      }

    </div>
  );
}

