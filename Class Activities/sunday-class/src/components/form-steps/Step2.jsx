import { Component } from "react";

class Step2 extends Component{
    render(){

      const {formData, handleChange} = this.props
        return(
            <>
             <h1>Registration Form</h1>
             <label>
              Email: 
              <input
                type='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                />
             </label>
            </>
        )
    }
}
export default Step2;