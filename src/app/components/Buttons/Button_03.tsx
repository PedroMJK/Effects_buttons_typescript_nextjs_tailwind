import Link from "next/link"


export default function Button() {
    return (
        <>
            <div>
                <Link href="" >
                    <button className="bg-white hover:bg-blue-800 to-black rounded-full border-2 border-blue-800 hover:border-transparent text-blue-800 hover:text-white relative py-2 px-10 items-center justify-center transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110">
                        <span className=" text-center font-bold">
                            Click here
                        </span>
                    </button>
                </Link>
                <p className="text-black font-semibold pt-2 pl-10">Button 03</p>
            </div>
        </>
    ) 
}