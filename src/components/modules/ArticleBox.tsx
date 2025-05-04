import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export type TypeArticleBox = {
    id: number,
    title: string,
    shortDescription: string,
    slug: string,
    cover: string,
    author:string,
    authorId:number,
    created_at:string
}

function ArticleBox({title,shortDescription,slug,cover,author,created_at}: TypeArticleBox) {
  return (
    <div className="shadow-center rounded-2xl overflow-hidden transition-all hover:-translate-y-2">
    <Link href={`/articles/${slug}`} className="text-center relative">
        <Image src={cover} alt="books" className="min-w-full max-h-[200px]" width={350} height={200}/>
        <div
            className="p-2 rounded-b-lg relative shadow-[0_10px_60px_35px_#000]">
            <h3 className="max-sm:text-sm text-start text-custom-dark-blue font-bold mb-2 truncate">{title}</h3>
            <p className="text-custom-gray text-justify font-light text-sm max-h-[60px] min-h-[70px] text-ellipsis overflow-hidden">{`${shortDescription}...`}</p>
            <div className="flex justify-between items-center max-sm:text-[12px] text-[#ffa500] mt-2 text-sm">
                <div className="flex">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                        <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
                      </svg>
                    <span className="mr-1">{author}</span>
                </div>
                <div className="flex">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-calendar3" viewBox="0 0 16 16">
                        <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2M1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857z"/>
                        <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
                      </svg>
                      <span className="mr-1">{created_at}</span>
                </div>
            </div>
            <span className="block border-t mt-2 py-2 border-custom-gray border-solid">مشاهده بیشتر</span>
        </div>
    </Link>
</div>
  )
}

export default ArticleBox
