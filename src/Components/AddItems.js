import { useState } from "react";

function AddItems({ addItem }){

    const [name, setName] = useState("")
    const [price, setPrice] = useState(0)
    const [brand, setBrand] = useState("")
    const [type, setType] = useState("")

    const addItemButtonPressed = () => {
        addItem({quotesName:name, 
                        quotesPrice:price, 
                        quotesBrand:brand, 
                        quotesType:type
                })
        console.log("Name: ", name, "Price: ", price, "Brand:", brand, "Type: ",type)
        setName("")
        setPrice(0)
        setBrand("")
        setType("")
        //Resetting the input fields 
    }

    return (
        <div className="container">
            <div className="row ">
                <h2>Add an Item</h2>
            </div>
            <div className="row">
            {/*Can just use one className="row" isntead of 4 like in SearchBar.js*/}
            {/*Test*/}
            {/*Second Test for the Second Commit*/}
                <label htmlFor="name-field">Name: </label>
                <input 
                    className="form-control"
                    id="name-field" 
                    type="text" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}/>

                <label htmlFor="price-field">Price: </label>
                <input 
                    className="form-control"
                    id="price-field" 
                    type="number" 
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}/>

                <label htmlFor="brand-field">Brand: </label>
                <input 
                    className="form-control"
                    id="brand-field" 
                    type="text" 
                    value={brand}
                    onChange={(e) => setBrand(e.target.value)}/>

                <label htmlFor="type-field">Type: </label>
                <input 
                    className="form-control" 
                    id="type-field" 
                    type="text" 
                    value={type}
                    onChange={(e) => setType(e.target.value)}/>

                <div className="row mt-3">
                    <div className="col-4"/>
                        <button 
                            type="button" 
                            onClick={addItemButtonPressed}
                            className="col-4 btn btn-primary mt-3">
                                Add Item
                        </button> 
                </div>
                
            </div>
        </div>
    )
}

export default AddItems