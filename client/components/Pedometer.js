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
    theme: "",
  };

  componentDidMount() {
    this._subscribe();
  }

  componentWillUnmount() {
    this._unsubscribe();
  }

  _subscribe = () => {
    this._subscription = Pedometer.watchStepCount((result) => {
      this.setState({
        currentStepCount: result.steps,
      });
    });

    Pedometer.isAvailableAsync().then(
      (result) => {
        this.setState({
          isPedometerAvailable: String(result),
        });
      },
      (error) => {
        this.setState({
          isPedometerAvailable: "Could not get isPedometerAvailable: " + error,
        });
      }
    );

    const end = new Date();
    const start = new Date();
    start.setDate(end.getDate() - 1);
    Pedometer.getStepCountAsync(start, end).then(
      (result) => {
        this.setState({
          pastStepCount: result.steps,
          theme: this.props.route.params.theme,
        });
      },
      (error) => {
        this.setState({
          pastStepCount: "Could not get stepCount: " + error,
        });
      }
    );
  };

  _unsubscribe = () => {
    this._subscription && this._subscription.remove();
    this._subscription = null;
  };

  render() {
    console.log(this.state.theme);
    if (this.state.theme === "dark") {
      return (
        <View style={styles.container}>
          <Text style={styles.textDarkHead}>Pedometer {"\n"}</Text>
          <Text style={styles.textDark}>
            Steps taken in the last 24 hours: {this.state.pastStepCount}
          </Text>
          <Text style={styles.textDark}>
            Steps taken while this app was open: {this.state.currentStepCount}
          </Text>
          <Text style={styles.textDark}>
            Pedometer Availability: {this.state.isPedometerAvailable}
          </Text>
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <Text style={styles.textLightHead}>Pedometer {"\n"}</Text>
          <Text>
            Steps taken in the last 24 hours: {this.state.pastStepCount}
          </Text>
          <Text>Walk! And watch this go up: {this.state.currentStepCount}</Text>
          <Text>
            Pedometer.isAvailableAsync(): {this.state.isPedometerAvailable}
          </Text>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textDark: {
    color: "white",
  },
  textDarkHead: {
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
    fontSize: 35,
  },
  textLightHead: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 35,
  },
});
