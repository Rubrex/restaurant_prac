import React, { Component } from 'react';
class Loading extends Component {
    render() {
        return (
            <div className='col-12'>
                <span className="fa fa-spinner fa-3x fa-pulse"></span>
            </div>
        );
    }
}

export default Loading;