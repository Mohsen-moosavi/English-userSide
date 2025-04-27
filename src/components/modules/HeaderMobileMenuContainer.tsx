'use client'
import Image from 'next/image'
import React from 'react'
import closeImage from '@images/close.png'
import useAppSelector from '@/hooks/useAppSelector'
import useAppDispatch from '@/hooks/useAppDispatch'
import { closeMenu } from '@/redux/slice/ui/uiSlice'

export default function HeaderMobileMenuContainer({ children }: { children: React.ReactNode }) {

    const { isMenuMobileOpen } = useAppSelector(state => state.ui)
    const dispatch = useAppDispatch()



    return (
        <div className={`fixed top-0 right-[-250px] ${isMenuMobileOpen ? '!right-0' : ''} z-10 py-4 overflow-auto h-[100vh] w-[250px] flex flex-col items-start justify-start bg-[#5e9ab5] transition-all`}
    id="mobile-menu">
            <span className="absolute top-5 left-3" id="close-menu" onClick={() => dispatch(closeMenu())}>
                <Image src={closeImage} alt="close" />
            </span>
            {children}
        </div>
    )
}
