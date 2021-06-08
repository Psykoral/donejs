import { DefineMap, route, RoutePushstate } from 'can';
import debug from 'can-debug#?./is-dev';
import State from './state';

//!steal-remove-start
if(debug) {
	debug();
}
//!steal-remove-end

const AppViewModel = DefineMap.extend("AppViewModel", {
  env: {
    default: () => ({NODE_ENV:'development'})
  },
  title: {
    default: 'donejs-template'
  },
  state: { default() { return State } },
  routeData: { default() { return State.routeData } },
  pageComponent: { default() { return State.pageComponent }},
});

export default AppViewModel;
