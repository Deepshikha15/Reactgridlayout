import React from 'react';
import './App.css';
// import Grid from './Grid';
import List from './List.json';
import GridComponent from './GridComponent';
import MultiSelectDropdown from './MultiSelectDropdown';

const options = [
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven'
]

class App extends React.Component{
  constructor (props){
    super(props)
    this.state = {
      active: []
    }
  }
  onChange (value, key){
    this.setState({
      [key]: value
    })
  }
  onSearch (text){
    let searchOptions = []
    options.map((item) => {
      if (item.indexOf(text) >= 0) {
        searchOptions.push(item)
      }
    })
    this.setState({
      searchOptions
    })
  }
  render() {
    return(
    <div className="App">
      <GridComponent items={List} col={2}/>
      <hr/>
      <div>
        <MultiSelectDropdown id='multi-select-search-example' searchOptions={this.state.searchOptions} onSearch={(value) => this.onSearch(value)} minLength={1} title='Select Option' options={options} active={this.state.active} onChange={(value) => this.onChange(value, 'active')} />
      </div>
    </div>
    )
  };
}

export default App;
