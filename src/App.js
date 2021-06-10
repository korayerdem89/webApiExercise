import React, {useState}  from 'react';
import {SafeAreaView, View, Text, Button, Flatlist} from 'react-native';
import axios from 'axios';
import UserCard from './components/UserCard/UserCard';

const App = () => {

  const [userList, setUserList] = useState([]);

async function fetchData(){
  const response = await axios.get(
    'https://jsonplaceholder.typicode.com/users',
  );
  console.log(response);
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
