import { useSelector } from 'react-redux';

function SearchedItems() {
    const searchedItems = useSelector(state => state.addItem.allItems);
    return (
        <div className="searchedItems">
        {searchedItems.length!=0 && 
        <>
            <h4 className="siTitle">Searched Items:</h4>
            {searchedItems.map((item, key) => <div key={key} className="sItem">{item}</div>)}
        </>
        }
        </div>
    );
}

export default SearchedItems;