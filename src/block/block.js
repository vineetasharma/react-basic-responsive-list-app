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
    delete = () =>{
        this.props.onBlockDelete(this.props.index);
    };
    render() {
        return (
            <div
                style={{
                    margin: 10,
                    backgroundColor: "#a1a1a1",
                    width: this.props.width,
                    height: 100
                }}
                onMouseEnter={this.onMouseEnterHandler}
                onMouseLeave={this.onMouseLeaveHandler}
            >
                <div>
                    <p style={{"padding":5}}>
                        {this.props.item.title}
                    </p>
                    <p style={{"padding":5}}>
                        {this.props.item.desc}
                    </p>
                </div>

                {
                    this.state.hover ? (<div
                        style={{
                            top: -100,
                            zIndex: 1000,
                            position: "relative",
                            left: 5,
                            display: "flex"
                        }}
                    >
                        <span style={{padding: 5, cursor: "not-allowed", margin: 5, borderRadius: 4, backgroundColor: "#b1b1b1", color:"#fff"}}>Open</span>
                        <span style={{padding: 5,    cursor: "not-allowed", margin: 5, borderRadius: 4, backgroundColor: "#b1b1b1", color:"#fff"}}>Print</span>
                        <span style={{padding: 5,    cursor: "pointer", margin: 5, borderRadius: 4, backgroundColor: "#b1b1b1", color:"#fff"}} onClick={this.delete}>X</span>
                    </div>): <div/>
                }
            </div>
        );
    }
}

export default Block;