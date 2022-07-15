
export default function home()
{
   return <>
        <div className="h-screen text-white">
            
            <div className="flex justify-center">
                <img src={process.env.PUBLIC_URL+"images/home.svg"} ></img>
            </div>
        </div>
   </>
}