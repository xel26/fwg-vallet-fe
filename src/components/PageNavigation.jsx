import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

const PageNavigation = ({totalPage, currentPage, handleNext, handlePrev, handlePage}) => {
    const pages = []
    for(let i = 1; i <= totalPage; i++){
      pages.push(i)
    }
  
    return (
      <div className="flex justify-end gap-4">
        {currentPage > 1 && (
          <button onClick={handlePrev} className={`active:scale-95 transition-all w-6 h-6 rounded-md text-white bg-[#4F5665] flex justify-center items-center active:bg-[#764abc]`}>
            <FiArrowLeft/>
          </button>
        )}
  
        {
          pages.map((item, index) => {
            let display = item >= currentPage - 2 && item <= currentPage + 2
            return ( display &&
              <button onClick={(e) => handlePage(e, item)} key={index} className={`${currentPage == item ? "text-white bg-[#764abc]" : "text-white bg-[#4F5665]"} w-6 h-6 rounded-md active:scale-90 transition-all`}>
                {item}
              </button>
            )
          })
        }
  
        {currentPage != totalPage && totalPage > 1 && (
          <button onClick={handleNext} className={`active:scale-95 transition-all w-6 h-6 rounded-md text-white bg-[#4F5665] flex justify-center items-center active:bg-[#764abc]`}>
            <FiArrowRight/>
          </button>
        )}
      </div>
    );
  };

  export default PageNavigation;