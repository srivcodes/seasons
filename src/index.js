
// const App = () => {
//     window.navigator.geolocation.getCurrentPosition(
//         (position) => console.log(position),
//         (reject) => console.log(reject)
//     );
//     return <div>Weather App</div>
// };

import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./spinner"

if (module.hot) {
  module.hot.accept();
}

class App extends React.Component {
  state = { lat: null, errorMessage: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }

  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }

    return <Spinner  message="Please Accept Location Request !" />;
  }

  render() {
    return <div className = "blackBorder">
      {this.renderContent()}
    </div>
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
