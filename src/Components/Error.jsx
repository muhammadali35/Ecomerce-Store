

const ErrorMessage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-red-500 mb-4">
          Sorry, no products match your search...
        </h1>
        <p className="text-gray-700">Please try again with a different keyword.</p>
      </div>
    </div>
  );
};

export default ErrorMessage;
