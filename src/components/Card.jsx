const Card = () => {
    return (
        <div className="w-2/6 border h-[150px] border-gray-100 flex justify-evenly items-center gap-5 rounded" style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}>
            <img src="https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/Kalvium-Logo.png" alt="Kalvium Logo" />
            <div>
                <h3 className="text-xl">Kalvium Store</h3>
                <p className="text-gray-500">You have a new course!</p>
            </div>
        </div>
    )
}

export default Card