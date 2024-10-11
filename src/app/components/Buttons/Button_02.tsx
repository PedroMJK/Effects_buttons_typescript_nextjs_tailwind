import Link from "next/link"


export default function Button() {
    return (
        <>
            <div className="">
                <Link href="" >
                    <button className="bg-gradient-to-r from-blue-900 via-blue-700 to-black rounded-full relative py-2 px-10 items-center justify-center transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110">
                        <span className="text-white text-center font-bold">
                            Click here
                        </span>
                    </button>
                </Link>
                <p className="text-black font-semibold pt-2 pl-10">Button 02</p>
            </div>
        </>
    ) 
}