import { Component } from "react";

class Step3 extends Component{
    render(){

      const {formData, handleChange} = this.props
        return(
            <>
             <h1>Registration Form</h1>
             <label>
              Address: 
              <input
                type='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                />
             </label>

             <label>
              City: 
              <input
                type='text'
                name='city'
                value={formData.city}
                onChange={handleChange}
                />
             </label>

             <label>
              country: 
              <input
                type='text'
                name='email'
                value={formData.country}
                onChange={handleChange}
                />
             </label>
            </>
        )
    }
}
export default Step3;