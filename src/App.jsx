import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';
var titles = [];

function App() {
  const [ bookTitles,setbookTitles ] = useState( titles );
  useEffect( () => {
    callApi();
    setbookTitles( titles );
    console.log('from main')
    getTitles();
  },[] );
  const callApi = () => {
    axios.get( "https://jsonplaceholder.typicode.com/posts/" ).then(
      ( response ) => {
        response.data.forEach(element => {
          titles.push( element.title );
        });
      }
    ).catch((error) => console.log(error))
  }
  const getTitles = () => {
  console.log(bookTitles)
  }
  return (
    <div className="App">
      test
      { bookTitles }
      <div>
        { true ? titles.map( ( value,index ) => <div key={ index }>{ value }</div> ): <></>}
      </div>
    </div>
  )
}

export default App
