import React from "react";
import { Pedometer } from "expo-sensors";
import { StyleSheet, Text, View } from "react-native";

export default class TabThree extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    isPedometerAvailable: "checking",
    pastStepCount: 0,
    currentStepCount: 0,
    theme: this.props.theme
  };

  componentDidMount() {
    this._subscribe();
  }

  componentWillUnmount() {
    this._unsubscribe();
  }

  _subscribe = () => {
    this._subscription = Pedometer.watchStepCount(result => {
      this.setState({
        currentStepCount: result.steps
      });
    });

    Pedometer.isAvailableAsync().then(
      result => {
        this.setState({
          isPedometerAvailable: String(result)
        });
      },
      error => {
        this.setState({
          isPedometerAvailable: "Could not get isPedometerAvailable: " + error
        });
      }
    );

    const end = new Date();
    const start = new Date();
    start.setDate(end.getDate() - 1);
    Pedometer.getStepCountAsync(start, end).then(
      result => {
        this.setState({ pastStepCount: result.steps });
      },
      error => {
        this.setState({
          pastStepCount: "Could not get stepCount: " + error
        });
      }
    );
  };

  _unsubscribe = () => {
    this._subscription && this._subscription.remove();
    this._subscription = null;
  };

  render() {
    if (this.state.theme === "dark") {
      return (
        <View style={styles.container}>
          <Text style={styles.textDark}>
            Pedometer.isAvailableAsync(): {this.state.isPedometerAvailable}
          </Text>
          <Text style={styles.textDark}>
            Steps taken in the last 24 hours: {this.state.pastStepCount}
          </Text>
          <Text style={styles.textDark}>
            Walk! And watch this go up: {this.state.currentStepCount}
          </Text>
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <Text>
            Pedometer.isAvailableAsync(): {this.state.isPedometerAvailable}
          </Text>
          <Text>
            Steps taken in the last 24 hours: {this.state.pastStepCount}
          </Text>
          <Text>Walk! And watch this go up: {this.state.currentStepCount}</Text>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center"
  },
  textDark: {
    color: "white"
  }
});
