import { BookFileType } from '@/utils/types'
import React from 'react'

type PageProps = {
    files: BookFileType[]
}

function BookFile({ files }: PageProps) {
    return (
        <div className='flex flex-col items-start'>
            <h5 className='!mt-20 !mb-5'>فایل های دانلودی</h5>
            {files.map((file, i) => (
                <a href={file.link} target='_blank' rel='noopener noreferrer' key={i} className='!text-sky-400'>{file.name}</a>
            ))}
        </div>
    )
}

export default BookFile
