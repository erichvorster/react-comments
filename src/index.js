import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';

const App = () => {
    return (
    <div className ="ui container comments">
        <CommentDetail author="Tim" time="Today at 4:45PM" comment="This is cool" image={faker.image.image()}/>
    </div>
    )};

ReactDOM.render(<App/>, document.querySelector('#root'));

