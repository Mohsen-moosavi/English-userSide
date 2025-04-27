import React from 'react'
import Link from 'next/link'

type PageProp = {
    links: { name: string, url: string }[]
}

function Breadcrumb({ links }: PageProp) {
    return (
        <div>
            <div className="container mx-auto">
                <div className="flex items-center shadow-center p-2 md:p-4 rounded-full text-sm md:text-xl">
                            <Link href={'/'} className='text-nowrap'>خانه</Link>
                    {links.map((link, i) => (
                        <div key={i} className='flex items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                className="mx-1 md:mx-2" viewBox="0 0 16 16">
                                <path fill-rule="evenodd"
                                    d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0" />
                            </svg>
                            <Link href={link.url} className='text-nowrap'>{link.name}</Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Breadcrumb
