import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Nav = () => {
    const auth = localStorage.getItem("user")
    const navigate = useNavigate()
    const logout = () => {
        localStorage.clear();
        navigate("/");
    }
    return (
        <div className='relative'>
            <img src="https://bcassetcdn.com/public/blog/wp-content/uploads/2022/06/14122051/food-delivery-logo-by-jowel-ahmed-dribbble.png" className='absolute h-[45px] rounded-3xl ml-[90px]'></img>
            {
                auth ? <ul className='flex gap-[80px] align-middle justify-center p-3 bg-blue-400 text-white'>
                    <li>
                        <Link to="/" className='font-bold text-black'>Products</Link>
                    </li>
                    <li>
                        <Link to="/add" className='font-bold text-black'>ADD Products</Link>
                    </li>
                    <li>
                        <Link to="/update" className='font-bold text-black'> Update Products</Link>
                    </li>
                    <li>
                        <Link to="/profile" className='font-bold text-black'>Profile</Link>
                    </li>
                    <li>
                        <Link to="/signup" onClick={logout} className='font-bold text-black'>Logout ({JSON.parse(auth).name})</Link>
                    </li>
                </ul> :
                    <ul className='flex gap-[40px] align-middle justify-end p-3 bg-blue-400 text-white pr-5'>
                        <li>
                            <Link to="signup" className='font-bold text-black'>SignUp</Link>
                        </li>
                        <li>
                            <Link to="/login" className='font-bold text-black'>Login</Link>
                        </li>
                    </ul>
            }

        </div>
    )
}

export default Nav
