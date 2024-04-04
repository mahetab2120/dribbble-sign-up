

export default function TextInput({txtValue}){
    return(
        <>
            <span className="font-bold">{txtValue}</span> <br/> <input type={txtValue=="Password"?"password":txtValue=="Email"?"email":"text"} className='bg-[#f3f3f3] mt-1 px-3 py-2 shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1' placeholder={txtValue=="Password"?"6+ characters":txtValue}/>
        </>
    )
}