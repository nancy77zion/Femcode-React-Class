import './index.css';
import {Component} from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import SuccessPage from './components/SuccessPage';
import Step1 from './components/form-steps/Step1'


class App extends Component {

  state = {
    step: 1,
    FormData: {
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      address: '',
      city: '',
      country: ''
    },
  }

  handleChange = (e) => {
    const {name,value} = e.target;
    this.setState((prev)=>({
      FormData: {
        ...prev.FormData,
        [name]:value,
      },
    }));

    nextStep = () => {
      this.setState((prev)=>({
        step: prev.step + 1
      }));

    nextStep = () => {
      this.setState((prev)=>({
        step: prev.step - 1
      }));

  }

  render(){
    const {step,formData} = this.state
    return(
      <Router>
        <h1>Welcome to Femcode Africa</h1>
        <p>React Bootcamp to start tomorrow</p>
        <Link to = "/register">Click here to Register</Link>
        <Routes>
          <Route exact path = "/register" Component={Step1} />
          <Route path = "/step2" Component={Step2} />
          <Route path = "/step3" Component={Step3} />
          <Route path= "/success" Component = {SuccessPage} />
        </Routes>

          {
            step !==
          }
          
      </Router>
    )
  }
}

export default App;
// function App() {
//   return (
//     <div className="App">
//       <h1>multi step form</h1>
//     </div>
//   );
// }

// export default App;