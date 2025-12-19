export default function Services() {
  return (
    <div className="p-8 text-center">
      <h1 className="text-4xl font-bold text-white">SERVICES</h1>
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
    <div className="relative w-full max-w-[75vw] overflow-hidden rounded-2xl bg-gradient-to-br from-purple-600 via-purple-500 to-purple-700 p-8 shadow-2xl mt-[30px] ">
      {/* Flexbox container for side-by-side layout */}
      <div className="flex gap-6">
        {/* Left side - Content */}
        <div className="flex-1 rounded-xl bg-gradient-to-br from-purple-600 via-purple-500 to-purple-700 backdrop-blur-sm p-6 rounded-xl">
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
export function Marriage() {
return (
    <div className="relative w-full max-w-[75vw] overflow-hidden rounded-2xl bg-gradient-to-br from-purple-600 via-purple-500 to-purple-700 p-8 shadow-2xl mt-[30px]">
      {/* Flexbox container for side-by-side layout */}
      <div className="flex gap-6">
        {/* Left side - Content */}
        <div className="relative w-2/5 rounded-xl overflow-hidden">
          <img src="/marriage.png" alt="Background pattern" className="h-full w-full object-cover" />
        </div>

        {/* Right side - Image */}
        <div className="flex-1 rounded-xl bg-white/10 backdrop-blur-sm p-6">
          <h2 className="text-2xl font-bold text-white mb-4">Marriage</h2>
          <p className="text-white/80 mb-2">Separarion and divorce</p>
          <p className="text-white/80 mb-2">Intimacy in marriage</p>
          <p className="text-white/80 mb-2">Intimacy after childbirth</p>
          <p className="text-white/80 mb-2">Marrying an older person</p>
          <p className="text-white/80 mb-2">coping skills</p>

        </div>
      </div>
    </div>
  )
    
}

export function Businness() {
  return (
    <div className="relative w-full max-w-[75vw] overflow-hidden rounded-2xl bg-gradient-to-br from-purple-600 via-purple-500 to-purple-700 p-8 shadow-2xl mt-[30px]">
      {/* Flexbox container for side-by-side layout */}
      <div className="flex gap-6">
        {/* Left side - Content */}
        <div className="flex-1 rounded-xl bg-gradient-to-br from-purple-600 via-purple-500 to-purple-700 backdrop-blur-sm p-6 rounded-xl">
          <h2 className="text-2xl font-bold text-white mb-4">Business</h2>
          <p className="text-white/80 mb-2">Enterprenuership</p>
          <p className="text-white/80 mb-2">Mindset</p>
          <p className="text-white/80 mb-2">Psychology of money</p>
          <p className="text-white/80 mb-2">Financial literacy</p>
          <p className="text-white/80 mb-2">Financial inheritance and stability</p>
        </div>

        {/* Right side - Image */}
        <div className="relative w-2/5 rounded-full overflow-hidden">
          <img src="/business.png" alt="Background pattern" className="h-full w-40 object-cover mr-[12px] " />
        </div>
      </div>
    </div>
  )
}

export function Education() {
    return (
         <div className="relative w-full max-w-[75vw] overflow-hidden rounded-2xl bg-gradient-to-br from-purple-600 via-purple-500 to-purple-700 p-8 shadow-2xl mt-[30px]">
      {/* Flexbox container for side-by-side layout */}
      <div className="flex gap-6">
        {/* Left side - Content */}
        <div className="relative w-2/5 rounded-full overflow-hidden">
          <img src="/education.png" alt="Background pattern" className="h-full w-full object-cover" />
        </div>

        {/* Right side - Image */}
        <div className="flex-1 rounded-xl bg-white/10 backdrop-blur-sm p-6">
          <h2 className="text-2xl font-bold text-white mb-4">Education</h2>
          <p className="text-white/80 mb-2">Academic success</p>
          <p className="text-white/80 mb-2">Career directions</p>
          <p className="text-white/80 mb-2">Social issues in education</p>
          <p className="text-white/80 mb-2">Handling peer pressure</p>
          <p className="text-white/80 mb-2">Bullying and cyberbullying</p>
            <p className="text-white/80 mb-2">Substance abuse and awareness</p>
            <p className="text-white/80 mb-2">Relationships and boundaries in school</p>
            <p className="text-white/80 mb-2">Digital safety</p>
            <p className="text-white/80 mb-2">Life skills education</p>
            <p className="text-white/80 mb-2">Education beyond classroom</p>
        </div>
      </div>
    </div>
     )

}


export function TechnologyandEducation() {
  return (
    <div className="relative w-full max-w-[75vw] overflow-hidden rounded-2xl l bg-gradient-to-br from-purple-600 via-purple-500 to-purple-700 p-8 shadow-2xl mt-[30px]">
      <div className="flex items-center justify-between gap-8">
        {/* Left side - Purple pill shape with text */}
        <div className="relative flex items-center justify-center">
          <div className="w-56 h-96 rounded-[100px] bg-gradient-to-br from-purple-500 via-purple-600 to-purple-700 flex items-center justify-center p-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-white mb-6">Technology & Education</h2>
              <p className="text-white/90 mb-3">Online learning</p>
              <p className="text-white/90 mb-3">Benefits and dangers of social media</p>
              <p className="text-white/90 mb-3">E-learning tools for students and digital literacy</p>
            </div>
          </div>
        </div>

        {/* Right side - Rounded square image */}
        <div className="w-48 h-48 rounded-3xl overflow-hidden shadow-xl">
          <img src="techNed.png" alt="Technology and Education" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  )
}


export function Parenting() {
  return (
    <div className="relative w-full max-w-[75vw] overflow-hidden rounded-2xl bg-gradient-to-br from-purple-500 via-purple-600 to-purple-700 p-8 shadow-2xl mt-[30px]">
      <div className="flex flex-col items-center gap-6">
        {/* Top - Rounded square image */}
        <div className="w-40 h-40 rounded-3xl overflow-hidden shadow-xl bg-[#E8C9A8]">
          <img src="parenting.png" alt="Parenting" className="w-full h-full object-cover" />
        </div>

        {/* Bottom - Large content area */}
        <div className="w-full h-64 rounded-2xl bg-gradient-to-br from-purple-500 via-purple-600 to-purple-700 p-6 rowhite">
          <h2 className="text-2xl font-bold text-white mb-6">Parenting</h2>
          <p className="text-white mb-2">Parenting-Toddlers</p>
          <p className="text-white mb-2">Teens/Adolescent</p>
          <p className="text-white mb-2">Young adults</p>
          <p className="text-white mb-2"> working adults and guidance in relationships</p>
        </div>
      </div>
    </div>
  )
}
    