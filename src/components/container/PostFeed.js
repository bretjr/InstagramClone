import React, {Component} from 'react';
import {Post} from '../presentation';
import {FlatList} from 'react-native';

class PostFeed extends Component {
  render() {
    return (
      <FlatList
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
        renderItem={item => <Post key={item.index} item={item.item} />}
        keyExtractor={item => item.index}
      />
    );
  }
}

export default PostFeed;
