import Breadcrumb from '@/components/modules/Breadcrumb';
import RelatedArticles from '@/components/template/articleDetails/RelatedArticles';
import RelatedCourses from '@/components/template/articleDetails/RelatedCourses';
import { getSingleArticleService } from '@/services/singleArticleService';
import { sanitizeHtml } from '@/utils/sanitizeHtml';
import { ArticleType } from '@/utils/types';
import moment from 'moment-jalaali';
import React from 'react'

type PageProps =
    {
        params: Promise<{ slug: string }>
    }

export const revalidate = 86400

async function page({ params }: PageProps) {
    const { slug } = await params;
    const { responseData: article, error }: { responseData?: ArticleType, error?: any } = await getSingleArticleService(slug)


    if (error) {
        return (
            <div>

            </div>
        )
    } else {
        return (
            <main>
                <Breadcrumb links={[{name:'مقالات',url:'/articles'},{name:article?.title||'',url:`/articles/${slug}`}]}/>
                <section>
                    <div className="container mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-7 gap-x-3 gap-y-3 my-6">
                            <article className="lg:col-span-5 rounded-xl p-3 shadow-center">
                                <div id="article-info">
                                    <h1>{article?.title}</h1>
                                    <article>
                                        <div className="flex gap-x-2 sm:gap-x-4 border-t-2 border-solid border-custom-dark-blue my-3 pt-1">
                                            <div className="flex items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="#166d91" className="w-[10px] h-[10px] sm:w-[25px] sm:h-[25px]"
                                                    viewBox="0 0 16 16">
                                                    <path
                                                        d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                                    <path fillRule="evenodd"
                                                        d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z" />
                                                </svg>
                                                <span className="mr-1 sm:mr-2 font-light text-custom-dark-blue max-sm:text-[10px]">نویسنده : <strong
                                                    className="font-light text-black text-nowrap">{article?.user.name}</strong></span>
                                            </div>
                                            <div className="flex items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="#166d91" className="w-[10px] h-[10px] sm:w-[25px] sm:h-[25px]"
                                                    viewBox="0 0 16 16">
                                                    <path
                                                        d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2M1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857z" />
                                                    <path
                                                        d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
                                                </svg>
                                                <span className="mr-1 sm:mr-2 font-light text-custom-dark-blue max-sm:text-[10px]">تاریخ انتشار : <strong
                                                    className="font-light text-black text-nowrap">{moment(article?.created_at).format('jYYYY-jMM-jDD')}</strong></span>
                                            </div>
                                        </div>
                                    </article>

                                    <div className='p-3 rounded-xl shadow-[inset_0_0_4px_0_#000] bg-blue-500/10 mb-2'>
                                        <span className='text-custom-dark-blue font-bold text-md block mb-3 pb-1 border-b-2 border-custom-dark-blue'>آنچه در ادامه خواهید خواند:</span>
                                    <div id='article-shortlinks' dangerouslySetInnerHTML={{ __html: sanitizeHtml(JSON.parse(article?.links||'').join(''))}}>
                                    </div>
                                    </div>

                                    <article id='article-info' dangerouslySetInnerHTML={{ __html: sanitizeHtml(article?.longDescription || '') }}>
                                    </article>
                                </div>
                            </article>
                            <div className='lg:col-span-2'>
                                <div className="sticky top-3">
                                    <RelatedCourses slug={slug}/>
                                    <RelatedArticles slug={slug}/>
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
