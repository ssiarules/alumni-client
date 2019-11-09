import React,{ Component } from 'react';
import './App.css';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div className="App" >
        <h1>Irvington High School Alunni Platform</h1>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return ({
    alumnus: state.mainAlumniReducer.alumnus
  })
}


/* Single Reducer use this formate
const mapStateToProps = (state) => {
  return ({
    alumnus: state.alumnus
  })
}
*/

export default connect(mapStateToProps)(App);
