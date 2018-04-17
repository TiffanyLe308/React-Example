import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';

import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

const createStoreWithMiddleware = applyMiddleware()(createStore);
const API_KEY = 'AIzaSyDrQsWL0nCDNqPCszbqbbcGQjgoHAfkO4c';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] };

    YTSearch({ key: API_KEY, term: 'surfboards'}, (videos) => {
      this.setState({ videos });
      //full syntax this.setState({ videos: videos })
    });
  }

  render() {
    return (
      <div>
        <h1>Hello Tiffany</h1>
        <SearchBar />
        <VideoList videos={this.state.videos}/>
      </div>
    )
  }
}

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.querySelector('.container'));
