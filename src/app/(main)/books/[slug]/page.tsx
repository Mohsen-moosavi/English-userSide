import Breadcrumb from '@/components/modules/Breadcrumb';
import RelatedCourseBox from '@/components/modules/RelatedCourseBox';
import RelatedArticles from '@/components/template/bookDetails/RelatedArticles';
import TagLink from '@/components/modules/TagLink';
import { getSingleBookService } from '@/services/singleBookService';
import { sanitizeHtml } from '@/utils/sanitizeHtml';
import { BookType } from '@/utils/types';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import BookFiles from '@/components/template/bookDetails/BookFiles';

export const revalidate = 86400

type PageProps =
    {
        params: Promise<{ slug: string }>
    }

async function page({ params }: PageProps) {
    const { slug } = await params;
    const { responseData: book, error }: { responseData?: BookType, error?: any } = await getSingleBookService(slug)

    if (error) {
        return (
            <div className='h-[80vh] text-red-400 font-bold text-md flex items-center w-full justify-center'>
                اطلاعات کتاب یافت نشد!
            </div>
        )
    } else {
        return (
            <main>
                <Breadcrumb links={[{ name: 'کتاب ها', url: '/books' }, { name: book?.name || '', url: `/books/${slug}` }]} />
                <section>
                    <div className="container mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-7 gap-x-3 gap-y-3 my-6">
                            <article className="lg:col-span-5 rounded-xl p-3 shadow-center">
                                <div id="article-info">
                                    <h1>{book?.name}</h1>
                                    <article>
                                        <div className="flex gap-x-2 sm:gap-x-4 border-t-2 border-solid border-custom-dark-blue my-3 pt-1">
                                            <div className="flex items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#166d91" className="w-[10px] h-[10px] sm:w-[25px] sm:h-[25px]">
                                                    <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
                                                </svg>
                                                <span className="mr-1 sm:mr-2 font-light text-custom-dark-blue max-sm:text-[10px]">سطح کتاب : <strong
                                                    className="font-light text-black text-nowrap">{book?.grate}</strong></span>
                                            </div>
                                            <div className="flex items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="#166d91" className="w-[10px] h-[10px] sm:w-[25px] sm:h-[25px]">
                                                    <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z" />
                                                </svg>
                                                <span className="mr-1 sm:mr-2 font-light text-custom-dark-blue max-sm:text-[10px]">مناسب برای : <strong
                                                    className="font-light text-black text-nowrap">{book?.ageGrate}</strong></span>
                                            </div>
                                        </div>
                                    </article>

                                    <div className='p-3 rounded-xl shadow-[inset_0_0_4px_0_#000] bg-blue-500/10 mb-5'>
                                        <span className='text-custom-dark-blue font-bold text-md block mb-3 pb-1 border-b-2 border-custom-dark-blue'>آنچه در ادامه خواهید خواند:</span>
                                        <div id='article-shortlinks' dangerouslySetInnerHTML={{ __html: sanitizeHtml(JSON.parse(book?.links || '').join('')) }}>
                                        </div>
                                    </div>
                                    <p>{book?.shortDescription}</p>
                                    <Image src={book?.cover || ''} width={800} height={600} alt={book?.name || 'book cover'} />
                                    <article id='article-info' className='book-longDescription' dangerouslySetInnerHTML={{ __html: sanitizeHtml(book?.longDescription || '') }}>
                                    </article>
                                    <BookFiles files={book?.files || []}/>

                                </div>
                            </article>
                            <div className='lg:col-span-2'>
                                <div className="sticky top-3">
                                    <article className="rounded-xl p-3 items-self-start shadow-center">
                                        <span className="text-lg text-custom-dark-blue font-bold">دوره های این کتاب</span>
                                        <div className="mt-3 flex flex-col gap-y-3">
                                            {book?.courses.length ? (
                                                <>
                                            {book?.courses?.map((course, i) => (
                                                <RelatedCourseBox key={i} {...course} />
                                            ))}
                                                </>
                                            ):(
                                                <div className='h-[100px] rounded-xl p-3 items-self-start shadow-center text-red-400 font-bold text-sm flex items-center w-full justify-center'>
                                                دوره مرتبطی یافت نشد!!!
                                            </div>
                                            )}
                                        </div>
                                    </article>
                                <RelatedArticles/>
                                <article className="rounded-xl p-3 items-self-start shadow-center mt-4">
                                        <span className="text-lg text-custom-dark-blue font-bold">تگ های مرتبط</span>
                                        <div className="mt-3 flex gap-x-2 flex-wrap">
                                            {book?.tags.length ? (
                                                <>
                                            {book?.tags?.map((tag,i) => (
                                                <TagLink key={i} tagName={tag.name}/>
                                            ))}
                                                </>
                                            ):(
                                                <div className='h-[100px] rounded-xl p-3 items-self-start shadow-center text-red-400 font-bold text-sm flex items-center w-full justify-center'>
                                                تگ مرتبطی یافت نشد!!!
                                            </div>
                                            )}
                                        </div>
                                    </article>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        )
    }
}

export default page
