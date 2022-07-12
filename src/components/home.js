
export default function home()
{
   return <>
        <div className="bg-gray-800 h-screen text-white">
            
            <div className="flex justify-center">
                <img src={process.env.PUBLIC_URL+"images/home.svg"} ></img>
            </div>
        </div>
   </>
}