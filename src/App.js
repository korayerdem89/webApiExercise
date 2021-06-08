import axios from 'axios';
import React from 'react';
import {SafeAreaView, View, Text, Button} from 'react-native';

const App = () => {
  function fetchData() {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(console.log('response'))
      .catch(error => console.log('alaarm alaarm'));
  }
  return (
    <SafeAreaView>
      <View>
        <Text>Hello World!</Text>
        <Button title="Fetch Data" onPress={fetchData} />
      </View>
    </SafeAreaView>
  );
};

export default App;
