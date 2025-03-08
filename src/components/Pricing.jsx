import { Check } from "lucide-react";

export default function Pricing() {
  return (
    <>
      <section className="h-fit my-[2rem] w-full flex items-center justify-center px-12 max-md:px-4 gap-4 max-lg:flex-col">
        <div className="p-4 h-fit flex flex-col gap-8 border border-[#eee] rounded-[10px] bg-[#f9fbfc]">
          <h1 className="text-[1.5rem] font-[500] text-[#2563EB]">Basic</h1>
          <div className="flex items-end gap-2">
            <h1 className="text-[3rem] font-[600]">$500 - $1,500</h1>
          </div>
          <p>
            Perfect for: Startups, personal projects, or small businesses
            needing a professional online presence without breaking the bank.
          </p>
          <hr className="text-[#eee] h-[1px] w-full" />

          <ul className="list-none flex flex-col gap-2">
            <div className="flex items-center gap-4">
              <Check className="text-[#2563EB]" size={14}></Check>
              <li>Up to 5 pages</li>
            </div>

            <div className="flex items-center gap-4">
              <Check className="text-[#2563EB]" size={14}></Check>
              <li>Responsive design</li>
            </div>

            <div className="flex items-center gap-4">
            <Check className="text-[#2563EB]" size={14}></Check>
              <li>Basic SEO</li>  
            </div>

            <div className="flex items-center gap-4">
            <Check className="text-[#2563EB]" size={14}></Check>
              <li>Contact form integration</li>  
            </div>

            <div className="flex items-center gap-4">
            <Check className="text-[#2563EB]" size={14}></Check>
               <li>Social media links</li> 
            </div>

            <div className="flex items-center gap-4">
            <Check className="text-[#2563EB]" size={14}></Check>
               <li>Basic analytics setup</li> 
            </div>
            
          </ul>
        </div>

        <div className="p-10 h-fit flex flex-col gap-8 border bg-[#1e1e1e] text-white border-[#eee] rounded-[10px]">
          <h1 className="text-[1.5rem] font-[500] text-[#5d8df5]">Standard</h1>
          <div className="flex items-end gap-2">
            <h1 className="text-[3rem] font-[600]">$1,500 - $5,000</h1>
          </div>
          <p>
            Perfect for: Startups, personal projects, or small businesses
            needing a professional online presence without breaking the bank.
          </p>
          <hr className="text-[#eee] h-[1px] w-full" />

          <ul className="list-none flex flex-col gap-2">
            <div className="flex items-center gap-4">
              <Check className="text-[#2563EB]" size={14}></Check>
              <li>Up to 10 pages</li>
            </div>

            <div className="flex items-center gap-4">
              <Check className="text-[#2563EB]" size={14}></Check>
              <li>E-commerce integration (Shopify, WooCommerce)</li>
            </div>

            <div className="flex items-center gap-4">
            <Check className="text-[#2563EB]" size={14}></Check>
              <li>Blog setup</li>  
            </div>

            <div className="flex items-center gap-4">
            <Check className="text-[#2563EB]" size={14}></Check>
              <li>Advanced SEO</li>  
            </div>

            <div className="flex items-center gap-4">
            <Check className="text-[#2563EB]" size={14}></Check>
               <li>Custom design elements</li> 
            </div>

            <div className="flex items-center gap-4">
            <Check className="text-[#2563EB]" size={14}></Check>
               <li>Basic content management system (CMS)</li> 
            </div>

            <div className="flex items-center gap-4">
            <Check className="text-[#2563EB]" size={14}></Check>
               <li>Integration with third-party tools (MailChimp, CRM)</li> 
            </div>
            
          </ul>
        </div>

        <div className="p-4 px-8 h-fit flex flex-col gap-8 border border-[#eee] rounded-[10px] bg-[#f9fbfc]">
          <h1 className="text-[1.5rem] font-[500] text-[#2563EB]">Custom</h1>
          <div className="flex items-end gap-2">
            <h1 className="text-[3rem] font-[600]">$5,000 - $15,000+</h1>
          </div>
          <p>
            Perfect for: Startups, personal projects, or small businesses
            needing a professional online presence without breaking the bank.
          </p>
          <hr className="text-[#eee] h-[1px] w-full" />

          <ul className="list-none flex flex-col gap-2">
            <div className="flex items-center gap-4">
              <Check className="text-[#2563EB]" size={14}></Check>
              <li>Unlimited pages</li>
            </div>

            <div className="flex items-center gap-4">
              <Check className="text-[#2563EB]" size={14}></Check>
              <li>Custom features (booking systems, complex forms)</li>
            </div>

            <div className="flex items-center gap-4">
            <Check className="text-[#2563EB]" size={14}></Check>
              <li>Advanced CMS (custom WordPress or headless CMS)</li>  
            </div>

            <div className="flex items-center gap-4">
            <Check className="text-[#2563EB]" size={14}></Check>
              <li>Enhanced e-commerce features </li>  
            </div>

            <div className="flex items-center gap-4">
            <Check className="text-[#2563EB]" size={14}></Check>
               <li>Custom animations and interactions</li> 
            </div>

            <div className="flex items-center gap-4">
            <Check className="text-[#2563EB]" size={14}></Check>
               <li>Ongoing support and maintenance</li> 
            </div>
            
          </ul>
        </div>
      </section>
    </>
  );
}
