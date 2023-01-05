 import './App.css';
 import { useState } from 'react';
 import SearchBar from './Components/SearchBar';
 import AddItems from './Components/AddItems'
 import ItemsDisplay from './Components/ItemsDisplay';
//import { bodyParser } from 'json-server';

function App() {

  const [typedFilter, setTypedFilter] = useState({})
  const [data, setData] = useState({items:[]})
  //useState is an aboject with a key of items and a value of array

  const updateFilter = (searchParameters) => { 
    setTypedFilter(searchParameters)
  }

  const addItemToData = (item) =>{
    let items = data["items"]
    //Taking the array from useState and storing it in a variable
    item.id = items.length
    //This will assign the item added an index
    //Prevents --> Warning: Each child in a list should have a unique "key" prop

    /*const requestOptions = {
      method: "POST",
      header: {
        "Content-Type": "application/json"
      }, 
      body: JSON.stringify(item)
    }*/

    //fetch("http://localhost:3000/items", requestOptions).then((response) => response.json).then((data) => {items.push(data)})
    //setData({items:items})

    items.push(item)
    //Adding an item to the array
    setData({items: items})
    //Setting the "key" items equalt to the "value" items
    console.log(data)
  } 

  const filterData = (data) => {
    const filteredData = []

    if(!typedFilter.quotesName){
      return data
    } //Checking if we've set our filters already 

    for (const item of data){  
      if (typedFilter.quotesName !== "" && item.quotesName !== typedFilter.quotesName){
        continue
      }
      if (typedFilter.quotesPrice !== 0 && item.quotesPrice > typedFilter.quotesPrice){
        continue
      }
      if (typedFilter.quotesBrand !== "" && item.quotesBrand !== typedFilter.quotesBrand){
        continue
      }
      if (typedFilter.quotesType !== "" && item.quotesType !== typedFilter.quotesType){
        continue
      }
      filteredData.push(item)
    }
    return filteredData
  }
 
  return (
    <div className="container">
      <div className="row mt-3">
        {/*mt = margin-top in Bootstrap (0-5rem)*/}
        <SearchBar updateSearchParamaters={updateFilter}/>
        {/*Pass a callback function so we can modify state of Parent component
        from a Child component. We pass data as a parameter to callback function
        which then updates the state in the componenet causing a rerender*/}
        {/*<p>{"name" in typedData? typedData["name"] : "No Data"}</p>*/}
        <p>Name: {typedFilter.hasOwnProperty("quotesName") ? typedFilter.quotesName : "No Name Data"}</p>
        <p>Max Price: {typedFilter.hasOwnProperty("quotesPrice") ? typedFilter.quotesPrice : "No Price Data"}</p>
        <p>Brand: {typedFilter.hasOwnProperty("quotesBrand") ? typedFilter.quotesBrand : "No Brand Data"}</p>
        <p>Type: {typedFilter.hasOwnProperty("quotesType") ? typedFilter.quotesType : "No Type Data"}</p>
      </div>
      <div className="row mt-3">
        <AddItems addItem={addItemToData}/>
      </div>
      <div className="row mt-3  ">
        <ItemsDisplay items={filterData(data["items"])}/>
      </div>
    </div> 
  );
}

export default App;

//Component
// -->  Aspect of the user interface
// -->  Reusable (flexible, dynamic)
// --> Returns a JSX element (JavsScript XML) --> For evaluate JS expressions

/* Use this to see the LearningComponents

 //import Info from "./LearningComponents/Info"
 //import AddItem from './LearningComponents/AddItem'; 
 //import ButtonState from './LearningComponents/ButtonState';

function App() {
  return (
    <div className="App">
      <Info titleCard="Inventory Management Systems (ltd.)"/>
      <p>Bare Bones</p>
      <AddItem inputValue="George" fieldItem="Input Item to Add: "/>
      <AddItem inputValue="Joe" fieldItem="Input Item to Add: "/>
      <AddItem />
      <ButtonState />
    </div> 
  );
}
*/

//.hasOwnProperty
//--> Determines whether an object has a property with the specified name.