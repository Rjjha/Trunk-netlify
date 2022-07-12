export default function Benefits(props)
{
    return <>
           <div className="h-20 border border-slate-50 w-80 flex flex-row items-center rounded-2xl ">
            <div className="h-10 w-8 bg-white ml-3">
                 
            </div>
            <div>
                  <h1 className="text-slate-100 ml-4">{props.content}</h1>
            </div> 
           </div>
    </>
}