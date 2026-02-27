const features = [
    {id:"1",icon:"/images/delivery.svg", title:"Fast Delivery", desc:"Within 1-4 business days"},
    {id:"2",icon:"/images/refund.svg", title:"Return & Refund", desc:"30 days return policy"},
    {id:"3",icon:"/images/cards.svg", title:"Safe Shopping", desc:"100% secure payment"},
    {id:"4",icon:"/images/shop.svg", title:"Click & Collect", desc:"Collect in any of our stores"},
]
const Features = () => {
  return (
    <section className="py-10 bg-[#F6F8F8] p-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
        {features.map((item) =>(
            <div className="flex gap-4">
                <div className="relative flex items-center justify-end">
                    <img src={item.icon} alt={item.title} className="h-16 w-16 z-10"/>
                    <div className="rounded-full bg-[#B7E5F0] h-12 w-12 absolute z-1"></div>
                    
                </div>
                <div className="flex flex-col gap-2">
                    <h1 className="text-lg text-black/90 font-bold">{item.title}</h1>
                    <p className="text-sm text-headings font-semibold">{item.desc}</p>
                </div>
            </div>
        ))}
      </div>
    </section>
  )
}

export default Features
