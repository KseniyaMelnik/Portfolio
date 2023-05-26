import {SectionWrapper} from "../hoc";
import {socials} from "../constants";

const Footer = () => {
    return (
        <div className='flex justify-between items-center gap-10 flex-col sm:flex-row'>
         <div className='flex gap-5'>
             {socials.map(({name, link, icon})=> (
                 <div key={name} className='w-9 h-9 rounded cursor-pointer bg-white p-1'
                      onClick={() => window.open(link, "_blank")}
                 >
                     <img src={icon} alt={name}/>
                 </div>
             ))}
         </div>
            <p className='text-secondary text-[14px] mt-2'>@2023 all rights reserved</p>
        </div>
    )
}

export default SectionWrapper(Footer, '')