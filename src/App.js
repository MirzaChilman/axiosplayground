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
    // ambil data dari url
    axios.get('https://jsonplaceholder.typicode.com/comments')
    .then(response => { // then setelah datanya dapat maka ubah state
      this.setState({posts:response.data,loader:true})
    })
  }
  render() {

  let item;//initialisasi variabel 
  if(this.state.loader){//kalau loader true maka mapping data dan 
    //render component Post
    item = this.state.posts.map(data => {
      return (
        <Post name={data.name}/>
        )
    })
  }else {//kalau loader false maka render component spinner
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
