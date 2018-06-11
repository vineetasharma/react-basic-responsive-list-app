import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Block from "./block/block";

const  blocks=[{
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
class App extends Component {

    constructor(props) {
        super(props);
        this.state = { width: 0, blocks: blocks };
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
    onBlockDelete = (index) =>{
      const blocks=this.state.blocks;
      blocks.splice(index,1);
      this.setState({blocks});
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
               this.state.blocks.map((block,index)=>{
                   return (<Block key={index} index={index} onBlockDelete={this.onBlockDelete} width={width} item={block}/>)
               })
           }
       </div>
      </div>
    );
  }
}

export default App;
