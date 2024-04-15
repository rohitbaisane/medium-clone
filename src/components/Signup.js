const Signup = () => {

    return (
        <div className="w-screen h-screen grid md:grid-cols-2 grid-cols-1">
            <div className="h-screen flex flex-row justify-center md:m-auto">
                <div className="mt-48 w-96 max-w-[300]">
                    <div className="max-w-md text-3xl font-bold">Create an account</div>
                    <div className="text-slate-400 mb-2">Already have an account?<a className="underline">Login</a></div>
                    <form className="flex flex-col">
                        <label className="block font-semibold">Username</label>
                        <input className="block rounded-md mb-2 mt-1 p-[2] border-2 text-slate-600 " type="text" placeholder="Enter your username"></input>
                        <label className="block font-semibold">Email</label>
                        <input className="block rounded-md p-[2] mt-1 mb-2 border-2 text-slate-600" type="text" placeholder="m@example.com"></input>
                        <label className="block font-semibold">Password</label>
                        <input className="block rounded-md p-[2] mt-1 mb-2 border-2 text-slate-600" type="text" placeholder="1234567"></input>
                        <button className="bg-slate-900 rounded-md text-slate-100 mt-3 p-2">Sign up</button>
                    </form>
                </div>
            </div>
            <div className="h-[100%] md:flex justify-center flex-col bg-slate-200">
                <div className="m-auto">
                    <div className="max-w-md text-2xl text-left font-bold">
                        "Programming today is a race between software engineers striving to build bigger and better idiot-proof programs and the Universe trying to produce bigger and better idiots. So far, the Universe is winning."
                    </div>
                    <div className="max-w-md text-xl mt-4 font-semibold">Rick Cook</div>
                    <div className="text-slate-400 text-sm max-w-md mt-0.5">Computer Hacker | Author</div>
                </div>
            </div>
        </div >
    )
}

export default Signup;