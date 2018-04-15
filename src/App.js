import React, { Component } from 'react';
import Spinner from './components/spinner';
import Post from './components/posts';
import axios from 'axios';

class App extends Component {
  state = {
    posts : [],
    loader:false
  }
  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/comments')
    .then(response => {
      this.setState({posts:response.data,loader:true})
    })
  }
  render() {

  let item;
  if(this.state.loader){
    item = this.state.posts.map(data => {
      return (
        <Post name={data.name}/>
        )
    })
  }else {
    item = <Spinner/>
  }
    return (
      <div className="App">
        {item}
      </div>
    );
  }
}

export default App;
