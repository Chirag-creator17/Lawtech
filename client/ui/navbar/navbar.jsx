import LoginComponent from "./login";
import CreateAccount from "./createAccount";
import Link from "next/link";
const Navbar = ({ isLoggedIn }) => {
  return (
    <>
      <div className="flex flex-row p-2 items-center my-3">
        <Link href="/" className="text-2xl font-extrabold text-[#3D00B7] ml-8 lg:mr-16 mr-10">
          LawMate
        </Link>
        <div className="flex flex-row text-md">
          <div className="lg:mr-8 mr-5">Find a Lawyer</div>
          <div className="lg:mr-8 mr-5">Get Started</div>
          <div className="lg:mr-8 mr-5">Other services</div>
        </div>
        <div className="flex flex-auto justify-end">
          <input
            className=" bg-white rounded-[100px] border-2 border-solid border-[#efefef] py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm lg:mr-5 mr-2 w-64 lg:w-80"
            placeholder="Search for anything..."
            type="text"
            name="search"
          />
          {/* <button className=" bg-[#3D00B7] text-white rounded-[60px] lr:mr-5 mr-2 px-6 py-0.5 lg:py-2">
              Login
            </button> */}
          {isLoggedIn ? (
            <div className="text-xl mr-9 mt-1">
              Welcome User
            </div>
          ) : (
            <>
              <LoginComponent />
              <CreateAccount />
            </>
          )}
        </div>
      </div>
      <hr />
    </>
  );
};

export default Navbar;
