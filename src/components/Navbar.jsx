const Navbar = () => {
    return (
        <nav className="w-full h-20 bg-red-400 flex justify-between items-center px-9">
            <div className="flex items-center gap-10">
                <h2 className="text-4xl text-white font-bold max-w-fit">Kalvium</h2>
                <div className="flex item-center gap-7">
                    <p className="text-xl text-white">About us</p>
                    <p className="text-xl text-white">Contacts</p>
                    <p className="text-xl text-white">Courses</p>
                </div>
            </div>
            <div>
                <button className="border border-slate-200 px-4 py-2 rounded text-slate-200">Login</button>
            </div>
        </nav>
    )
}

export default Navbar