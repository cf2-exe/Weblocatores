export default function Footer() {
    return (
      <section className="fixed w-full bottom-0 h-[100vh] flex flex-col gap-[8rem] py-[2rem] bg-[#2563EB]">
        <div className="flex justify-between w-full px-[5rem] items-center">
            <h1 className="text-[2rem] text-black">Weblocators</h1>

            <ul className="flex gap-[2rem] text-black">
                <li className="cursor-pointer">Work</li>
                <li className="cursor-pointer">About</li>
                <li className="cursor-pointer">Contact</li>
            </ul>
        </div>


        <div className="flex flex-col px-[2rem] gap-[4rem]">
            <div className="flex flex-col justify-center text-black">
               <h1 className="text-[10rem] tracking-wide">Get in touch</h1> 
               <a className="text-[4rem] underline cursor-pointer">contactus@weblocators.com</a>
            </div>

            <div className="flex flex-col gap-[3rem] pb-[3rem] text-black">
                <h1 className="text-[3rem]">Socials</h1>
                <div className="grid grid-cols-[repeat(3,_1fr)] grid-rows-[repeat(2,_1fr)] gap-2 list-none w-[50%] text-black">
                    <li>Instagram</li>
                    <li>linkedIn</li>
                    <li>Facebook</li>
                    <li>twitter</li>
                    <li>Pintrest</li>
                    <li>Youtube</li>
                </div>
            </div>
            

        </div>

      </section>
    )

}
