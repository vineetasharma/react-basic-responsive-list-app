import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Block from "./block/block";

class App extends Component {
    blocks=[{
        title:"Block1",
        desc:"Black1 desc..."
        },
        {
            title:"Block2",
            desc:"Black1 desc..."
        },
        {
            title:"Block3",
            desc:"Black1 desc..."
        },
        {
            title:"Block4",
            desc:"Black1 desc..."
        },
        {
            title:"Block5",
            desc:"Black1 desc..."
        },
        {
            title:"Block6",
            desc:"Black1 desc..."
        }];

    constructor(props) {
        super(props);
        this.state = { width: 0 };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({ width: window.innerWidth });
    }
    getWidthPercent = (width)=>{
        if(!width) return "20%";
        if(width >= 1200) return "20%";
        else if(width < 1200 && width > 992) return "27%";
        else if (width < 992 && width > 768 ) return "44%";
        else return "90%";

    };
  render() {
      const width= this.getWidthPercent(this.state.width);
    return (
      <div className="App">
        <header className="App-header">
          {/*<img src={logo} className="App-logo" alt="logo" />*/}
          <h1 className="App-title">Welcome to List View</h1>
        </header>
       <div style={{display: "flex", flexWrap: "wrap"}}>
           {
               this.blocks.map((block,index)=>{
                   return (<Block key={index} width={width} item={block}/>)
               })
           }
       </div>
      </div>
    );
  }
}

export default App;
