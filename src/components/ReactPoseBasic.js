import React, { Component } from 'react';
import posed from 'react-pose';

const Box = posed.div({
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
});

export default class ReactPoseBasic extends Component {
  
  state = { isVisible: true };

  componentDidMount() {
    setInterval(() => {
      this.setState({ isVisible: !this.state.isVisible });
    }, 1500);
  }

  render() {
    const { isVisible } = this.state;
    return (
      <div className="ReactPoseBasic">
        <Box className="ReactPoseBasic-box" pose={isVisible ? 'visible' : 'hidden'}>
          <div>Box!!</div>
          <div>I am but a simple <code>&lt;&#47;div&gt;</code></div>
        </Box>
      </div>
    );
  }
}