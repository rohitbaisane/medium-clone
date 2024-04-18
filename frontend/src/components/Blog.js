const Blog = ({ title, description }) => {

    return (
        <div className="mt-8 mb-4">
            <div className="flex">
                <div className="mt-[2px] relative col-span-0.5 inline-flex items-center justify-center w-4 h-4 overflow-hidden bg-gray-600 rounded-full">
                    <span className="text-sm text-green-600 dark:text-gray-300">R</span>
                </div>
                <div className="ml-2 text-sm">Rohit Baisane</div>
                <div className="ml-2 text-sm text-slate-500">Jan 25, 2024</div>
            </div>
            <div className="mt-1 font-bold text-xl max-w-lg">{title}</div>
            <div className="mt-2 max-w-lg text-align-left text-sm text-slate-700">{description}</div>
        </div>
    )
}

export default Blog;