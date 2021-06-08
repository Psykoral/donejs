import { DefineMap, Observation, route, RoutePushstate } from 'can';

const State = DefineMap.extend("State", {
  env: {
    default: () => ({NODE_ENV:'development'})
  },
  title: {
    default: 'State'
  },
  routeData: { default() { return route.data } },
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
  },
  init() {
    console.log('initial page:', this.routeData.page);
    
    this.listenTo(new Observation(() => this.routeData.page), (newVal) => {
      console.log('init: new value for page route:', newVal);
    });
  }
});

route.urlData = new RoutePushstate();
route.register("{page}", { page: "home" });

export default new State();
