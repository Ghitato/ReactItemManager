import React from 'react'

function  ItemsDisplay(props){

    return (<>
            <div className="text-center fw-bold">
                Added Items Table
            </div>
            <table className="table table-striped">
            <thead> 
                <tr>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Price</th>
                <th scope="col">Brand</th>
                <th scope="col">Type</th>
                </tr>
            </thead>
            <tbody>
                {props.items.map((item) => {
                return (
                    <tr>
                    <td>ID: {item.id}</td>
                    <td>Name: {item.quotesName}</td>
                    <td>Price: {item.quotesPrice}</td>
                    <td>Brand: {item.quotesBrand}</td>
                    <td>Type: {item.quotesType}</td>
                    </tr>
                )
                })}
            </tbody>
            </table>
        </>
    )
} 

export default ItemsDisplay

/*item will be equal to one of the items in items*/
/*.map() takes all the items in a list and maps them to a function
then returns*/