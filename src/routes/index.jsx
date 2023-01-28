import { createBrowserRouter } from 'react-router-dom';
import { ItemListContainer } from '../components';
import App from '../App';

export const router = createBrowserRouter([
  {
    path: '/', 
    element: <App />, 
    children: [
      { path: '/category', element: <ItemListContainer /> }
    ]
  },


]);