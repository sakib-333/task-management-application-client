const LoadingSpinner = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <span className="loading loading-spinner loading-lg"></span>
        <h1>Loading...</h1>
      </div>
    </div>
  );
};

export default LoadingSpinner;
