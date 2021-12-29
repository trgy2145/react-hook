import React from 'react'

class ClassComponent extends React.Component {
  constructor(props){
    super(props);
    this.state ={count :0}
  }
  İncEvent =() =>{
    this.setState({count : this.state.count+1})
  }
  componentDidMount(){
    console.log('bu componenti mount etmez sadece component mount oldugunde ilk celısır ve ilk yaptırmak istediklerimizi buraya yazabiliriz')
  }
  componentDidUpdate(){
    console.log("component update oldu");
  }
  componentWillUnmount(){
    console.log("component was done unmounted");
  }

  render() {
    return (
      <div className="class">
        <h2>Class Component</h2>
        <h3>count : {this.state.count}</h3>
        <button onClick={this.İncEvent}>increase</button>
      </div>
    )
  }
}

export default ClassComponent
