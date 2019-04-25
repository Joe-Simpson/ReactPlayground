import React, { Component } from 'react';
import ScrollMenu from 'react-horizontal-scrolling-menu';
import ListLink from './ListLink';
 
// list of items
const list = [
  { name: '' },
  { name: '1' },
  { name: '2' },
  { name: '3' },
  { name: '4' },
  { name: '5' },
  { name: '6' },
  { name: '7' },
  { name: '8' },
  { name: '9' },
  { name: '10' },
  { name: ' ' },
];
 
// One item component
// selected prop will be passed
const MenuItem = ({ text, selected }) => {
  return (
    <div
      className="menu-item"
    >
      {text}
    </div>
  );
};
 
// All items component
// Important! add unique key
export const Menu = (list) => list.map(el => {
  const { name } = el;
 
  return (
    <MenuItem
      text={name}
      key={name}
    />
  );
});
 
 
const Arrow = ({ text, className }) => {
  return (
    <div
      className={className}
    >{text}</div>
  );
};
 
 
const ArrowLeft = Arrow({ text: '<', className: 'arrow-prev' });
const ArrowRight = Arrow({ text: '>', className: 'arrow-next' });
 
class App extends Component {
  state = {
    selected: '1'
  };
  
  onSelect = key => {
    this.setState({ selected: key });
  }
 
  
  render() {
    const { selected } = this.state;
    // Create menu from items
    const menu = Menu(list, selected);
 
    return (
      <div className="App">
        <ScrollMenu
          data={menu}
          arrowLeft={ArrowLeft}
          arrowRight={ArrowRight}
          selected={selected}
          onSelect={this.onSelect}
          scrollToSelected={true}
          dragging={true}
          clickWhenDrag={true}
          // translate={50}
        />
        <ListLink />
      </div>
    );
  }
}

export default App;