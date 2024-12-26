const myblog = [
    {name:"you can just do things", note: ""},
    {name: "the pandemic called procastination", note: ""},
    {name: "my tech journey. the wins and the loose", note: ""},
    {name: "how to know what to do", note: ""}
]

const blogs = () => {

    return (
        <div className=" mt-32  justify-center h-96  grid lg:grid-cols-4 gap-x-6 gap-y-6 p-2 sm:grid-cols-1">
             
              {myblog.map((blogs, index) => (
                    <div key={index}
                    className="px-4 py-32 bg-gradient-to-l  from-blue-700 via-slate-700 to-black-900 justify-center text-center rounded-3xl text-2xl text-white hover:bg-slate-600 transition-all "
                    >
                        <h1>{blogs.name}</h1>
                    </div>
                ))}
          
          
        </div>
    )
}


export default blogs