import Image from 'next/image'
import React from 'react'
import enamadImage from '@images/enamad.png'
import Link from 'next/link'
import LevelQuiz from '../template/footer/LevelQuiz'
import PopularCourses from '../template/footer/PopularCourses'
import FooterLinks from '../template/footer/FooterLinks'

function Footer() {
  return (
    <footer className="mt-5 pt-10 pb-3 bg-custom-dark-blue rounded-t-2xl shadow-center max-lg:text-sm max-sm:text-[12px]">
        <div className="container mx-auto">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-y-3">
                <div className="flex flex-col items-start">
                    <h6 className="pb-2 mb-2 font-bold text-custom-blue border-b-2 border-custom-blue border-solid">لینک های مرتبط</h6>
                    <ul>
                        <LevelQuiz/>
                        <li><Link href="/courses">دوره ها</Link></li>
                        <li><Link href="/books">کتاب های آموزشی</Link></li>
                        <li><Link href="/articles">مقالات</Link></li>
                        <li><Link href="/contact">تماس با ما</Link></li>
                        <li><Link href="/about-us">درباره ما</Link></li>
                    </ul>
                </div>
                <div className="flex flex-col items-start">
                    <h6 className="pb-2 mb-2 font-bold text-custom-blue border-b-2 border-custom-blue border-solid">لینک های مرتبط</h6>
                    <FooterLinks/>
                </div>
                <div className="flex flex-col items-start">
                    <h6 className="pb-2 mb-2 font-bold text-custom-blue border-b-2 border-custom-blue border-solid">دروه های پر طرفدار</h6>
                    <PopularCourses/>
                </div>


                <div className="flex flex-col items-start">
                    <h6 className="pb-2 mb-2 font-bold text-custom-blue border-b-2 border-custom-blue border-solid">راه های ارتباطی</h6>
                    <dl className="text-[#eee]">
                        <dt>شماره تماس :</dt>
                        <dd className="sm:mr-5 sm:text-end">09395376021</dd>
                        <dt>ایمیل :</dt>
                        <dd className="sm:mr-5 sm:text-end">mohsen.wsx@gmail.com</dd>
                    </dl>
                    <div className="flex items-center gap-x-2 mt-1">
                        <Link href="https://t.me/Smms_saee" rel='noopener noreferrer' target='_blank'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#eee" className="bi bi-telegram" viewBox="0 0 16 16">
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.287 5.906q-1.168.486-4.666 2.01-.567.225-.595.442c-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294q.39.01.868-.32 3.269-2.206 3.374-2.23c.05-.012.12-.026.166.016s.042.12.037.141c-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8 8 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629q.14.092.27.187c.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.4 1.4 0 0 0-.013-.315.34.34 0 0 0-.114-.217.53.53 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09"/>
                              </svg>
                        </Link>
                        <Link href="https://www.instagram.com/m_s_moosavi_" rel='noopener noreferrer' target='_blank'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#eee" className="bi bi-instagram" viewBox="0 0 16 16">
                                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
                              </svg>
                        </Link>
                        <Link href="https://eitaa.com/m_s_moosavi" rel='noopener noreferrer' target='_blank'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#eee" viewBox="0 0 3584.55 3673.6">
                                <g id="Isolation_Mode" data-name="Isolation Mode">
                                  <path d="M1071.43,2.75H2607.66C3171,2.75,3631.82,462.91,3631.82,1026.2v493.93c-505,227-1014.43,1348.12-1756.93,1104.51-61.16,43.46-202.11,222.55-212,358.43-257.11-34.24-553.52-328.88-517.95-646.62C717,2026.91,1070.39,1455.5,1409.74,1225.51c727.32-492.94,1737.05-69,1175.39,283.45-341.52,214.31-1071.84,355.88-995.91-170.24-200.34,57.78-328.58,431.34-87.37,626-223.45,219.53-180.49,623.07,58.36,755.57,241.56-625.87,1082.31-544.08,1422-1291.2,255.57-562-123.34-1202.37-880.91-1104C1529.56,399.34,993.64,881.63,725.62,1453.64,453.68,2034,494.15,2811.15,1052.55,3202.82c657.15,460.92,1356.78,34.13,1780.52-523.68,249.77-328.78,468-693,798.75-903.37v875.72c0,563.28-460.88,1024.86-1024.16,1024.86H1071.43c-563.29,0-1024.16-460.87-1024.16-1024.16V1026.9C47.27,463.61,508.14,2.74,1071.43,2.74Z" transform="translate(-47.27 -2.74)" fillRule="evenodd"/>
                                </g>
                              </svg>
                        </Link>
                    </div>
                </div>

                <div className="justify-self-end max-md:grid max-md:grid-cols-subgrid max-md:col-span-2">
                    <Image src={enamadImage} width={100} height={100} alt="enamad" className="bg-white rounded-xl p-4 max-lg:max-w-[100px] max-md:mr-auto max-md:col-start-2"/>
                </div>
            </div>
            <hr className="h-[2px] bg-[#bdbdbd] mt-4"/>
            <p className="text-center my-3 text-[#bdbdbd]">تمامی حقوق مادی و معنوی سایت برای کلاس زبان محفوظ است.</p>
        </div>
    </footer>
  )
}

export default Footer
