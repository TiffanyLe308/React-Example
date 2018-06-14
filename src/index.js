import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';

import Book from './components/app';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const createStoreWithMiddleware = applyMiddleware()(createStore);
const API_KEY = 'AIzaSyDrQsWL0nCDNqPCszbqbbcGQjgoHAfkO4c';

class Video extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('surfboard');
  }

  videoSearch(term) {
    YTSearch({ key: API_KEY, term: term}, (videos) => {
      // this.setState({ videos });
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
       });
    });
  }

  render() {
    const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);

    return (
      <div>
        <h1>Hello Tiffany</h1>
        <Book />
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={(selectedVideo) => this.setState({selectedVideo})}
          videos={this.state.videos}/>
      </div>
    )
  }
}

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>    
    <Video />
  </Provider>
  , document.querySelector('.container'));
