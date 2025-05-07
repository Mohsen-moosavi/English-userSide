import Breadcrumb from '@/components/modules/Breadcrumb'
import VideoBox from '@/components/template/sessions/VideoBox';
import React from 'react'

type PageProps =
  {
    params: Promise<{ courseSlug: string, sessionId: string }>,
    searchParams: { courseName: string, sessionName: string,ci:string }
  }

async function page({ params, searchParams }: PageProps) {
  const { courseSlug, sessionId } = await params;
  const { courseName, sessionName,ci } = searchParams;

  return (
    <main>
      {(courseName?.length && sessionName?.length) ? (
        <Breadcrumb links={[{ name: 'دوره ها', url: '/courses' }, { name: `${courseName}`, url: `/courses/${courseSlug}` }, { name: `${sessionName}`, url: `/sessions/${courseSlug}/${sessionId}?courseName=${courseName}&sessionName=${sessionName}&ci=${ci}` }]} />
      )
        : null}

      <div className="container mx-auto  mt-5">
        <VideoBox sessionId={Number(sessionId)} courseName={courseName} courseSlug={courseSlug} courseId={Number(ci)}/>
      </div>



    </main>
  )
}

export default page
