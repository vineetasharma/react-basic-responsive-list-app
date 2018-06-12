import React, { Component } from 'react';
import icon from '../images/logo.png';
import backgroundImg from '../images/background.jpeg';

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
                    height: 100,
                    backgroundImage: `url(${backgroundImg})`,
                    backgroundSize: "cover"
                }}
                onMouseEnter={this.onMouseEnterHandler}
                onMouseLeave={this.onMouseLeaveHandler}
            >
                <div>
                    <div
                        style={{
                            display: "inline-flex"
                        }}
                    >
                        <img src={icon} width="50" height="50" style={{"padding":5}} />
                        <h3>
                            {this.props.item.title}
                        </h3>
                    </div>
                    <div>
                        <p style={{"padding":5}}>
                            {this.props.item.desc}
                        </p>
                    </div>

                </div>

                {
                    this.state.hover ? (<div
                        style={{
                            top: -120,
                            zIndex: 1000,
                            position: "relative",
                            left: 5,
                            display: "flex"
                        }}
                    >
                        <span style={{padding: 5, cursor: "not-allowed", margin: 5, borderRadius: 4, backgroundColor: "#b1b1b1", color:"#fff"}}>Open</span>
                        <span style={{padding: 5, cursor: "not-allowed", margin: 5, borderRadius: 4, backgroundColor: "#b1b1b1", color:"#fff"}}>Print</span>
                        <span style={{padding: 5, cursor: "pointer", margin: 5, borderRadius: 4, backgroundColor: "#b1b1b1", color:"#f00"}} onClick={this.delete}>X</span>
                    </div>): <div/>
                }
            </div>
        );
    }
}

export default Block;