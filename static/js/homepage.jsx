"use strict";

class Homepage extends React.Component {
  render() {
    return (
      <div>
        <p>Welcome!</p>
        <a href="/cards">Cards Page</a>
        <a href="/author">About the author</a>
        <img id="baloonicorn-homepage" src="/static/img/balloonicorn.jpg" 
              alt="image of a Balloonicorn"></img>
      </div>
    );
  }
}

ReactDOM.render(<Homepage />, document.querySelector('#app'));
