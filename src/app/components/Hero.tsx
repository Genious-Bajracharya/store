export default function Hero() {

    return (
        <div className="relative flex items-center justify-center h-screen px-4 sm:px-8 md:px-16 lg:px-24 bg-cover bg-center"
        style={{
            backgroundImage: `url('https://img.freepik.com/free-photo/beautiful-second-hand-market_23-2149353670.jpg?w=1060&t=st=1694020688~exp=1694021288~hmac=ddfa55337fcdbc69285b120417777daad627fee8511308efd1ff13a927db0ec5')`, 
        }}
        >
            
            <div className="absolute text-white text-center md:text-left lg:left-16">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                    {`Welcome to `}
                    <span className="text-cyan-500">Fake</span> Store
                </h1>
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl">Best online store with every product you need!</h2>
            </div>
        </div>
    );
}