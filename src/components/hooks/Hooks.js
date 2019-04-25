import React from 'react';
import StateHook from './StateHook';
import EffectHook from './EffectHook';
import HookRules from './HookRules';
import OtherHooks from './OtherHooks';
import ListLink from '../ListLink';

const Hooks = (props) => {
  return (
    <div>
    	<h1>Hooks</h1>
      <StateHook />
      <EffectHook />
      <HookRules />
      <OtherHooks />
  		<ListLink />
    </div>
  )
}

export default Hooks;