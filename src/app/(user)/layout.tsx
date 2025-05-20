import Header from '@/components/template/userPanel/Header';
import Menu from '@/components/template/userPanel/Menu';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <main className='bg-gradient-to-br from-[#fffad4] via-yellow-200 to-orange-300 min-h-screen md:flex md:items-center md:justify-center'>
      <div className="relative max-md:min-h-screen md:my-3 md:container md:mx-[10px] max-md:w-full backdrop-blur-md bg-white/30 md:rounded-xl shadow-lg border border-white/40 md:p-6 text-gray-800">
        <div className="grid md:grid-cols-9">
          <div className="md:col-span-2 max-md:absolute max-md:top-5 max-md:left-2">
            <div className='md:sticky md:top-4'>
              <Menu />
            </div>
          </div>
          <div className="md:col-span-7">
            <div className='md:rounded-tr-3xl overflow-hidden md:border-r-4 border-white/40'>
              <div className='mb-20 md:mb-30 user-panel-image-container flex items-bottom justify-start pr-3 sm:pr-8'>
                <Header/>
              </div>
              <div className='max-md:px-3 md:pr-3 min-h-[300px]'>
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}