/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

'use strict';

var React = require('react-native');

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
} = React;


var MovieViewer = React.createClass({
  getInitialState: function() {
    return {
      movies: null,
    };
  },

  componentDidMount: function() {
    this.fetchData();
  },

  fetchData: function() {
    fetch('http://clickdev.me/dl/films.json')
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          movies: responseData.movies,
        });
      })
      .done();
  },

  render: function() {
    return (
      <View style={styles.container}>
        <Image
          source={{uri: 'https://upload.wikimedia.org/wikipedia/en/0/01/Whiplash_poster.jpg'}}
          style={styles.thumbnail}
        />
        <Text style={styles.welcome}>
          Title
        </Text>
      </View>
    );
  }
});



var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    flexDirection: 'row',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  thumbnail: {
    width: 53,
    height: 81,
  }
});

AppRegistry.registerComponent('MovieViewer', () => MovieViewer);
