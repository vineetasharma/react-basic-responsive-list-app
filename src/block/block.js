import React, { Component } from 'react';

class Block extends Component {
    constructor(){
        super();
        this.state={
            hover: false
        };
    }
    onMouseEnterHandler=()=> {
        this.setState({
            hover: true
        });
        console.log('enter');
    };
    onMouseLeaveHandler=()=> {
        this.setState({
            hover: false
        });
        console.log('leave');
    };
    render() {
        return (
            <div
                style={{
                    margin: 10,
                    backgroundColor: "#a1a1a1",
                    width: this.props.width
                }}
                onMouseEnter={this.onMouseEnterHandler}
                onMouseLeave={this.onMouseLeaveHandler}
            >
                {
                    this.state.hover ? (<div>
                        <span>Open</span>
                        <span>Print</span>
                        <span>Delete</span>
                    </div>): <div/>
                }
                <p style={{"padding":5}}>
                    {this.props.item.title}
                </p>
            </div>
        );
    }
}

export default Block;