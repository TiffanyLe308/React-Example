import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import ReduxPromise from 'redux-promise';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';

import Book from './components/book';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import WeatherForecast from './components/weather_forecast';
import Posts from './components/posts';
import PostsNew from './components/postsnew';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);
const API_KEY = 'AIzaSyDrQsWL0nCDNqPCszbqbbcGQjgoHAfkO4c';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('moissanite');
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
        <WeatherForecast />
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
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/posts/new" component={PostsNew} />
          <Route path="/posts" component={Posts} />
          <Route path="/" component={App} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
