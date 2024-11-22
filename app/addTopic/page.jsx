export default function AddTopic() {
    return(
        <>
         <form className="flex flex-col gap-3">
            <input 
             type="text" placeholder="Topic Title"
             className="border border-slate-600 px-8 py-2">
            </input>

            <input 
             type="text" placeholder="Topic Description"
             className="border border-slate-600 px-8 py-2">
            </input>

            <button className="bg-green-600 w-fit px-6 py-3 font-bold text-white">Add Topic</button>
         </form>
        </>
    )
}