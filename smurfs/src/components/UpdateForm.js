import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSmurfs, saveSmurf } from '../actions';

class UpdateForm extends Component {
  state = {
    name: '',
    age: '',
    height: ''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  componentDidMount = () => {
    const { name, age, height } = this.props.smurf
    this.setState({
      name, age, height
    })
  }
  render() {
    const { updatingSmurf, getSmurfs, saveSmurf } = this.props
    const { id } = this.props.smurf
    const { name, age, height } = this.state
    return (
      <div>
        { updatingSmurf &&
        <div>
        <input name='name' value={name} onChange={e => this.handleChange(e)}/>
        <input name='age' value={age} onChange={e => this.handleChange(e)}/>
        <input name='height' value={height} onChange={e => this.handleChange(e)}/>
        <button onClick={() => saveSmurf(id, this.state)}>Save</button>
        <button onClick={() => getSmurfs()}>Cancel</button>
        </div>
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { smurfs, updatingSmurf } = state
  return {
    smurf: smurfs.filter(smurf => smurf.isUpdating)[0],
    updatingSmurf
  }
}

export default connect(mapStateToProps, { getSmurfs, saveSmurf })(UpdateForm);
