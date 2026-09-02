import 'aos/dist/aos.css';
import { createBrowserRouter, RouterProvider } from 'react-router';
import Layout from './layout/Layout';
import { lazy, Suspense } from 'react';
import { CircularProgress } from '@mui/material';
const Home = lazy(() => import('./pages/Home'));
const Basket = lazy(() => import('./pages/Basket'));
const NotFound = lazy(() => import('./pages/NotFound'));
const Sale = lazy(() => import('./pages/Sale'));
const Sale_Info = lazy(() => import('./pages/Sale_Info'));
const Frame = lazy(() => import('./pages/Frame'));
const Frame32 = lazy(() => import('./pages/Frame32'));
const Contacts = lazy(() => import('./pages/Contacts'));
const Cart5 = lazy(() => import('./pages/Cart5'));
const Cart8 = lazy(() => import('./pages/Cart8'));
const RegiterForm = lazy(() => import('./pages/RegisterForm'));
const ResetPasswordForm = lazy(() => import('./pages/ResetPasswordForm'));
const ResetPasswordSucces = lazy(() => import('./pages/ResetPasswordSuccess'));
const Blog = lazy(() => import('./pages/BlogApp'));
const KidsFurnitureCatalog = lazy(() => import('./pages/KidsFurnitureCatalog'));
const CatalogWithFilters = lazy(() => import('./pages/CatalogWithFilters'));
const ProductDetail = lazy(() => import('./pages/ProductDetail'));
const SearchPage = lazy(() => import('./pages/SearchPage'));

export default function App() {
  let router = createBrowserRouter([
    {
      path : '/',
      element : <Layout/>,
      children : [
        {
          index : true,
          element : <Suspense fallback={<CircularProgress aria-label="Loading…" />}><Home/></Suspense>
        },
        {
          path : '/basket',
          element : <Suspense fallback={<CircularProgress aria-label="Loading…" />}><Basket/></Suspense>
        },
        {
          path : '/sale',
          element : <Suspense fallback={<CircularProgress aria-label="Loading…" />}><Sale/></Suspense>
        },
        {
          path : '/saleinfo/:id',
          element : <Suspense fallback={<CircularProgress aria-label="Loading…" />}><Sale_Info/></Suspense>
        },
        {
          path : '/frame',
          element : <Suspense fallback={<CircularProgress aria-label="Loading…" />}><Frame/></Suspense>
        },
        {
          path : '/frame32',
          element : <Suspense fallback={<CircularProgress aria-label="Loading…" />}><Frame32/></Suspense>
        },
        {
          path : '/contacts',
          element : <Suspense fallback={<CircularProgress aria-label="Loading…" />}><Contacts/></Suspense>
        },
        {
          path : '/cart5',
          element : <Suspense fallback={<CircularProgress aria-label="Loading…" />}><Cart5/></Suspense>
        },
        {
          path : '/cart8',
          element : <Suspense fallback={<CircularProgress aria-label="Loading…" />}><Cart8/></Suspense>
        },
        {
          path : '/registerform',
          element : <Suspense fallback={<CircularProgress aria-label="Loading…" />}><RegiterForm/></Suspense>
        },
        {
          path : '/resetpasswordfrom',
          element : <Suspense fallback={<CircularProgress aria-label="Loading…" />}><ResetPasswordForm/></Suspense>
        },
        {
          path : 'resetpassowrdsuccess',
          element : <Suspense fallback={<CircularProgress aria-label="Loading…" />}><ResetPasswordSucces/></Suspense>
        },
        {
          path : '/blog',
          element : <Suspense fallback={<CircularProgress aria-label="Loading…" />}><Blog/></Suspense>
        },
        {
          path : '/kidsfurniturecatalog',
          element : <Suspense fallback={<CircularProgress aria-label="Loading…" />}><KidsFurnitureCatalog/></Suspense>
        },
        {
          path : '/catalogwithfilters',
          element : <Suspense fallback={<CircularProgress aria-label="Loading…" />}><CatalogWithFilters/></Suspense>
        },
        {
          path : '/productdetail/:id',
          element : <Suspense fallback={<CircularProgress aria-label="Loading…" />}><ProductDetail/></Suspense>
        },
        {
          path : '/searchpage',
          element : <Suspense fallback={<CircularProgress aria-label="Loading…" />}><SearchPage/></Suspense>
        }
      ]
    },
    {
      path : '*',
      element : <Suspense fallback={<CircularProgress aria-label="Loading…" />}><NotFound/></Suspense>
    }
  ])
  return <RouterProvider router={router}/>
}
