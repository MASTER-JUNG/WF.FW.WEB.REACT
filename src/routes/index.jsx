import { createHashRouter } from 'react-router-dom'
import RootLayout from '../layouts/RootLayout';
import SysUser from './../pages/sys/SysUser';
import { Outlet } from 'react-router-dom';

const router = createHashRouter([
    {
      path: "/",
      element: <RootLayout/>
      ,children: [
        {
          path: "user",
          element: <SysUser/>,
        }
      ]
    }
  ]);

export default router