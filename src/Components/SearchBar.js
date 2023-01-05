import { useState } from "react";

function SearchBar({ updateSearchParamaters }){

    const [name, setName] = useState("")
    const [price, setPrice] = useState(0)
    const [brand, setBrand] = useState("")
    const [type, setType] = useState("")

    const searchButtonPressed = () => {
        updateSearchParamaters({quotesName:name, 
                        quotesPrice:price, 
                        quotesBrand:brand, 
                        quotesType:type})
        console.log("Name: ", name, "Price: ", price, "Brand:", brand, "Type: ",type)
    }
    /*
    In the searchButtonPressed function, the props.updateSearchParamaters function is being 
    called with an object containing the search criteria as its argument. 
    The object contains keys quotesName, quotesPrice, quotesBrand, and quotesType, 
    which are mapped to the corresponding values of name, price, brand, and type, 
    respectively.
    
    The purpose of this is to pass the search criteria from the SearchBar 
    component to its parent component, App. The updateSearchParamaters prop is a reference to 
    the updateData function in the App component, which is passed down to the 
    SearchBar component as a prop. When the searchButtonPressed function is 
    called, it calls the updateSearchParamaters function, which updates the typedData state 
    in the App component with the search criteria passed as an argument. 
    This causes a re-render of the App component and the search criteria is 
    displayed in the App component.
    
    The naming convention of the keys in the object being passed to 
    props.updateSearchParamaters with the quotes prefix is not necessary, 
    but it is being done to differentiate the keys in the object from the 
    variable names in the SearchBar component.
    */

    return (
        <div className="container">
            <div className="row">
                <h2>Search for an Item</h2>
            </div>
            <div className="row"> 
                <div className="col">
                    <label htmlFor="name-field">Name: </label>
                    <input 
                        className="form-control"
                        /*Bootstrap default style to input fields*/
                        id="name-field" 
                        type="text" 
                        value={name}
                        onChange={(e) => setName(e.target.value)}/>
                </div>

                <div className="col">
                    <label htmlFor="price-field">Max Price: </label>
                    <input 
                        className="form-control"
                        id="price-field" 
                        type="number" 
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}/>
                </div>

                <div className="col">
                    <label htmlFor="brand-field">Brand: </label>
                    <input 
                        className="form-control"
                        id="brand-field" 
                        type="text" 
                        value={brand}
                        onChange={(e) => setBrand(e.target.value)}/>
                </div>

                <div className="col">
                    <label htmlFor="type-field">Type: </label>
                    <input 
                        className="form-control"
                        id="type-field" 
                        type="text" 
                        value={type}
                        onChange={(e) => setType(e.target.value)}/>
                </div>

            </div>
            <div className="row">
                <div className="col-4"/>
                {/*In Bootstrap there are 12 columns in a row by default*/}
                {/*We close the div at the top b/c otherwise it would be pushed to the left*/}
                    <button 
                        type="button" 
                        onClick={searchButtonPressed}
                        className="col-4 btn btn-primary mt-3">
                            Search
                    </button>
            </div>
                {/*<p>Name: {name}</p>  <-- Old Way*/}
                {/*<p>Price: {price}</p>*/}
                {/*<p>Type: {type}</p>*/}
                {/*<p>Brand: {brand}</p>*/}
        </div>
    )
}

export default SearchBar

//type="button" --> so it does not refresh the page by submitting the form

//value={name} --> Make it so that whatever the value of the state is, it will be
//                  be used for the <input/>

//htmlFor vs. for --> No real difference, but React will throw a warning for "for"

//onChange --> Common way to handle user input in React components

//onChange={(e) => setPrice(e.target.value)}
//-->  onChange is being passed a callback function as an event handler. 
//     The callback function takes an event object (e) as an argument and 
//     uses the setName function to update the component's state with the 
//     value of the input element. The value of the input element is accessed 
//     using the e.target.value property of the event object.

//.target.value
//-->   target property of an event object refers to the element that 
//      triggered the event. The value property is a common property of 
//      form elements (such as input, select, and textarea elements) that 
//      represents the current value of the element.
/*ex.
function handleChange(event) {
  console.log(event.target.value);
}

<input type="text" onChange={handleChange} />
*/
//-->   In this example, the handleChange function is an event handler for the 
//      onChange event of an input element. When the user changes the value of 
//      the input element, the handleChange function will be called with an 
//      event object as an argument. The event.target.value expression is used 
//      to access the current value of the input element.
