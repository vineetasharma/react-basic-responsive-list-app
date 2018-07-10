import React, { Component } from 'react';
import icon from '../images/logo.png';
import {styles} from './styles';

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
        const stylesObj= styles(this.props);
          return (
            <div
                style={stylesObj.blockContainer}
                onMouseEnter={this.onMouseEnterHandler}
                onMouseLeave={this.onMouseLeaveHandler}
            >
                <div>
                    <div
                        style={stylesObj.inlineFlex}
                    >
                        <img src={icon} width="50" height="50" style={stylesObj.padding5} />
                        <h3>
                            {this.props.item.title}
                        </h3>
                    </div>
                    <div>
                        <p style={stylesObj.padding5}>
                            {this.props.item.desc}
                        </p>
                    </div>

                </div>

                {
                    this.state.hover ? (<div
                        style={stylesObj.hoverState}
                    >
                        <span style={stylesObj.disabledIcon}>Open</span>
                        <span style={stylesObj.disabledIcon}>Print</span>
                        <span style={stylesObj.activeIcon} onClick={this.delete}>X</span>
                    </div>): <div/>
                }
            </div>
        );
    }
}

export default Block;