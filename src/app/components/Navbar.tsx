import Link from "next/link"

export default function Navbar(){

    return(
        <div className=" h-16 w-full py-4 px-6  lg:px-16 flex justify-between bg-transparent shadow-lg">
            <Link href={'/'}>
                <div className=" cursor-pointer text-gray-800 text-4xl"> <span className="text-cyan-400">Fake</span>Store</div>
            </Link>
            <div className="hidden lg:block">
                <div className=" flex gap-5 text-gray-800 text-xl ">
                    <div  className=" hover:border-b-2 hover:border-cyan-400 hover:-translate-y-1 hover:scale-110 transition-all duration-500 cursor-pointer">About</div>
                    <div  className=" hover:border-b-2 hover:border-cyan-400 hover:-translate-y-1 hover:scale-110 transition-all duration-500 cursor-pointer">Contact</div>
                    <div  className=" hover:border-b-2 hover:border-cyan-400 hover:-translate-y-1 hover:scale-110  transition-all  duration-500 cursor-pointer">Projects</div>
                </div>
            </div>
             <div className="lg:hidden">
                Menu
             </div>
        </div>
    )
}