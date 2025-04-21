import React from "react";
import CardQuiz from "./CardQuiz";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function PopularQuiz() {
    // const responsive = {
    //     superLargeDesktop: {
    //       // the naming can be any, depends on you.
    //       breakpoint: { max: 3000, min: 1200 },
    //       items: 5
    //     },
    //     desktop: {
    //       breakpoint: { max: 1200, min: 1024 },
    //       items: 4
    //     },
    //     tablet: {
    //       breakpoint: { max: 1024, min: 464 },
    //       items: 2
    //     },
    //     mobile: {
    //       breakpoint: { max: 464, min: 0 },
    //       items: 1
    //     }
    //   };

    return (
        <div className=""> 
            <div className="flex items-center justify-between py-2 px-4">
                <h1 className="text-richblack-600 md:text-2xl px-4 font-bold">
                    Popular Quiz
                </h1>
                <p className="text-blue-500 hover:scale-95 text-xl underline-offset-4 hover:underline">
                    View All
                </p>
            </div>
            <hr className="text-richblack-600" />
            <div className="flex flex-col md:flex-row gap-4 flex-wrap justify-between items-center py-4 px-4">
                {/* <div className="w-[90vw] ">  */}
                    {/* <Carousel autoPlay={true} swipeable={true}  responsive={responsive} > */}
                        <CardQuiz />
                        <CardQuiz />
                        <CardQuiz />
                        <CardQuiz />
                        {/* <CardQuiz /> */}
                    {/* </Carousel> */}
                {/* </div> */}
            </div>
        </div>
    );
}

export default PopularQuiz;
