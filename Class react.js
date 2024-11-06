import React from 'react';
import ReactDOM from 'react-dom';
class Student extends React.Component{
    render(){
        return<h2> Hi, I am Vihaan, a student from Codingal. </h2>;
    }
}
ReactDOM.render(<Student />, document.getElementById('root'));