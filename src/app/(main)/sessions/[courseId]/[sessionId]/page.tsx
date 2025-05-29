import VideoBox from '@/components/template/sessions/VideoBox';
import React from 'react'

type PageProps =
  {
    params: Promise<{ courseId: number , sessionId:number}>,
  }

async function page({ params }: PageProps) {
  const { courseId,sessionId} = await params;

  return (
    <main>

      <div className="container mx-auto  mt-5">
        <VideoBox sessionId={Number(sessionId)} courseId={Number(courseId)}/>
      </div>



    </main>
  )
}

export default page
