
import { FaSearch, FaShoppingBag, FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa';
import {Link} from "react-router-dom" ;
import { useState } from 'react';
import "../styles/app.scss"
const Header = () => {
    const user = {
        _id:"sss" ,
        role:"admin"
    }
    const [isOpen,setIsOpen] = useState<boolean>(false) ; 
    const logOutHandler = ()=>{
        setIsOpen(false) ;
    }
  return (
   <nav className='header'>
    <Link to = {"/"}  onClick={()=>setIsOpen(false)}>Home</Link>
    <Link to = {"/search"}  onClick={()=>setIsOpen(false)}>
        <FaSearch/>
    </Link>
    <Link to={"/cart"}  onClick={()=>setIsOpen(false)}>
        <FaShoppingBag/>
    </Link>

    {
        user?._id?(
            <>
            <button onClick={()=>setIsOpen((prev)=> !prev)}><FaUser/></button>
            <dialog open={isOpen}>
                <div>
                    {
                        user.role == "admin" && (
                            <Link to={"/admin/dashboard"} onClick={()=>setIsOpen(false)}>Admin</Link>
                        )
                    }
                    <Link to={"/orders"} onClick={()=>setIsOpen(false)}>Orders</Link>
                    <button onClick = {logOutHandler}>
                        <FaSignOutAlt/>
                    </button>
                </div>
            </dialog>
            </>
        ): <Link to={"/login"}>
            <FaSignInAlt/> 
        </Link>
    }
   </nav>
  )
}

export default Header
