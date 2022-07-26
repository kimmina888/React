import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
// import Library from './D25/Library'
// import Clock from './D26/Clock'
// import MyComponent from './D26/MyComponent';
// import TodayPlan from './D26/TodaysPlan'
import list from './D26/list'
// import Book from './D25/Book'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App name = 'react'/> */}
    {/* <Library></Library> */}
    {/* setInterval(() => {
      ReactDOM.render(<React.StrictMode<><Clock></Clock></>,document.getElementById("root")); 
    }, 1000); */}
    {/* <MyComponent></MyComponent>
    <TodayPlan></TodayPlan> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitalss
reportWebVitals();
