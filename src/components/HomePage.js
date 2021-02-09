import {useState} from 'react';
import { useDispatch } from 'react-redux';
import SearchedItems from './SearchedItems';


function HomePage() {
  const [item, setItem] = useState("");
  const [results, setResults] = useState([]);
  const dispatch = useDispatch();
  const handleSubmit = () => {
    dispatch({type:'ADD_ITEM',payload:item});
    fetch("http://hn.algolia.com/api/v1/search?query=" + item)
      .then(res => res.json())
      .then(
        (result) => {
          let hits = result.hits;
          setResults(hits);
        },
        (error) => {
          console.log("error in fetching the data: ", error);
        }
      )
  }
  return (
    <div className="App">
      <h2>Hacker News</h2>
      <label htmlFor="search">Search News:</label>
      <input type="search" id="search" value={item} name="search" onChange={e => setItem(e.target.value)}/>
      <button type="button" onClick={handleSubmit}>Submit</button>
      <br/>
      <SearchedItems/>
      {results.map((item, key)=>
      <div key={key} className="item">
        <h5>{item.title}</h5>
        <a href={item.url} target="_blank">Link to news</a>
      </div>
      )}
    </div>
  );
}

export default HomePage;
