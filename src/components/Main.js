import BlogContainer from "./BlogContainer";

const Main = () => {

    return (
        <div className="w-scren grid grid-flow-col divide-x">
            <BlogContainer></BlogContainer>
            <div className="col-span-6">
                <div className="m-auto mt-24 max-w-md">
                    <div className="font-semibold text-lg mb-4">Most Viewd</div>
                    <div className="mt-4 mb-4">
                        <div className="flex">
                            <div className="mt-[2px] relative col-span-0.5 inline-flex items-center justify-center w-4 h-4 overflow-hidden bg-gray-600 rounded-full">
                                <span className="text-sm text-green-600 dark:text-gray-300">R</span>
                            </div>
                            <div className="ml-2 text-sm font-semibold">Rohit Baisane</div>
                        </div>
                        <div className="font-bold text-l max-w-sm">Context in Android, Always used but never understood what it is?</div>
                    </div>
                    <div className="mt-4 mb-4">
                        <div className="flex">
                            <div className="mt-[2px] relative col-span-0.5 inline-flex items-center justify-center w-4 h-4 overflow-hidden bg-gray-600 rounded-full">
                                <span className="text-sm text-green-600 dark:text-gray-300">R</span>
                            </div>
                            <div className="ml-2 text-sm font-semibold">Rohit Baisane</div>
                        </div>
                        <div className="font-bold text-l max-w-sm">Context in Android, Always used but never understood what it is?</div>
                    </div>
                    <div className="mt-4 mb-4">
                        <div className="flex">
                            <div className="mt-[2px] relative col-span-0.5 inline-flex items-center justify-center w-4 h-4 overflow-hidden bg-gray-600 rounded-full">
                                <span className="text-sm text-green-600 dark:text-gray-300">R</span>
                            </div>
                            <div className="ml-2 text-sm font-semibold">Rohit Baisane</div>
                        </div>
                        <div className="font-bold text-l max-w-sm">Context in Android, Always used but never understood what it is?</div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Main;