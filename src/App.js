import './App.css';

import React, { Component, useState } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import LoadingBar from 'react-top-loading-bar'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

const App =()=>{

  
 const pageSize = 9;
  const apiKey=process.env.REACT_APP_NEWS_API

  const [progress,setProgress]=useState(0)

  
    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar
            height={3}
            color='#f11946'
            progress={progress}
          />
          <Switch>
            <Route path="/business"> <News setProgress={setProgress}  apiKey={apiKey} key="business" pageSize={pageSize} country='in' category="business" /></Route>
            <Route path="/entertainment"> <News setProgress={setProgress}  apiKey={apiKey} key="entertainment" pageSize={pageSize} country='in' category="entertainment" /></Route>
            <Route path="/general"> <News setProgress={setProgress}  apiKey={apiKey} key="general" pageSize={pageSize} country='in' category="general" /></Route>
            <Route path="/health"> <News setProgress={setProgress}  apiKey={apiKey} key="health" pageSize={pageSize} country='in' category="health" /></Route>
            <Route path="/science"> <News setProgress={setProgress}  apiKey={apiKey} key="science" pageSize={pageSize} country='in' category="science" /></Route>
            <Route path="/sports"> <News setProgress={setProgress}  apiKey={apiKey} key="sports" pageSize={pageSize} country='in' category="sports" /></Route>
            <Route path="/technology"> <News setProgress={setProgress}  apiKey={apiKey} key="technology" pageSize={pageSize} country='in' category="technology" /></Route>
          </Switch>
        </Router>
      </div>
    )
  }


export default App;

























// import './App.css';

// import React, { Component } from 'react'
// import Navbar from './Components/Navbar';
// import News from './Components/News';
// import LoadingBar from 'react-top-loading-bar'

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
// } from "react-router-dom";

// export default class App extends Component {

  
//   pageSize = 9;
//   apiKey=process.env.REACT_APP_NEWS_API

//   state = {
//     progress: 0
//   }

//   setProgress = (progress) => {
//     this.setState({ progress: progress })
//   }

//   render() {
//     return (
//       <div>
//         <Router>
//           <Navbar />
//           <LoadingBar
//             height={3}
//             color='#f11946'
//             progress={this.state.progress}
//           />
//           <Switch>
//             <Route path="/business"> <News setProgress={setProgress}  apiKey={apiKey} key="business" pageSize={pageSize} country='in' category="business" /></Route>
//             <Route path="/entertainment"> <News setProgress={setProgress}  apiKey={apiKey} key="entertainment" pageSize={pageSize} country='in' category="entertainment" /></Route>
//             <Route path="/general"> <News setProgress={setProgress}  apiKey={apiKey} key="general" pageSize={pageSize} country='in' category="general" /></Route>
//             <Route path="/health"> <News setProgress={setProgress}  apiKey={apiKey} key="health" pageSize={pageSize} country='in' category="health" /></Route>
//             <Route path="/science"> <News setProgress={setProgress}  apiKey={apiKey} key="science" pageSize={pageSize} country='in' category="science" /></Route>
//             <Route path="/sports"> <News setProgress={setProgress}  apiKey={apiKey} key="sports" pageSize={pageSize} country='in' category="sports" /></Route>
//             <Route path="/technology"> <News setProgress={setProgress}  apiKey={apiKey} key="technology" pageSize={pageSize} country='in' category="technology" /></Route>
//           </Switch>
//         </Router>
//       </div>
//     )
//   }
// }







