import React from "react"

function Info({ titleCard }){

    const infoTitle = "Inventory System"
    const altTitle = "Inventory Management System"
    const showAltTitle = true
  
    return (
        <div>
            <h1>{titleCard}</h1>
          <h1>{showAltTitle ? altTitle : infoTitle}</h1>
          <p>Manage your stuff</p>
        </div>
      )
  }

  export default Info

 /* <-- If you wanna do class based (better for state) instead of functional components 
  import React from "react"

  class  Info extends React.Component{
    constructor(props){ //Using props in a class
        super(props)    //The super construcotr (should not destructre props here)
        console.log(props)
    }

    render(){
        const propTitle = this.props.title //When not in constructor must use
                                            // this. to access props
        
        //OR just do it this way

        const infoTitle = "Inventory System"
        const altTitle = "Inventory Management System"
        const showAltTitle = true

    return (
        <div>
            <h1>{showAltTitle ? altTitle : infoTitle}</h1>
            <p>Manage your stuff</p>
        </div>
        )
    }
  }
  */