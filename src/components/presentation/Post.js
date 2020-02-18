import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import config from '../../config';

class Post extends Component {
  constructor() {
    super();
    this.state = {
      screenWidth: Dimensions.get('window').width,
      liked: false,
    };
  }
  likeToggled() {
    this.setState({
      liked: !this.state.liked,
    });
  }

  render() {
    const imageHeight = Math.floor(this.state.screenWidth * 1.2);
    const imageSelection =
      this.props.item % 2 === 0
        ? 'https://lh3.googleusercontent.com/EG5qo1wiWzfLia2BFrc2r9hYbogdLecAd2JtMCsqPbNGraLivYvWISGY2tvsi-wFOm-j3BqnKH11QELwxhSm6SwH'
        : 'https://lh3.googleusercontent.com/EIo8zQg_yaZvyKAuMPXyZEG8Yf5qrZavknOmj0xWp1TMuRM1voXiPRkzb0AGWG7Ofj8Q3SynNVl1gUrV9GFm0jan0w';
    const imageUri = imageSelection + '=s' + imageHeight + '-c';
    const heartIconColor = this.state.liked ? 'red' : null;
    const heartIconPic = this.state.liked
      ? config.images.heartIconFill
      : config.images.heartIcon;

    return (
      <View style={{flex: 1, width: 100 + '%'}}>
        <View style={styles.userBar}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              style={styles.userPic}
              source={{
                uri:
                  'https://lh3.googleusercontent.com/c2zJDCfT-P_flm-r8aD3k-6VttymwbGZe8DQc2-vUhf1spuudj8FxAQCgEIo0gbHunOG-WwJvB4meOAKniz2TjtF',
              }}
            />
            <Text style={{marginLeft: 10, fontSize: 18}}>Fiona Worthy</Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={{marginBottom: 12, fontSize: 30}}>...</Text>
          </View>
        </View>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => {
            this.likeToggled();
          }}>
          <Image
            style={{width: this.state.screenWidth, height: 425}}
            source={{
              uri: imageUri,
            }}
          />
        </TouchableOpacity>
        <View style={styles.iconBar}>
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => {
              this.likeToggled();
            }}>
            <Image
              style={[
                styles.icon,
                {height: 30, width: 30, tintColor: heartIconColor},
              ]}
              source={heartIconPic}
            />
          </TouchableOpacity>
          <Image
            style={[styles.icon, {height: 30, width: 30}]}
            source={config.images.chatIcon}
          />
          <Image
            resizeMode="stretch"
            style={[styles.icon, {height: 40, width: 30}]}
            source={config.images.arrowIcon}
          />
        </View>

        <View style={styles.commentBar}>
          <Image
            style={[styles.icon, {height: 25, width: 25}]}
            source={config.images.heartIconFill}
          />

          <Text style={{marginTop: 10}}>128 Likes</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  userBar: {
    width: 100 + '%',
    height: config.styleConstants.rowHeight,
    backgroundColor: 'white',
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 30,
    justifyContent: 'space-between',
  },

  userPic: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },

  iconBar: {
    height: config.styleConstants.rowHeight,
    width: 100 + '%',
    borderColor: 'darkgrey',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: 'row',
    alignItems: 'center',
  },

  icon: {
    marginTop: 10,
    marginLeft: 5,
  },

  commentBar: {
    height: config.styleConstants.rowHeight,
    width: 100 + '%',
    marginLeft: 5,
    borderColor: 'darkgrey',
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default Post;
