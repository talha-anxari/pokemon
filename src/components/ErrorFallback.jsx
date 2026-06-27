const ErrorFallback = ({ error, resetErrorBoundary }) => {
  return (
    <div className="text-center py-20">
      <h1 className="text-3xl font-bold">Something went wrong</h1>

      <p className="mt-4 text-red-500">{error.message}</p>

      <button
        onClick={resetErrorBoundary}
        className="mt-5 bg-black text-white px-5 py-2 rounded"
      >
        Try Again
      </button>
    </div>
  );
};

export default ErrorFallback;
