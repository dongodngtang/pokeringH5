import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import './index.scss';

@connect(({Home}) => ({
  ...Home,
}))
export default class Home extends Component {
  config = {
    navigationBarTitleText: 'Home',
  };

  componentDidMount = () => {

  };

  render() {
    return (
      <View className="Home-page">
        Home
      </View>
    )
  }
}
