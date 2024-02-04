import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import useTodoStore from '../../Store/Store'
import supabase from '../../Config/Config';

const Navbar = () => {
   const users = useTodoStore((state)=>state.user);
  const removeuser = useTodoStore((state)=>state.removeUser);
  const navigate = useNavigate();
  const handleLogOut = async()=>{
    const { data: { user } } = await supabase.auth.getUser()
    if (user) {
      removeuser();
      navigate('/login');
    }
  }
  return (
    <div>
      <div className='flex justify-between px-20 py-4 bg-[#26C5F2] text-white'>
        <Link to='/'>
        <h2 className='text-3xl font-bold'>SupabaseZust</h2>
        </Link>
         <ul className='flex gap-10 text-xl '>
          {users && ( 
            <li><NavLink to={'/'}>Home</NavLink></li>
          )
          }
            <li><NavLink to={'/login'}>Login</NavLink></li>
            <li><NavLink to={'/signup'}>Signup</NavLink></li>
         </ul>

         <div>
          {users ? 
          <button onClick={handleLogOut} className='px-4 py-2 bg-[#fff] text-[#333] text-lg rounded'>Logout</button>
          :
          <Link to={'/login'}>
          <button  className='px-4 py-2 bg-[#fff] text-[#333] text-lg rounded'>Login</button>
          </Link>
        }
         </div>
      </div>
    </div>
  )
}

export default Navbar
