const PageNavigation = ({totalPage=50, currentPage=10, handleDisable=false}) => {
    const pages = []
    for(let i = 1; i <= totalPage; i++){
      pages.push(i)
    }
  
    return (
      <div className="flex gap-4 ">
        <button disabled={handleDisable} className={`${handleDisable ? 'text-[#4F5665]' : 'text-black active:scale-90'} transition-all`}>
          Prev
        </button>
  
        {
          pages.map((item, index) => {
            let display = item >= currentPage - 4 && item <= currentPage + 4
            return ( display &&
              <button key={index} className={`${currentPage == item ? "text-[#764abc]" : "text-[#4F5665]"} active:scale-90 transition-all text-sm`}>
                {item}
              </button>
            )
          })
        }
  
        <button disabled={handleDisable} className={`${handleDisable ? 'text-[#4F5665]' : 'text-black active:scale-90'} transition-all`}>
          Next
        </button>
      </div>
    );
  };

  export default PageNavigation;