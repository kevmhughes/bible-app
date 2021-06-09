/* eslint-disable no-return-assign */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/sort-comp */
/* eslint-disable no-use-before-define */
import React, { Component } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCross, faSpinner } from '@fortawesome/free-solid-svg-icons';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      dataURL: 'https://labs.bible.org/api/?passage=random',
      bgColor: '',
    };
  }

  componentDidMount() {
    this.randomColor();
    this.setState({
      loading: false,
      dataURL: 'https://labs.bible.org/api/?passage=random',
    });
  }

  randomColor() {
    const x = Math.floor(Math.random() * 256);
    const y = Math.floor(Math.random() * 256);
    const z = Math.floor(Math.random() * 256);
    const bgColor = `rgb(${x},${y},${z})`;
    this.setState({
      bgColor,
    });
  }

    handleClick = () => {
      window.location.reload(false);
    }

    render() {
      const { loading } = this.state;
      if (loading) return <div><FontAwesomeIcon icon={faSpinner} className="fa-pulse fa-5x" /></div>;
      document.body.style.backgroundColor = this.state.bgColor;

      const styles = {
        backgroundColor: this.state.bgColor,
        float: 'right',
        border: 'none',
      };

      const cross = {
        color: this.state.bgColor,
      };

      return (
        document.body.style.fontSize = '30px',
          <div id="main">
            <div id="verse-container">
              <div id="wrap">
                <iframe id="verse" title="This is a unique title" style={{ width: '100%' }} src={this.state.dataURL} />
              </div>
              <div id="flex-container">
                <button type="button" className="btn btn-primary" onClick={this.handleClick} style={styles}>New verse</button>
                <FontAwesomeIcon icon={faCross} style={cross} className="fa-2x" />
              </div>
            </div>
          </div>
      );
    }
}

export default App;
