import React from 'react'
import { useRef } from "react";

const Nav = () => {

    return (
        <nav className='py-3 px-20 flex items-center justify-between border-b border-[#d9d9d9]' >
            <div className='flex gap-1 text-2xl items-center logo'>
                <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSIElTs17C36k_mKyv6xRwSW4dNhp42UqyR5VJE7ZpujcsdrFoU" alt="" className='h-8' />
                Vaulta
            </div>
            <div className='flex gap-5 cursor-pointer nav-2'>
                <div>Personal</div>
                <div>Bussiness</div>
                <div>Platform</div>
            </div>
            <div className='flex gap-5 items-center cursor-pointer nav-3'>
                <div>Pricing</div>
                <div>Help</div>
                <div>Login</div>
                <div className='h-fit w-fit px-6 py-2 bg-[#ebebeb] rounded-2xl'>Register</div>
            </div>
        </nav>
    )
}

export default Nav
