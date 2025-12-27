import { useEffect, useRef, useState } from "react";
import { countersData } from "../../Data/AboutData";
import { TiPlus } from "react-icons/ti";

function Counter() {
  const sectionRef = useRef(null);
  const hasStarted = useRef(false);

  const [counts, setCounts] = useState(countersData.map(() => 0));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted.current) {
          hasStarted.current = true;
          startCounting();
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const startCounting = () => {
    countersData.forEach((counter, index) => {
      let start = 0;
      const end = counter.value;
      const duration = 500;
      const stepTime = Math.floor(duration / end);

      const timer = setInterval(() => {
        start += 1;

        setCounts((prev) => {
          const newCounts = [...prev];
          newCounts[index] = start;
          return newCounts;
        });

        if (start === end) {
          clearInterval(timer);
        }
      }, stepTime);
    });
  };

  return (
    // <section className="border w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 justify-center items-center bg-[#F6EEE3] py-14">
    //   <div className="main flex flex-row w-full border"
    //    ref={sectionRef}>
    //     {countersData.map((item, index) => (
    //       <div key={item.id} className="border p-5">
    //         <h2 style={{ fontSize: "80px", fontWeight: "bold" }}>
    //           {counts[index]}
    //           <span style={{ marginLeft: "4px" }}>+</span>
    //         </h2>
    //         <p>{item.label}</p>
    //       </div>
    //     ))}
    //   </div>
    // </section>

    <section className=" w-full flex flex-col justify-between items-center bg-[#F6EEE3] py-14">
      <div className="main  border-blue-900">
        <div
          ref={sectionRef}
          className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 justify-center items-center"
        >
          {countersData.map((item, index) => (
            <div
              key={item.id}
              className="soft-shadow border-2 rounded-lg w-full h-35 border-black flex flex-col justify-center items-center gap-2  p-[30px]  transition-all duration-1500 hover:scale-110 hover:bg-[#f0eeeb]"
            >
              <div className="flex justify-center items-center gap-1">
                <h2 className="mainHeading text-black">{counts[index]}</h2>
                <TiPlus className="icon text-black" />
              </div>
              <p className="mainParagraph">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Counter;
{
  /* <span className="ml-1"></span> */
}
