import {lazy,Suspense} from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
const Home = lazy(()=> import("./pages/home.tsx" )) 
const Cart  = lazy(()=> import("./pages/cart.tsx")) 
const Search = lazy(()=> import("./pages/search.tsx")) 
import Loader from './components/loader.tsx'
const Dashboard = lazy(() => import("./pages/admin/dashboard.tsx"));
const Products = lazy(() => import("./pages/admin/products.tsx"));
const Customers = lazy(() => import("./pages/admin/customers.tsx"));
const Transaction = lazy(() => import("./pages/admin/transaction.tsx"));
const Barcharts = lazy(() => import("./pages/admin/charts/barcharts.tsx"));
const Piecharts = lazy(() => import("./pages/admin/charts/piecharts.tsx"));
const Linecharts = lazy(() => import("./pages/admin/charts/linecharts.tsx"));
const Coupon = lazy(() => import("./pages/admin/apps/coupon.tsx"));
const Stopwatch = lazy(() => import("./pages/admin/apps/stopwatch.tsx"));
const Toss = lazy(() => import("./pages/admin/apps/toss.tsx"));
const NewProduct = lazy(() => import("./pages/admin/management/newproduct.tsx"));
const ProductManagement = lazy(
  () => import("./pages/admin/management/productmanagement.tsx")
);
const TransactionManagement = lazy(
  () => import("./pages/admin/management/transactionmanagement.tsx")
);
const App = () => {
  return (
    <Router>
        <Suspense fallback={<Loader/>}>
        <Routes>
        <Route path='/' element = {<Home/>} />
        <Route path='search' element = {<Search/>} />
        <Route path='/cart' element = {<Cart/>} />


        {/* admin routes */}
        
<Route>
  <Route path="/admin/dashboard" element={<Dashboard />} />
  <Route path="/admin/product" element={<Products />} />
  <Route path="/admin/customer" element={<Customers />} />
  <Route path="/admin/transaction" element={<Transaction />} />
  {/* Charts */}
  <Route path="/admin/chart/bar" element={<Barcharts />} />
  <Route path="/admin/chart/pie" element={<Piecharts />} />
  <Route path="/admin/chart/line" element={<Linecharts />} />
  {/* Apps */}
  <Route path="/admin/app/coupon" element={<Coupon />} />
  <Route path="/admin/app/stopwatch" element={<Stopwatch />} />
  <Route path="/admin/app/toss" element={<Toss />} />

  {/* Management */}
  <Route path="/admin/product/new" element={<NewProduct />} />

  <Route path="/admin/product/:id" element={<ProductManagement />} />

  <Route path="/admin/transaction/:id" element={<TransactionManagement />} />
</Route>;

      </Routes>
        </Suspense>
     
    </Router>
  )
}

export default App
