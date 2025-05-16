const FormatTime = (timeMs) => {
    const validTimeMs = Math.max(0, timeMs); // Ensure time is not negative

    const seconds = Math.floor((validTimeMs / 1000) % 60);
    const minutes = Math.floor((validTimeMs / (1000 * 60)) % 60);
    const hours = Math.floor((validTimeMs / (1000 * 60 * 60)) % 24);
    const days = Math.floor(validTimeMs / (1000 * 60 * 60 * 24));

    return (
      <div className="flex space-x-2  py-8 ">
        <div className="flex flex-col items-center ">
          <span className="text-[40px] font-bold ">{days.toString().padStart(2, "0")} :</span><span className="uppercase">days</span>
        </div> 
        <div className="flex flex-col items-center">
        <span className="text-[40px] font-bold ">{hours.toString().padStart(2, "0")} :</span> <span>hours</span>
        </div>
        <div className="flex flex-col items-center">
        <span className="text-[40px] font-bold ">{minutes.toString().padStart(2, "0")} :</span> <span>minutes</span>
        </div>
        <div className="flex flex-col items-center">
        <span className="text-[40px] font-bold ">{seconds.toString().padStart(2, "0")} </span><span>seconds</span>
        </div>
      </div>
    );
  };

  export default FormatTime