import Image from 'next/image';
import Link from 'next/link';

const NotFound = () => {
  return (
 
      <div className="flex flex-col justify-center items-center w-full h-screen p-6 bg-gradient-to-br from-orange-200 via-gray-300 to-gray-200 shadow-lg rounded-lg">
       <Image
       src= "/images/error.png"
       alt='error page'
       height= {600}
       width={600}

       />
        <p className="mt-2 text-2xl text-red-600">Oops! The page you're looking for doesn't exist.</p>
        <Link href="/" passHref className='text-xl font-semibold text-orange-600 p-4  rounded-full  mt-2 border border-orange-600 hover:bg-orange-600 hover:text-white'>
         Go to home
         </Link>
      </div>
    
  );
};

export default NotFound;