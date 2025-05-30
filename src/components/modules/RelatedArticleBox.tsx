import { RelatedArticleType } from '@/utils/types'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function RelatedArticleBox({title,cover,slug}:RelatedArticleType) {
  return (
    <div
    className="border-2 border-solid border-custom-dark-blue rounded-xl overflow-hidden hover:shadow-2xl">
    <Link href={`/articles/${slug}`} className="flex items-center justify-start gap-x-2">
        <Image src={cover} width={100} height={60}
            className="max-w-[80px] max-h-[48px] lg:max-w-[100px] lg:max-h-[60px] m-0 border-none rounded-none" alt={title} />
        <span className='max-sm:text-sm truncate'>{title}</span>
    </Link>
</div>
  )
}

export default RelatedArticleBox
