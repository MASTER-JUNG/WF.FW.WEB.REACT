import './styles/App.scss';
import router from './routes';

import { RouterProvider } from 'react-router-dom';
const App = () => {
  return (
      <RouterProvider router={router} />
  )
}

export default App
