import type { NextPageWithLayout } from './_app';
import Footer from '../components/footer';
import Layout from '../components/layout';
import Image from 'next/image';

const Home: NextPageWithLayout = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-row mt-6">

        <div className="w-[470px] flex flex-col space-y-4 pb-8">

          <div className="bg-white border rounded-lg flex flex-col">

            <div className="p-2 flex flex-row items-center justify-between">
              <div className="flex flex-row items-center">
                <Image className='rounded-full' src="/pic5.jpg" width={40} height={40} layout='fixed' alt='profile' />
                <div className="pl-4">
                  <p className="font-medium">Fah Sujitra</p>
                  <p className="text-slate-500">Bangkok, Thailand</p>
                </div>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
              </svg>
            </div>

            <div className='relative h-[470px]'>
              <Image src="/pic3.jpg" objectFit="cover" layout='fill' alt='profile' />
            </div>

          </div>

          <div className="bg-white border rounded-lg flex flex-col">

            <div className="p-2 flex flex-row items-center justify-between">
              <div className="flex flex-row items-center">
                <Image className='rounded-full' src="/pic5.jpg" width={40} height={40} layout='fixed' alt='profile' />
                <div className="pl-4">
                  <p className="font-medium">Fah Sujitra</p>
                  <p className="text-slate-500">Bangkok, Thailand</p>
                </div>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
              </svg>
            </div>

            <div className='relative h-[470px]'>
              <Image src="/pic3.jpg" objectFit="cover" layout='fill' alt='profile' />
            </div>

          </div>


        </div>


        <div className="xss:hidden lg:block p-6 w-[319px]">
          <div className="flex flex-row items-center">
            <Image className='rounded-full' src="/pic5.jpg" width={60} height={60} layout='fixed' alt='profile' />
            <div className="pl-4">
              <p className="font-medium">Fah Sujitra</p>
              <p className="text-slate-500">fahsujitra</p>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

Home.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export default Home;
