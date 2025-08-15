import { BookFileType } from '@/utils/types'
import React from 'react'

type PageProps = {
    files : BookFileType[]
}

function BookFiles({files}:PageProps) {
  return (
    <div>
        <h5 className='!mt-20 !mb-7'>فایل های دانلودی</h5>
        {[...new Set(files.map(file=>file.group))].map((fileGroup,i)=>(
            <div key={i} className='flex flex-col items-start'>
                <h6 className='!mb-3 !mt-7'>{fileGroup}</h6>
                {files.filter(file=>file.group === fileGroup).map((file,i)=>(
                    <a href={file.link} target='_blank' rel='noopener noreferrer' key={i} className='!text-sky-400'>{file.name}</a>
                ))}
            </div>
        ))}
    </div>
  )
}

export default BookFiles
