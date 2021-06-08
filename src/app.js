import { DefineMap, route } from 'can';
import RoutePushstate from 'can-route-pushstate';
import debug from 'can-debug#?./is-dev';

//!steal-remove-start
if(debug) {
	debug();
}
//!steal-remove-end

const AppViewModel = DefineMap.extend("AppViewModel", {
  init() {
    console.log('initial page:', route.data.page);
    console.log('this.routeData:', this.routeData);
    console.log('route:', route);
  },
  env: {
    default: () => ({NODE_ENV:'development'})
  },
  title: {
    default: 'donejs-template'
  },
  routeData: {
    default: () => route.data
  },
  pageComponentModuleName: {
    get() {
      switch (this.routeData.page) {
        case 'contact': return '~/pages/contact/';
        default: return '~/pages/home/';
      }
    }
  },
  pageComponent: {
    get() {
      return steal.import(this.pageComponentModuleName)
          .then(({default: Component}) => {
            return new Component();
          });
    }
  }
});

route.urlData = new RoutePushstate();
route.register("{page}", { page: "home" });
route.data.on( "page", ( ev, newVal, oldVal ) => {
  console.log('oldVal:', oldVal); //-> "recipes"
  console.log('newVal:', newVal); //-> "settings"
} );

export default AppViewModel;
