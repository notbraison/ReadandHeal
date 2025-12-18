export default function Services() {
  return (
    <div className="p-8 text-center">
      <h1 className="text-4xl font-bold text-black">SERVICES</h1>
    </div>
  )
}

export function Relationships() {
  return (
    <div className="relative w-full max-w-[75vw] overflow-hidden rounded-2xl bg-gradient-to-br from-purple-600 via-purple-500 to-purple-700 p-8 shadow-2xl mt-[30px]">
      {/* Flexbox container for side-by-side layout */}
      <div className="flex gap-6">
        {/* Left side - Image */}
        <div className="relative w-2/5 rounded-xl overflow-hidden">
          <img src="/glass.png" alt="Background pattern" className="h-full w-full object-cover" />
        </div>

        {/* Right side - Content placeholder */}
        <div className="flex-1 rounded-xl bg-white/10 backdrop-blur-sm p-6">
          <h2 className="text-2xl font-bold text-white mb-4">Relationships</h2>
          <p className="text-white/80">
          Modern romance 
           </p>
           <p  className="text-white/80">
            Dating
           </p>
           <p  className="text-white/80">
             coping skills
           </p>
        </div>
      </div>
    </div>
  )
}


export function Teensadolescent() {
  return (
    <div className="relative w-full max-w-[75vw] overflow-hidden rounded-2xl bg-gradient-to-br from-purple-600 via-purple-500 to-purple-700 p-8 shadow-2xl mt-[30px]">
      {/* Flexbox container for side-by-side layout */}
      <div className="flex gap-6">
        {/* Left side - Content */}
        <div className="flex-1 rounded-xl bg-white/10 backdrop-blur-sm p-6">
          <h2 className="text-2xl font-bold text-white mb-4">Teens & Adolescents</h2>
          <p className="text-white/80 mb-2">Personal hygine</p>
          <p className="text-white/80 mb-2">Physical and emotional change</p>
          <p className="text-white/80 mb-2">Managing parent conflicts</p>
          <p className="text-white/80 mb-2">Period and Stigma</p>
          <p className="text-white/80 mb-2">coping skills</p>

        </div>

        {/* Right side - Image */}
        <div className="relative w-2/5 rounded-xl overflow-hidden">
          <img src="/teens.png" alt="Background pattern" className="h-full w-full object-cover" />
        </div>
      </div>
    </div>
  )
}
