import Link from 'next/link'
import notFound from '@images/notFoundsvg.svg'
import React from 'react'
import Image from 'next/image'

function notFoundPage() {
  return (
    <div className='w-full h-screen flex flex-col items-center justify-center'>
      <Image src={notFound} width={100} height={100} alt="not found" className='max-w-[100vw] max-h-[90vh] w-full h-full' />
      <Link href={'/'} className='p-2 rounded-lg bg-custom-dark-blue !text-white text-sm hover:opacity-60 relative bottom-5'>بازگشت به صفحه اصلی</Link>
    </div>
  )
}

export default notFoundPage
