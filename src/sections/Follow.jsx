import { Instagram } from "lucide-react"

const imgLinks = [
    {id:"1",img:"/images/follow/1.jpeg"},
    {id:"2",img:"/images/follow/2.jpg"},
    {id:"3",img:"/images/follow/3.jpg"},
    {id:"4",img:"/images/follow/4.jpg"},
    {id:"5",img:"/images/follow/5.jpg"},
    {id:"6",img:"/images/follow/6.jpg"},
]
const Follow = () => {
  return (
    <div>
      <section className="py-10 px-5 md:px-20">
        <h2 className="text-3xl font-bold text-center mb-10">Follow @lekarna on Instagram</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 justify-items-center">
            {imgLinks.map((item) => (
                <div key={item.id} className="group rounded-3xl h-56 w-56 relative overflow-hidden">
                    <img src={item.img} alt={item.id} className="h-full w-full object-cover rounded-3xl" />
                    <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 bg-black/60 transition-all duration-300 flex items-center justify-center">
                            <Instagram className="text-white h-20 w-20"/> 
                    </div>
                </div>
            ))}
        </div>
      </section>
    </div>
  )
}

export default Follow
