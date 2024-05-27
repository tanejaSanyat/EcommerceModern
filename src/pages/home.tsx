import {Link} from 'react-router-dom'
import "../styles/home.scss"
import ProductCard from '../components/productCard'
const Home = () => {
  const addToCartHandler = ()=>{

  }
  return (
    <div className='home'>
        <section></section>
        <h1>Latest Products
            <Link to = "search/" className='findMore'>MORE</Link>
        </h1>
        <main>
          <ProductCard producutId='adca' name='macbook' price={50000} stock={4} handler={addToCartHandler} photo='https://m.media-amazon.com/images/I/316ArzLeJ2L._SY445_SX342_QL70_FMwebp_.jpg' />
        </main>
    </div>
  )
}

export default Home
