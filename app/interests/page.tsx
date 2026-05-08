import Image from 'next/image'
import Link from 'next/link'

export default function InterestsPage() {
  const hikingMedia = [
    {
      type: 'image',
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-08%20at%205.59.16%20PM-M8XECokppv9YOHw7xWmgnCBZ2tXLIm.jpeg",
      alt: "Snow-covered mountains"
    },
    {
      type: 'image',
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-08%20at%205.58.37%20PM-u9yD7tDWE1yDtLwT4P7BopqYX3bCzy.jpeg",
      alt: "Alpine flowers mountain view"
    },
    {
      type: 'image',
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-08%20at%205.58.36%20PM-AhzQ5K1TRBcokWCXhiMbcpKNv7mHtu.jpeg",
      alt: "Mountain camping sunrise"
    },
    {
      type: 'video',
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Video%202026-05-08%20at%206.01.57%20PM-2iTSNNRhKTGi157Srvq2Bk8LGVZ88G.mp4",
      alt: "Snow falling in mountains"
    },
    {
      type: 'video',
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Video%202026-05-08%20at%206.03.22%20PM-ApBBB7bmVQrinb8Zf3Ik6Qj7S7kEt5.mp4",
      alt: "Mountain adventure"
    },
    {
      type: 'video',
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Video%202026-05-08%20at%205.59.15%20PM-pDwSQz45NYPvSKxJe3wypAR1KB2kgf.mp4",
      alt: "Trail experience"
    },
    {
      type: 'video',
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Video%202026-05-08%20at%206.02.48%20PM-4uA23vOXn0OcsQU6iiIOiTzxAnF4F8.mp4",
      alt: "Mountain moments"
    }
  ]

  const horseImages = [
    {
      src: "/me/WhatsApp%20Image%202026-05-08%20at%205.18.45%20PM.jpeg",
      alt: "With horses"
    },
    {
      src: "/me/WhatsApp%20Image%202026-05-08%20at%205.18.44%20PM1.jpeg",
      alt: "Horse connection"
    }
  ]

  return (
    <main className="max-w-4xl mx-auto px-4 py-16 sm:py-20">
      <Link href="/" className="text-sm underline hover:opacity-70 mb-8 inline-block">
        ← Back
      </Link>

      <article className="max-w-none">
        <h1 className="text-2xl font-bold mb-8">Interests & Activities</h1>

        {/* Introduction */}
        <div className="mb-10">
          <p className="text-sm leading-relaxed mb-4">
            Beyond technology and software development, some of the most important lessons in my life have come from the activities I love outside of coding. Hiking, mountaineering, football, chess, horse riding, and swimming are not just hobbies for me — they are experiences that shaped my mindset, discipline, and personality.
          </p>
        </div>

        {/* Hiking & Mountaineering Combined */}
        <div className="mb-12">
          <h2 className="text-lg font-bold mb-4">Hiking & Mountaineering</h2>
          <p className="text-sm leading-relaxed mb-6">
            I&apos;ve always been someone who enjoys challenges and adventure. Hiking was one of the first activities that taught me patience and endurance. There is something powerful about walking through long trails, climbing rocky paths, and reaching viewpoints after hours of effort. Every mountain trail feels like a reminder that meaningful progress takes time. Some paths are steep, some are exhausting, and sometimes you feel like stopping halfway, but the view at the top always makes the journey worth it.
          </p>

          {/* First Media Set - 1 Image + 2 Videos */}
          <div className="flex gap-8 justify-center flex-wrap mb-8">
            {hikingMedia.slice(0, 1).map((media, idx) => (
              <div 
                key={idx} 
                className="flex-shrink-0"
                style={{
                  transform: `rotate(${idx % 3 === 0 ? '-3deg' : idx % 3 === 1 ? '2deg' : '-1deg'})`,
                  boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(0, 0, 0, 0.05)',
                  backgroundColor: '#f9f7f4',
                  padding: '26px 12px 20px 12px',
                  width: 'fit-content'
                }}
              >
                <div className="bg-gray-100 overflow-hidden relative flex items-center justify-center" style={{height: '180px', width: '145px', border: '1px solid #ddd'}}>
                  {media.type === 'image' ? (
                    <Image 
                      src={media.src}
                      alt={media.alt}
                      width={145}
                      height={180}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <video 
                      src={media.src}
                      className="w-full h-full object-cover"
                      muted
                      controls
                      style={{fontSize: '10px'}}
                    />
                  )}
                </div>
                <p className="text-xs text-center text-gray-700 leading-tight mt-2" style={{fontSize: '11px', fontStyle: 'italic'}}>{media.alt}</p>
              </div>
            ))}
            {hikingMedia.slice(3, 5).map((media, idx) => (
              <div 
                key={idx + 1} 
                className="flex-shrink-0"
                style={{
                  transform: `rotate(${(idx + 1) % 3 === 0 ? '-3deg' : (idx + 1) % 3 === 1 ? '2deg' : '-1deg'})`,
                  boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(0, 0, 0, 0.05)',
                  backgroundColor: '#f9f7f4',
                  padding: '12px 12px 20px 12px',
                  width: 'fit-content'
                }}
              >
                <div className="bg-gray-100 overflow-hidden relative flex items-center justify-center" style={{height: '220px', width: '140px', border: '1px solid #ddd'}}>
                  <video 
                    src={media.src}
                    className="w-full h-full object-cover"
                    muted
                    controls
                    style={{fontSize: '10px'}}
                  />
                </div>
                <p className="text-xs text-center text-gray-700 leading-tight mt-2" style={{fontSize: '11px', fontStyle: 'italic'}}>{media.alt}</p>
              </div>
            ))}
          </div>

          <p className="text-sm leading-relaxed mb-6">
            Over time, hiking evolved into a deeper passion for mountaineering. Mountains have a way of humbling you. Standing at high altitudes surrounded by silence makes everyday worries feel small. Mountaineering taught me mental strength, focus, and resilience. Every climb requires preparation, courage, and trust in yourself. There were moments where exhaustion made me question whether I could continue, but reaching the summit always reminded me that growth happens when you push beyond comfort.
          </p>
          
          {/* Remaining Media */}
          <div className="flex gap-8 justify-center flex-wrap mb-8">
            {hikingMedia.slice(1, 3).map((media, idx) => (
              <div 
                key={idx + 5} 
                className="flex-shrink-0"
                style={{
                  transform: `rotate(${(idx + 2) % 3 === 0 ? '-3deg' : (idx + 2) % 3 === 1 ? '2deg' : '-1deg'})`,
                  boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(0, 0, 0, 0.05)',
                  backgroundColor: '#f9f7f4',
                  padding: '12px 12px 20px 12px',
                  width: 'fit-content'
                }}
              >
                <div className="bg-gray-100 overflow-hidden relative flex items-center justify-center" style={{height: '180px', width: '145px', border: '1px solid #ddd'}}>
                  <Image 
                    src={media.src}
                    alt={media.alt}
                    width={145}
                    height={180}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-xs text-center text-gray-700 leading-tight mt-2" style={{fontSize: '11px', fontStyle: 'italic'}}>{media.alt}</p>
              </div>
            ))}
            {hikingMedia.slice(5, 7).map((media, idx) => (
              <div 
                key={idx + 7} 
                className="flex-shrink-0"
                style={{
                  transform: `rotate(${(idx + 3) % 3 === 0 ? '-3deg' : (idx + 3) % 3 === 1 ? '2deg' : '-1deg'})`,
                  boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(0, 0, 0, 0.05)',
                  backgroundColor: '#f9f7f4',
                  padding: '12px 12px 20px 12px',
                  width: 'fit-content'
                }}
              >
                <div className="bg-gray-100 overflow-hidden relative flex items-center justify-center" style={{height: '220px', width: '140px', border: '1px solid #ddd'}}>
                  <video 
                    src={media.src}
                    className="w-full h-full object-cover"
                    muted
                    controls
                    style={{fontSize: '10px'}}
                  />
                </div>
                <p className="text-xs text-center text-gray-700 leading-tight mt-2" style={{fontSize: '11px', fontStyle: 'italic'}}>{media.alt}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Football Section */}
        <div className="mb-10">
          <h2 className="text-lg font-bold mb-3">Football</h2>
          <p className="text-sm leading-relaxed mb-4">
            Football became another major part of my life. Growing up, football was more than just a game with friends — it was competition, teamwork, and energy. I loved the excitement of the field, the strategy behind every move, and the connection between teammates working toward one goal. Football taught me leadership and communication. It showed me how important teamwork is because no player wins alone. Whether winning or losing, every match taught me something about discipline, consistency, and staying calm under pressure.
          </p>
        </div>

        {/* Chess Section */}
        <div className="mb-10">
          <h2 className="text-lg font-bold mb-3">Chess</h2>
          <p className="text-sm leading-relaxed mb-4">
            Chess gave me a completely different kind of challenge. Unlike football or mountaineering, chess is silent, strategic, and deeply analytical. I enjoy how every move requires patience and planning. Chess taught me to think ahead, stay focused, and make decisions carefully. Sometimes one small mistake can change the entire game, which is very similar to life and software development. The game strengthened my problem-solving skills and taught me the value of strategy over impulsive decisions.
          </p>
        </div>

        {/* Horse Riding Section with Images */}
        <div className="mb-10">
          <h2 className="text-lg font-bold mb-4">Horse Riding</h2>
          <p className="text-sm leading-relaxed mb-6">
            Horse riding introduced me to a completely new experience of control, balance, and connection. Riding a horse requires trust and confidence. At first, it felt intimidating, but over time I learned how important calmness and focus are while riding. Horse riding taught me patience and self-control because animals respond to energy and behavior. It also gave me a strong sense of freedom — riding through open landscapes with nothing but nature around you is an unforgettable feeling.
          </p>
          
          {/* Polaroid Images Grid */}
          <div className="flex gap-8 justify-center flex-wrap mb-10">
            {horseImages.map((img, idx) => (
              <div 
                key={idx} 
                className="flex-shrink-0"
                style={{
                  transform: `rotate(${idx % 2 === 0 ? '-2deg' : '2deg'})`,
                  boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(0, 0, 0, 0.05)',
                  backgroundColor: '#f9f7f4',
                  padding: '12px 12px 20px 12px',
                  width: 'fit-content'
                }}
              >
                <div className="bg-gray-100 overflow-hidden relative flex items-center justify-center" style={{height: '180px', width: '145px', border: '1px solid #ddd'}}>
                  <Image 
                    src={img.src}
                    alt={img.alt}
                    width={145}
                    height={180}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-xs text-center text-gray-700 leading-tight mt-2" style={{fontSize: '11px', fontStyle: 'italic'}}>{img.alt}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Swimming Section */}
        <div className="mb-10">
          <h2 className="text-lg font-bold mb-3">Swimming</h2>
          <p className="text-sm leading-relaxed mb-4">
            Swimming became my place for peace and balance. Unlike other activities filled with noise and movement, swimming allowed me to disconnect from stress and focus entirely on rhythm and breathing. Water has always had a calming effect on me. Swimming taught me consistency and control because progress only comes through repetition and endurance. It became one of the best ways for me to clear my mind and recharge mentally.
          </p>
        </div>

        {/* Reflection */}
        <div className="mb-10">
          <p className="text-sm leading-relaxed mb-4">
            Together, these experiences shaped who I am outside of technology. They taught me how to stay disciplined during difficult moments, how to think strategically, how to work with others, and how to remain calm under pressure. Whether I&apos;m climbing a mountain, playing football, riding a horse, swimming through deep water, or planning moves on a chessboard, each experience contributes to the person and developer I continue to become.
          </p>
        </div>

        {/* Closing */}
        <div>
          <p className="text-sm leading-relaxed">
            In many ways, these passions reflect how I approach life itself: always learning, always improving, and never being afraid of the next challenge.
          </p>
        </div>
      </article>
    </main>
  )
}

