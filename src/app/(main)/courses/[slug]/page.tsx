import CommentBox from '@/components/modules/CommentBox'
import Breadcrumb from '@/components/modules/Breadcrumb'
import CommentList from '@/components/template/courseDetails/CommentList'
import CreateComment from '@/components/template/courseDetails/CreateComment'
import RelatedArticles from '@/components/template/courseDetails/RelatedArticles'
import RelatedCourses from '@/components/template/courseDetails/RelatedCourses'
import SessionList from '@/components/template/courseDetails/SessionList'
import { getSingleCourseService } from '@/services/singleCourseService'
import { sanitizeHtml } from '@/utils/sanitizeHtml'
import React from 'react'
import { CourseType } from '@/utils/types'
import TagLink from '@/components/modules/TagLink'
import AddToBag from '@/components/template/courseDetails/AddToBag'
import Image from 'next/image'
import BookFile from '@/components/template/courseDetails/BookFile'


export const revalidate = 86400

type PageProps =
    {
        params: Promise<{ slug: string }>
    }

async function page({ params }: PageProps) {

    const { slug } = await params;
    const { responseData: course, error }: { responseData?: CourseType, error?: any } = await getSingleCourseService(slug)

    if (error) {
        return (
            <div className='h-[80vh] text-red-400 font-bold text-md flex items-center w-full justify-center'>
                اطلاعات دوره یافت نشد!
            </div>
        )
    } else {
        return (
            <main>
                <Breadcrumb links={[{name:'دوره ها',url:'/courses'},{name:course?.name||'' ,url:`/courses/${slug}`}]}/>
                <section>
                    <div className="container mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 mt-4 rounded-xl shadow-center p-4 gap-y-3 gap-x-3">
                            <div className="flex flex-col gap-y-3">
                                <h1 className="font-bold text-lg sm:text-2xl text-custom-dark-blue">{course?.name}</h1>
                                <p className="max-sm:text-sm text-justify sm:mt-3 text-custom-gray">{`${course?.shortDescription.slice(0, 600)}...`}</p>
                                <AddToBag courseId={course?.id || 0} off={course?.offs[0]||null} price={course?.price || '0'}/>
                            </div>

                            <div>
                                <video controls src={course?.introductionVideo} poster={course?.cover} className="w-[100%] shadow-center bg-black rounded-xl max-h-[336px]"></video>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="my-4">
                    <div className="container mx-auto">
                        <div className="grid lg:grid-cols-7 gap-x-3 gap-y-3 items-top">
                            <div className='col-span-7 lg:col-span-5'>
                                <article>
                                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-2 gap-y-2 text-[11px] sm:text-lg">
                                        <div className="flex items-center gap-x-2 shadow-center rounded-xl p-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="#166d91" className="w-[30px] h-[30px]"
                                                viewBox="0 0 16 16">
                                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                                                <path
                                                    d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
                                            </svg>
                                            <div className="flex flex-col">
                                                <span className="text-custom-dark-blue">وضعیت دوره :</span>
                                                <span className="text-custom-gray">{course?.isCompleted ? 'تکمیل شده' : 'در حال برگزاری'}</span>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-x-2 shadow-center rounded-xl p-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="#166d91" className="w-[30px] h-[30px]"
                                                viewBox="0 0 16 16">
                                                <path
                                                    d="M2.5 13.5A.5.5 0 0 1 3 13h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5M13.991 3l.024.001a1.5 1.5 0 0 1 .538.143.76.76 0 0 1 .302.254c.067.1.145.277.145.602v5.991l-.001.024a1.5 1.5 0 0 1-.143.538.76.76 0 0 1-.254.302c-.1.067-.277.145-.602.145H2.009l-.024-.001a1.5 1.5 0 0 1-.538-.143.76.76 0 0 1-.302-.254C1.078 10.502 1 10.325 1 10V4.009l.001-.024a1.5 1.5 0 0 1 .143-.538.76.76 0 0 1 .254-.302C1.498 3.078 1.675 3 2 3zM14 2H2C0 2 0 4 0 4v6c0 2 2 2 2 2h12c2 0 2-2 2-2V4c0-2-2-2-2-2" />
                                            </svg>
                                            <div className="flex flex-col">
                                                <span className="text-custom-dark-blue">تعداد جلسات :</span>
                                                <span className="text-custom-gray">{course?.sessionCount}</span>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-x-2 shadow-center rounded-xl p-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="#166d91" className="w-[30px] h-[30px]"
                                                viewBox="0 0 16 16">
                                                <path d="M8.5 5.6a.5.5 0 1 0-1 0v2.9h-3a.5.5 0 0 0 0 1H8a.5.5 0 0 0 .5-.5z" />
                                                <path
                                                    d="M6.5 1A.5.5 0 0 1 7 .5h2a.5.5 0 0 1 0 1v.57c1.36.196 2.594.78 3.584 1.64l.012-.013.354-.354-.354-.353a.5.5 0 0 1 .707-.708l1.414 1.415a.5.5 0 1 1-.707.707l-.353-.354-.354.354-.013.012A7 7 0 1 1 7 2.071V1.5a.5.5 0 0 1-.5-.5M8 3a6 6 0 1 0 .001 12A6 6 0 0 0 8 3" />
                                            </svg>
                                            <div className="flex flex-col">
                                                <span className="text-custom-dark-blue">مدت زمان دوره :</span>
                                                <span className="text-custom-gray">{course?.time}</span>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-x-2 shadow-center rounded-xl p-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="#166d91" className="w-[30px] h-[30px]"
                                                viewBox="0 0 16 16">
                                                <path
                                                    d="M14 9.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0m-6 5.7c0 .8.8.8.8.8h6.4s.8 0 .8-.8-.8-3.2-4-3.2-4 2.4-4 3.2" />
                                                <path
                                                    d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h5.243c.122-.326.295-.668.526-1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v7.81c.353.23.656.496.91.783Q16 12.312 16 12V4a2 2 0 0 0-2-2z" />
                                            </svg>
                                            <div className="flex flex-col">
                                                <span className="text-custom-dark-blue">مدرس :</span>
                                                <span className="text-custom-gray">{course?.user.name}</span>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-x-2 shadow-center rounded-xl p-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="#166d91" className="w-[30px] h-[30px]"
                                                viewBox="0 0 16 16">
                                                <path
                                                    d="M11 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h1V7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7h1zm1 12h2V2h-2zm-3 0V7H7v7zm-5 0v-3H2v3z" />
                                            </svg>
                                            <div className="flex flex-col">
                                                <span className="text-custom-dark-blue">سطح دوره :</span>
                                                <span className="text-custom-gray">{course?.level.name}</span>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-x-2 shadow-center rounded-xl p-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="#166d91" className="w-[30px] h-[30px]"
                                                viewBox="0 0 16 16">
                                                <path
                                                    d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
                                            </svg>
                                            <div className="flex flex-col">
                                                <span className="text-custom-dark-blue">امتیاز :</span>
                                                <span className="text-custom-gray flex items-start gap-x-2">
                                                    <span className='sm:leading-[20px]'>{Number(course?.score) === 5 ? '5' : Number(course?.score).toFixed(1)}</span>
                                                    <div className="flex items-center">
                                                        {Array(Math.ceil(Number(course?.score))).fill(0).map((_, i) => (
                                                            <svg key={i} xmlns="http://www.w3.org/2000/svg" fill='#166d91' className="max-sm:w-[10px] max-sm:h-[10px] w-[16px] h-[16px]" viewBox="0 0 576 512">
                                                                <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                                                            </svg>
                                                        ))}
                                                    </div>
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-4 rounded-xl shadow-center p-3">
                                        <p className="max-sm:text-sm text-justify sm:mt-3 text-custom-gray mb-8">{course?.shortDescription}</p>
                                        <Image src={course?.cover||''} alt={course?.name||'cover'} className='w-full h-auto rounded-xl shadow-xl' width={400} height={300}/>

                                       <div id="article-info">
                                        <article  dangerouslySetInnerHTML={{ __html: sanitizeHtml(course?.longDescription || '') }}>
                                        </article>
                                        <BookFile files={course?.bookFiles||[]}/>
                                        </div> 
                                        <article className="mt-8">
                                            <div className="flex items-center">
                                                <svg className="w-[17px] sm:w-[30px] bi bi-stars"
                                                    xmlns="http://www.w3.org/2000/svg" fill="#166d91" viewBox="0 0 16 16">
                                                    <path
                                                        d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.73 1.73 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.73 1.73 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.73 1.73 0 0 0 3.407 2.31zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.16 1.16 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.16 1.16 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732z" />
                                                </svg>
                                                <span className="text-custom-dark-blue">جلسات دوره</span>
                                            </div>
                                            <SessionList defaultSessions={course?.sessions || []} courseId={course?.id || 0} courseSlug={slug} sessionCount={course?.sessionCount || 0} courseName={course?.name || ""} />

                                        </article>
                                        <article className="mt-8">
                                            <div>
                                                <div className="flex items-center gap-x-2">
                                                    <svg className="w-[17px] sm:w-[30px] bi bi-stars"
                                                        xmlns="http://www.w3.org/2000/svg" fill="#166d91" viewBox="0 0 16 16">
                                                        <path
                                                            d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.73 1.73 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.73 1.73 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.73 1.73 0 0 0 3.407 2.31zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.16 1.16 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.16 1.16 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732z" />
                                                    </svg>
                                                    <span className="text-custom-dark-blue">نظر خود را به اشتراک بگذارید.</span>
                                                </div>
                                                <CreateComment courseId={course?.id || 0} />

                                            </div>
                                            <div className="mt-5">
                                                <div className="flex items-center gap-x-2 mb-2">
                                                    <svg className="w-[17px] sm:w-[30px] bi bi-stars"
                                                        xmlns="http://www.w3.org/2000/svg" fill="#166d91" viewBox="0 0 16 16">
                                                        <path
                                                            d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.73 1.73 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.73 1.73 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.73 1.73 0 0 0 3.407 2.31zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.16 1.16 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.16 1.16 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732z" />
                                                    </svg>
                                                    <span className="text-custom-dark-blue">نظرات کاربران</span>
                                                </div>
                                                {course?.comments?.length ? (
                                                    <>
                                                        {course.comments.map((comment, index) => (
                                                            <CommentBox key={index} {...comment} />
                                                        ))}
                                                        <CommentList commentCount={course.commentCount} courseId={course.id}/>
                                                    </>
                                                ) : (
                                                    <div className='text-center'>
                                                        <span className='text-red-400 my-3'>هنوز کامنتی برای این دوره وجود ندارد!</span>
                                                    </div>
                                                )}
                                            </div>
                                        </article>
                                    </div>

                                </article>
                            </div>
                            <div className='col-span-7 lg:col-span-2'>
                                <div className="sticky top-3">
                                    <RelatedCourses slug={slug}/>
                                    <RelatedArticles slug={slug}/>
                                    <article className="rounded-xl p-3 items-self-start shadow-center mt-4">
                                        <span className="text-lg text-custom-dark-blue font-bold">تگ های مرتبط</span>
                                        <div className="mt-3 flex gap-x-2 flex-wrap">
                                            {course?.tags.length ? (
                                                <>
                                            {course?.tags?.map((tag,i) => (
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
