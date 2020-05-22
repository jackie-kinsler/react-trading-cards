"use strict";

class About extends React.Component {
  render() {
    return (
      <div>
        <p>About the Author!</p>
        <img id="author-img" src="/static/img/author.png" 
              alt="image of the author, a marshmallow"></img>
      </div>
    );
  }
}

ReactDOM.render(<About />, document.querySelector('#author'));
