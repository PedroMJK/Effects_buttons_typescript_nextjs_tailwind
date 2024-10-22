import Link from "next/link"


export default function Button() {
    return (
        <>
            <div>
                <Link href="" >
                    <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded hover:scale-105 hover:bg-gradient-to-l transition-transform duration-300">
                        <span className=" text-center font-bold">
                            Click here
                        </span>
                    </button>
                </Link>
                <p className="text-black font-semibold pt-2 pl-5">Button 03</p>
            </div>
        </>
    ) 
}