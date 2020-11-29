function App() {
    return (
        <div className="w-full flex justify-center items-center min-h-screen">
            <div className="w-full flex flex-col max-w-min">
                <div className="flex bg-gray-200 hover:bg-gray-400 flex-initial p-16 pointer-events-auto">
                    <button className="bg-green-500 duration-300 hover:bg-green-700 hover:cursor-pointer p-4 m-4 focus:outline-none border-none rounded text-sm">
                        Buy
                    </button>

                    <button className="bg-purple-500 duration-300 hover:bg-purple-700 sm:hover:bg-purple-900 hover:cursor-pointer transform hover:-translate-x-0 hover:-translate-y-0 active:scale-90 p-4 m-4 focus:outline-none border-none rounded">
                        Buy
                    </button>

                    <button className="bg-purple-500 duration-300 hover:bg-purple-700 hover:cursor-pointer p-4 m-4 focus:outline-none active:outline-none border-none rounded text-2xl">
                        Buy
                    </button>
                </div>
                <div className="bg-gray-800 flex flex-wrap mt-4 p-8">
                    <div className="w-1/3 p-2">
                        <div className="bg-gray-100 w-full h-16 flex justify-center items-center">
                            1
                        </div>
                    </div>
                    <div className="w-1/3 flex p-2">
                        <div className="bg-gray-200 w-full h-16 flex justify-center items-center">
                            2
                        </div>
                    </div>
                    <div className="w-1/3 p-2">
                        <div className="bg-gray-300 w-full h-16 flex justify-center items-center">
                            3
                        </div>
                    </div>
                    <div className="w-1/3 p-2">
                        <div className="bg-gray-400 w-full h-16 flex justify-center items-center">
                            4
                        </div>
                    </div>
                    <div className="w-1/3 p-2">
                        <div className="bg-gray-500 w-full h-16 flex justify-center items-center">
                            5
                        </div>
                    </div>
                    <div className="w-1/3 p-2">
                        <div className="bg-gray-600 w-full h-16 flex justify-center items-center">
                            6
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
