export default function Team(props)
{
    return (<>
       <div className="h-20">
        <div className="border-4 rounded-full border-slate-50 m-3 p-8 ">
            <div className="h-16 w-16 text-center">
             <h1 className="text-6xl text-slate-100 font-bold ">{props.value}</h1>
             </div>
        </div>
        <div className="text-lg text-slate-100 ">
        <h1>{props.content}</h1>
        </div>
       </div>

    </>)
}