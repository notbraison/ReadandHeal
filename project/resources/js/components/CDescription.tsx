export default function CDescription() {
  return (
   // <div className="relative w-[60vw] mx-auto overflow-hidden rounded-2xl bg-gradient-to-br from-purple-600 via-purple-500 to-purple-700 p-8 shadow-2xl display-flex align-itemscenter">
 <div className="relative w-full max-w-[75vw] overflow-hidden rounded-2xl bg-gradient-to-br from-purple-600 via-purple-500 to-purple-700 p-8 shadow-2xl  mb-[70px]">
      <div className="absolute inset-0 opacity-20">
         
        <img src="/heartbeat.png" alt="Background pattern" className="h-full w-full object-cover" />
      
      </div>

      {/* Mission Card - Top Left */}
      <div className="relative mb-8 w-4/5 rounded-xl bg-purple-300/40 p-6 backdrop-blur-sm opacity-65">
        
        <h2 className="text-center text-2xl font-bold text-gray-900">MISSION</h2>
        <p>
            To provide a supportive and accessible platform where people can discover therapeutic books 
            that promote emotional healing, personal growth, healthy relationships and mental well-being.
        </p>
      </div>
      
      {/* Vision Card - Bottom Right */}
      <div className="relative ml-auto w-4/5 rounded-xl bg-purple-300/40 p-8 backdrop-blur-sm opacity-65">
        <h2 className="text-center text-2xl font-bold text-gray-900">VISION</h2>
        <p>
            To become a globally trusted haven for healing literature -empowering individuals to transform their pain into strength
            , their struggles into wisdom and their stories into healing.
        </p>
      </div>
   </div>
  )
}
