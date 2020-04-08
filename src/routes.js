import SingleArticle from './components/views/SingleArticle/SingleArticle'

import Home from './components/views/Home';
import Results from './components/Sections/Results/Results'
const routes = [
  { key:'1', path: '/', exact: true, name: 'Home', component:Home },
  { key:'2', path: '/:query', exact: true, name: 'Result', component:Results },
  { key:'3', path: '/article/:id', exact: true, name: 'SingleArticle', component:SingleArticle },
];

export default routes;