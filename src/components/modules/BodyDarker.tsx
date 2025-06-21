'use client'
import useAppSelector from '@/hooks/useAppSelector'
import React from 'react'

function BodyDarker() {
    const { isMenuMobileOpen } = useAppSelector(state => state.ui)

  return (
    <>
    {isMenuMobileOpen ? 
        (<div className='fixed w-[100vw] h-[100vh] bg-black/50 top-0 right-0 z-1'></div>)
        :null
    }
    </>
  )
}

export default BodyDarker
