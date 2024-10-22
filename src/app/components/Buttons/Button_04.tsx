import Link from "next/link"


export default function Button() {
    return (
        <>
            <div >
                <Link href="" className="w-full gap-2" >
                    <button className="text-blue-500 font-semibold px-4 py-2 bg-white items-center justify-center transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 rounded relative hover:before:content-[''] hover:before:absolute hover:before:bottom-0 hover:before:left-0 hover:before:w-full hover:before:h-1 hover:before:bg-blue-500 transition-all duration-300">
                        <span className=" text-center font-bold ">
                            Click here
                        </span>
                    </button>   
                </Link>
                    <p className="text-black font-semibold pt-2 pl-5">Button 04</p>
             
            </div>
        </>
    ) 
}