import React from 'react';
import ReactDOM from 'react-dom';
import HemisphereDisplay from './HemisphereDisplay';

class App extends React.Component {

  // constructor function...
  // constructor(props) {
  //   super(props)
  //   this.state = { latitude: null, errorMessage: '' }
  // }

  state = { latitude: null, errorMessage: '' }

  componentDidMount() {
		window.navigator.geolocation.getCurrentPosition(
      // success callback
      (position) => {
				this.setState({ latitude: position.coords.latitude })
			},
      // failure callback
      (error) => {
				this.setState({ errorMessage: error.message })
			}
		);
	}

//   render() {
//     return(
//       <div>
//         {this.state.latitude}
//         {this.state.errorMessage}
//       </div>
//      )
//     }
//   }

  render() {
		if(this.state.errorMessage && !this.state.latitude) {
			return <div> {this.state.errorMessage} </div>
		}
  
    if(!this.state.errorMessage && this.state.latitude) {
      // return <div> {this.state.latitude}</div>
			return <div> <HemisphereDisplay latitude={this.state.latitude} /> </div>
		}

		else {
			return <div>Loading...</div>
		}
	}
}

ReactDOM.render(
	<App />,
	document.querySelector('#root')
)

