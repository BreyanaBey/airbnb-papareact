import Image from "next/image";

function Banner () {
    return (
        <div className="relative h-[300px] sm:h-[500px] lg:h-[600px] xl:h-[700px] 2xl:h-[800px]">

            {/* image */}
            <Image 
                src="https://links.papareact.com/0fm"
                layout="fill"
                objectFit="cover"
            />

            {/* text overlay */}
            <div className="absolute top-1/2 w-full text-center">
                <p className="text-sm sm:text-lg font-semibold">Not sure where to go? Perfect.</p>
                <button className="text-purple-500 bg-white p-5 rounded-full shadow-md font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150">I'm flexible</button>
            </div>
        </div>
    );
}

export default Banner;
