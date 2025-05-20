'use client'
import Image from 'next/image'
import Swal from 'sweetalert2'
import React, { useRef } from 'react'
import userProfile from '@images/user-profile.png'
import useAppSelector from '@/hooks/useAppSelector'
import toast from 'react-hot-toast'
import useAppDispatch from '@/hooks/useAppDispatch'
import { deleteProfileImageThunk, uploadProfileImageThunk } from '@/redux/slice/user/userThunks'
import Link from 'next/link'
import { usePathname } from 'next/navigation'


function Header() {

    const pathName = usePathname()
    
    const {userAvatar,userName,userRole,loading} = useAppSelector(state=>state.user)
    const dispatch = useAppDispatch()
    const fileInputElm = useRef<HTMLInputElement>(null)

    function selectFileHandler(e:React.ChangeEvent<HTMLInputElement>){
        if(e.target.files){
            const file = e.target.files[0];
            const whiteMimTypes = ['image/jpg','image/jpeg','image/png']
            const whiteFileType = ['jpg','jpeg','png']
            if(!whiteFileType.includes(file.name.split('.').pop() || '') || !whiteMimTypes.includes(file.type)){
                emptyFile()
                return toast.error("فقط فرمت jpg و jpeg و png مجاز است.")
            }
            if(file.size > 1024 * 300){
                emptyFile()
                return toast.error("حجم فایل، نباید بیشتر از 300 کیلوبایت باشد.")
            }
            dispatch(uploadProfileImageThunk({file}))
            emptyFile()
        }
    }

    function emptyFile(){
        if(fileInputElm.current){
            fileInputElm.current.type = ''
            fileInputElm.current.type = 'file'
        }
    }

    function deleteProileImageHandler(){
        Swal.fire({
            title:'آیا از حذف تصویر پروفایل اطمینان دارید؟',
            icon: 'warning',
            showCancelButton : true,
            confirmButtonText:'تایید',
            cancelButtonText: 'لغو'
        }).then((result)=>{
            if(result.isConfirmed){
                dispatch(deleteProfileImageThunk())
            }
        })
    }



    return (
        <div className='relative top-18 sm:top-22 flex items-center gap-x-2 sm:gap-x-5 w-full'>
            <div className='relative bg-white rounded-full border-4 border-white'>
                {loading ? (
                    <div className=' flex items-center justify-center w-[100px] h-[100px]'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className='w-[30px] h-[30px] animate-spin' fill='#166d91'>
                            <path d="M304 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm0 416a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM48 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm464-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM142.9 437A48 48 0 1 0 75 369.1 48 48 0 1 0 142.9 437zm0-294.2A48 48 0 1 0 75 75a48 48 0 1 0 67.9 67.9zM369.1 437A48 48 0 1 0 437 369.1 48 48 0 1 0 369.1 437z"/>
                        </svg>
                    </div>
                ): (
                    <Image src={userAvatar || userProfile} width={100} height={100} alt='user profile' className='w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] rounded-full' />
                )}
                <input 
                    type="file"
                    className='hidden'
                    ref={fileInputElm}
                    onChange={selectFileHandler}
                    />
                <button className='absolute bottom-[17px] left-[-5px] cursor-pointer' disabled={loading} onClick={()=>fileInputElm.current?.click()}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className='w-[25px] h-[25px] bg-[#50dcf5] p-1 rounded-full' fill='#fff'>
                        <path d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1 0 32c0 8.8 7.2 16 16 16l32 0zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z" />
                    </svg>
                </button>
                <button className='absolute bottom-[-3px] left-[13px] cursor-pointer' disabled={loading} onClick={()=>deleteProileImageHandler()}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className='w-[25px] h-[25px] bg-red-400 p-1 rounded-full' fill='#fff'>
                      <path d="M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z"/>
                    </svg>
                </button>
            </div>
            <div className='flex flex-col items-start justify-center'>
                <span className='max-sm:text-sm text-lg text-custom-dark-blue font-bold'>{userName}</span>
                <span className='max-sm:text-[12px] font-bold text-sm text-custom-gray'>{userRole}</span>
            </div>
            {pathName ===  '/user-panel' ? (<Link href={'/user-panel/edit'} className='cursor-pointer !text-white px-1 py-2 text-[12px] sm:text-sm rounded-md bg-custom-dark-blue mr-auto ml-3 hover:opacity-80'>ویرایش اطلاعات</Link>) :null}
            
        </div>
    )
}

export default Header
