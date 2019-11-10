import React,{ Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { getAlumnus } from './actions'

class App extends Component {

  componentDidMount() {
    this.props.getAlumnus()
  }


  render() {
    const alumniList = this.props.alumnus.map((alumni,i) => <li key={ i }>Name: { alumni.name }</li>)
    return (
      <div className="App" >
        <h1>Irvington High School Alunni Platform</h1>
        <ul>
          { alumniList }
        </ul>
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

export default connect(mapStateToProps,{ getAlumnus })(App);
