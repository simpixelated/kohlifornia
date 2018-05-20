import ReactGA from 'react-ga';
ReactGA.initialize('UA-119389354-1');

exports.onRouteUpdate = (state, page, pages) => {
  ReactGA.pageview(state.pathname);
};