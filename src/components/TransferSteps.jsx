const Step = ({steps, value}) => {
    return (
      <div className="flex items-center gap-4">
        <div className={`rounded-full ${document.URL.endsWith('transfer') && steps == 1 ? 'bg-[#764abc]' : document.URL.includes('transfer-detail') && steps == 2 ? 'bg-[#764abc]' : 'bg-[#4F5665]'}  w-5 h-5 flex justify-center items-center text-white`}>
          {steps}
        </div>
        <div className={`${document.URL.endsWith('transfer') && steps == 1 ? 'text-[#764abc]' : document.URL.includes('transfer-detail') && steps == 2 ? 'text-[#764abc]' : 'text-[#4F5665]'}`}>{value}</div>
      </div>
    );
}


export const TransferSteps = () => {
    return (
        <div className="hidden sm:flex items-center gap-4">
        <Step steps={1} value="Find People" />
        <hr className="border-[#4F5665] border-dashed h-0 w-12 " />
        <Step steps={2} value="Set Nominal" />
        <hr className="border-[#4F5665] border-dashed h-0 w-12 " />
        <Step steps={3} value="Finish" />
      </div>
    )
}

export default TransferSteps