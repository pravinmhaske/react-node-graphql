import React from 'react';
import './App.scss';
import { Provider as ReduxProvider } from 'react-redux'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import { ThemeProvider } from '@material-ui/styles';
import theme from './theme';
import { MuiThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
// const theme = createMuiTheme();
// import configureStore from './app/redux/configureStore';
// import { About, Header, PageNotFound, Home } from './app/components'
// import Employee from './app/components/employee/Employee';
// const store = configureStore();

const App = () => {
  return (
    <MuiThemeProvider theme={theme}>
    pravin
    <Button variant="contained" color="primary" href="#contained-buttons">
    Link
  </Button>
    </MuiThemeProvider>
  );
  // return (
  //   <div className="App">
  //     pravin
  //     {/* <div className="container">
  //       <div className="row">
  //         <div className="col-md-12">
  //           <ReduxProvider store={store}>
  //             <Router>
  //               <Header />
  //               <div>
  //                 <Switch>
  //                   <Route exact path="/" component={Home} />
  //                   <Route path="/about" component={About} />
  //                   <Route path="/employee" component={Employee} />
  //                   <Route component={PageNotFound} />
  //                 </Switch>
  //               </div>
  //             </Router>
  //           </ReduxProvider>



  //         </div>
  //       </div>
  //     </div> */}
  //   </div>
  // );
}
export default App;
//my routes will be here
