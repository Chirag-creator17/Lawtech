const Ecosystem = () => {
  return (
    <div>
      <div className="flex-auto mt-10 mb-10 mx-8 bg-[#F2F2FE] rounded">
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col p-8 items-start lg:ml-12">
            <div className="text-2xl font-semibold">Are You a Lawyer?</div>
            <div className="mt-3">
              Check out how we can get you more leads for free. Build your brand
              and become more visible online.
            </div>
            <button className="bg-[#3D00B7] text-white p-2 rounded lg:mt-8 mt-5">
              Get Started
            </button>
          </div>
          <div className="py-4 px-6 flex flex-auto justify-center">
            <img src="/lawyers.png" className="object-contain" alt="hiii" />
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-10 mb-10 mx-8 items-center">
        <div className="font-semibold text-2xl mb-2">
          The Ultimate Legal Ecosystem
        </div>
        <div>
          We cover every step of your legal journey, whether you're a client or
          a lawyer.
        </div>
        <div className="grid grid-cols-2 gap-4 lg:gap-10 mt-10">
          <div className="flex flex-col items-start py-2 pr-5 pl-2">
            <div className="font-[600]">Match</div>
            <div className="text-[#616778] mt-4">
              Searchable directory of qualified lawyers across India
            </div>
            <div className="text-[#9499AA] mt-2">
              Get instant legal assistance with your issue.
            </div>
            <button className="mt-6 text-[#00E]">Find Lawyer {">"} </button>
          </div>
          <div className="flex flex-col items-start py-2 pr-5 pl-2">
            <div className="font-[600]">Tool</div>
            <div className="text-[#616778] mt-4">
              AI-driven tool for contract drafting and review
            </div>
            <div className="text-[#9499AA] mt-2">
              Use our software to remove errors and have all clauses at hand.
            </div>
            <button className="mt-6 text-[#00E]">Try {">"} </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Ecosystem;
