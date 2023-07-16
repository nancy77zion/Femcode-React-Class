import { Component } from "react";

class Step1 extends Component{
    render(){

      const {formData, handleChange} = this.props
        return(
            <>
             <h1>welcome to femcode</h1>
             <h1>Register to join the next cohort</h1>

             <label>
              Firstname: 
                <input type='text'
                  name='firstname'
                  value={formData.firstname}
                  onChange={handleChange}
                  />
             </label>

             <label>
              Lastname: 
                <input type='text'
                  name='lastname'
                  value={formData.lastname}
                  onChange={handleChange}
                  />
             </label>
            </>
        )
    }
}
export default Step1;