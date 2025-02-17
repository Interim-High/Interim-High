import Link from 'next/link';

const NotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 text-center">
      <div className="max-w-md p-6 bg-white shadow-lg rounded-lg">
        <h1 className="text-4xl font-bold text-red-600">404</h1>
        <p className="mt-2 text-xl text-gray-600">Oops! The page you're looking for doesn't exist.</p>
        <Link href="/" passHref>
          <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Go Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;