import React from 'react';
import {View, Text, Button} from 'react-native';

const MainPage = (props) => {

    const pressButton = () => {
        props.navigation.navigate('Embed');
    }

return (
    <View>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', marginVertical: 50}}>
            <Text>Home Screen</Text>
        </View>
        <Button title="Press me"
                color="red" onPress={pressButton} />
    </View>
);
}

export default MainPage;
