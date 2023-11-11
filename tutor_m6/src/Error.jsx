import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="flex flex-col w-full h-screen justify-center items-center gap-y-4">
      <div className="text-xl font-semibold">Page is error</div>
      <Link to="/" className="text-blue-700">Go back</Link>
    </div>
  );
};

export default Error;
