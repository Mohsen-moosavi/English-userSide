'use client'
import React, { useEffect, useRef, useState } from 'react'

type PageProps = {
    sendAnswerHandler : Function,
    textBoxReseter : boolean,
    isloading : boolean,
}

function TextBox({ sendAnswerHandler, textBoxReseter, isloading }: PageProps) {
    const [message, setMessage] = useState("");
    const textareaRef = useRef<HTMLTextAreaElement | null>(null);

    // تغییر ارتفاع خودکار هنگام تایپ
    const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(e.target.value);

        // تغییر ارتفاع خودکار
        if (!!textareaRef.current) {
            textareaRef.current.style.height = "auto";
            textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
        }
    };

    // ارسال پیام (فقط برای نمایش در console)
    const handleSend = () => {
        sendAnswerHandler(message)
    };

    useEffect(() => {
        setMessage('')
    }, [textBoxReseter])

    return (
        <div className={`flex items-center w-full border border-custom-dark-blue/50 px-2 py-1 sm:py-2 sm:px-3 rounded-lg bg-white`}>

            {/* دکمه ارسال */}

            <button
                onClick={handleSend}
                disabled={message.trim() === "" || isloading}
                className={`${message.trim() !== ""
                        ? "opacity-80 hover:opacity-100 cursor-pointer"
                        : "opacity-50 cursor-not-allowed"
                    } bg-sky-400 rounded-full sm:px-2 transition mt-auto w-[30px] h-[30px]  sm:w-[40px] sm:h-[40px] flex items-center justify-center`}
            >
                <svg className='w-[20px] h-[20px] sm:w-[30px] sm:h-[30px]' viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill='#fff'><path d="M4.02 42l41.98-18-41.98-18-.02 14 30 4-30 4z"/><path d="M0 0h48v48h-48z" fill="none"/></svg>
            </button>

            {/* Textarea برای تایپ پیام */}
            <textarea
                ref={textareaRef}
                rows={1}
                value={message}
                onChange={handleInputChange}
                placeholder="پاسخ خود را بنویسید..."
                className="flex-grow border-none outline-none max-sm:text-sm resize-none bg-transparent text-sm px-2 max-h-20 sm:max-h-40 overflow-y-auto textbox-textarea"
            />
        </div>
    );
}

export default TextBox
