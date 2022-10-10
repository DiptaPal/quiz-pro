import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Home from './components/Home/Home';
import Main from './layouts/Main';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      loader: async() => {
        return fetch('https://openapi.programming-hero.com/api/quiz')
      },
      children: [
        {
          path: '/',
          element: <Home></Home>
        }
      ]
    },
    {
      path: '*',
      element: <ErrorPage></ErrorPage>
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
