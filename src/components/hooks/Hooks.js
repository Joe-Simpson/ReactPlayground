import React, { useEffect } from 'react';
import { Route, Link } from "react-router-dom";
import StateHook from './StateHook';
import EffectHook from './EffectHook';
import HookRules from './HookRules';
import OtherHooks from './OtherHooks';
import ListLink from '../ListLink';
import styles from './Hooks.module.css';

const Hooks = ({ match }) => {
  function runCodePrettify() {
      let script = document.createElement('script');
      script.type = 'text/javascript';
      script.async = true;

      script.src = 'https://cdn.rawgit.com/google/code-prettify/master/loader/run_prettify.js?skin=sunburst';
      (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
  }

  useEffect(() => {
    runCodePrettify()
  });

  return (
      <div className={styles.container}>
        <Header />
        <Menu match={match}/>
        <Body match={match} />
        <ListLink />
      </div>
  )
}

const Header = () => {
  return (
    <div className={styles.header}>
      <h1>Hooks</h1>
    </div>
  );
}

const Menu = ({ match }) => {
  return (
    <div className={styles.menu}>
      <div className={styles.list}>
        <div className={styles.listitem}><Link to={`${match.url}/state_hook`}>State Hook</Link></div>
        <div className={styles.listitem}><Link to={`${match.url}/effect_hook`}>Effect Hook</Link></div>
        <div className={styles.listitem}><Link to={`${match.url}/hook_rules`}>Hook Rules</Link></div>
        <div className={styles.listitem}><Link to={`${match.url}/other_hooks`}>Other Hooks</Link></div>
      </div>
    </div>
  );
}

const Body = ({ match }) => {
  return (
    <div className={styles.body}>
      <Route path={`${match.path}/state_hook`} component={StateHook} />
      <Route path={`${match.path}/effect_hook`} component={EffectHook} />
      <Route path={`${match.path}/hook_rules`} component={HookRules} />
      <Route path={`${match.path}/other_hooks`} component={OtherHooks} />
      <Route
        path={match.path}
        render= {Introduction}
      />
    </div>
  );
}


const Introduction = (props) => {
  return <div>In this section we learn all about hooks. Infact, this page even uses hooks. At the same time, we learnt to implement nested routing. All of the learning :)</div>;
}


export default Hooks;