import React, { Component } from 'react';
import { 
    View, 
    Text, 
    Image, 
    StyleSheet, 
    Dimensions, 
    TouchableOpacity 
} from 'react-native'
import config from '../../config';
import { PostFeed } from '../container';

class InstagramClone extends Component {
    render() {
        return(
            <View style={{flex: 1, width: 100+"%"}}>
                <View style={styles.tempNav}>
                    <Text style={{fontSize: 30, fontFamily: 'sans-serif-thin'}}>Instagram</Text>
                </View>
                <PostFeed />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    tempNav: {
        width: 100+"%",
        height: config.styleConstants.rowHeight,
        backgroundColor: "ghostwhite",
        borderBottomColor: "darkgrey",
        borderBottomWidth: StyleSheet.hairlineWidth,
        justifyContent: "center",
        alignItems: "center"
    }
});

export default InstagramClone;