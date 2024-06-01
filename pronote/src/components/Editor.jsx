import { Component } from 'react';
import './Editor.css';

class Editor extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.refresh = this.refresh.bind(this);
    this.state = {
      value: ''
    };
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  refresh() {
    this.setState({ value: '' });
  }

  render() {
    return (
      <div className="container">
        <div className="input">
          <h3 style={{marginLeft: '10px',color: 'white'}}>Input</h3>
          <div className="input-text-container">
            <textarea
              className="input-text"
              onChange={this.handleChange}
              value={this.state.value}
            />
            <button className="refresh-button" onClick={this.refresh}>
              <img src="https://cdn-icons-png.flaticon.com/128/10924/10924396.png" alt="Refresh" />
            </button>
          </div>
        </div>
        <div className="output">
          <h3  style={{marginLeft: '10px',color: 'white'}}>Pro Note</h3>
          <div className="output-text">{this.state.value}</div>
        </div>
      </div>
    );
  }
}

export default Editor;