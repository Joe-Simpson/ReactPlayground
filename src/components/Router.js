import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Welcome from './Welcome';
import List from './List';
import RenderingElements from './RenderingElements';
import FunctionComponents from './FunctionComponents';
import ClassComponents from './ClassComponents';
import HandlingEvents from './HandlingEvents';
import ConditionalRendering from './ConditionalRendering';
import ListKeys from './ListKeys';
import Forms from './Forms';
import LiftingState from './LiftingState';
import ReactScrollbar from './ReactScrollbar';
import ReactPose from './ReactPose';
import NumberScrollInput from './NumberScrollerInput';
import ReactHorizontalScrollInput from './ReactHorizontalScrollMenu';
import TreeView from './TreeView';
import HooksState from './HooksState';

const Router = (props) => {
  return (
    <BrowserRouter>
    	<Switch>
    		<Route exact path="/" component={Welcome} />
    		<Route exact path="/list" component={List} />
            <Route exact path="/rendering_elements" component={RenderingElements} />
            <Route exact path="/function_components" component={FunctionComponents} />
            <Route exact path="/class_components" component={ClassComponents} />
            <Route exact path="/handling_events" component={HandlingEvents} />
            <Route exact path="/conditional_rendering" component={ConditionalRendering} />
            <Route exact path="/lists_keys" component={ListKeys} />
            <Route exact path="/forms" component={Forms} />
            <Route exact path="/lifting_state" component={LiftingState} />
            <Route exact path="/react_scrollbar" component={ReactScrollbar} />
            <Route exact path="/react_pose" component={ReactPose} />
            <Route exact path="/number_scroll_input" component={NumberScrollInput} />
            <Route exact path="/react_horizontal_scroll_input" component={ReactHorizontalScrollInput} />
            <Route exact path="/tree_view" component={TreeView} />
            <Route exact path="/hooks_state" component={HooksState} />
    	</Switch>
    </BrowserRouter>
  )
}

export default Router;
