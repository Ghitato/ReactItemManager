import { PropTypes } from "prop-types"

function AddItem({ inputValue, fieldItem }){
    //Destrucutring props is best when there are only a few props

    const defaultInput = "Default Item"

    //const propValue = props.value <-- Valid way of doing it but destructuring is faster
    // -->  The ."inputValue" MUST match the component "inputValue"=
  
      return(
        <form>
          <label for="text-form">{fieldItem}</label>
          <input type="text" value={inputValue} id="text-form"/>
        </form>
      )
  }

  export default AddItem

  //props are READ ONLY values
  // --> CANNOT change a property from within the component it is being passed to
  // --> ex. props.text = "Hello" is invalid if placed in AddItem

  AddItem.defaultProps = {
    inputValue: "Input an Item Here",
    fieldItem: "Add Item: "
  }

  //If no values are assigned to the parent, then these values will be added
  //    by default by using key:value pairs

  AddItem.propTypes = {
    inputValue: PropTypes.string,
    fieldItem: PropTypes.string
  }

  //Would pop up a warning in the console saying that the wrong prop type was passed