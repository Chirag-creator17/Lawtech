const SearchLawyer = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="flex-auto px-8 py-2">
        <div className="text-5xl font-semibold">
          Match Your Legal Needs With the Perfect Lawyer
        </div>
        <div className="mt-5">
          Skilled attorneys are just a search away. Start browsing by legal
          issue, practice area, or location for free.
        </div>
        <div className="flex flex-auto mt-12">
          <input
            className="bg-[#F6F7FA] p-3 rounded focus:outline-none"
            placeholder="Practice area, legal issue"
            type="text"
            name="search"
          />
          <input
            className="bg-[#F6F7FA] p-3 border-solid border-l-2 rounded w-24 lg:w-64 focus:outline-none"
            placeholder="State, city"
            type="text"
            name="search"
          />
          <button className="bg-[#3D00B7] text-white rounded px-2">
            Find a Lawyer
          </button>
        </div>
      </div>
      <div className="flex flex-auto justify-center">
        <img src="./cuate.jpg" className="object-contain" alt="hiii" />
      </div>
    </div>
  );
};
export default SearchLawyer;
