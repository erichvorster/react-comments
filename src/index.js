import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
    <div className ="ui container comments">
        <ApprovalCard>
           <CommentDetail author="Tim" time="Today at 4:45PM" comment="This is cool" image={faker.image.image()}/>
        </ApprovalCard>
    </div>
    )};

ReactDOM.render(<App/>, document.querySelector('#root'));

