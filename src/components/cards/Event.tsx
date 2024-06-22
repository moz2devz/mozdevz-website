import Image from 'next/image'
import { Calendar, MapPin } from 'phosphor-react'
import React from 'react'

const Event = () => {
  return (
    <div className="bg-[#f2f3f5] p-3 rounded-2xl space-y-3">
      <div className="relative rounded-2xl h-40">
        <Image
          src={'/assets/events/cyberconnect.png'}
          alt="event"
          fill
          className="rounded-2xl object-cover"
        />
      </div>
      <span className="inline-block bg-slate-300 rounded-xl text-sm px-2 py-1 text-gray-600">
        MOZDEVZ EVENT
      </span>
      <h3>CyberSecurity Awareness</h3>
      <div>
        <div className="flex items-center gap-2 text-gray-600">
          <Calendar size={20} />
          <p>Sat, Jan 4 at 9:00 AM - 10:00 AM</p>
        </div>
        <div className="flex items-center gap-2 text-gray-600">
          <MapPin size={20} />
          <p>Sat, Jan 4 at 9:00 AM - 10:00 AM</p>
        </div>
      </div>
    </div>
  )
}

export default Event
