import React, { Fragment, useState, useRef } from 'react';
import { connect } from 'react-redux';

//This sample starts using React Hooks. 
//Use redux for master state/store for the entire project. 
//Use useState for internal states. 
const App = ({appName}) => {
  const [title, setTitle] = useState("Main App");
  //Use Ref
  const titleInput = useRef(null);
  return (
    <Fragment>
      <h1>{appName}</h1>
      <div className="container">
        <h2>{ title }</h2>
        <div className="form-group">
          <input 
            type="text"
            className="form-control"
            placeholder="New title"
            ref={titleInput}
          />
        </div>
        <button onClick={() => setTitle(titleInput.current.value)}>Update Title</button>
      </div>
    </Fragment>
  )
};

const mapStateToProps = ({appName}) => {
  return {
    appName
  }
}

export default connect(mapStateToProps)(App);