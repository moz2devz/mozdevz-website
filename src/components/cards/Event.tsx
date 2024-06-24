import Image from 'next/image'
import { Calendar, Link, MapPin } from 'phosphor-react'
import NextLink from 'next/link'
import React, { useContext } from 'react'
import { LangContext } from '@/contexts/langContext'

const Event = ({
  image,
  title,
  tags,
  date,
  location,
  link,
}: {
  image: string
  title: string
  tags: { color: string; title: string }[]
  date: string
  location: string
  link: string
}) => {
  const { lang } = useContext(LangContext)
  return (
    <div className="bg-[#f2f3f5] p-3 rounded-2xl space-y-3">
      <div className="relative rounded-2xl h-40">
        <NextLink href={link}>
          <Image
            src={`/assets/events/${image}`}
            alt="event"
            fill
            className="rounded-2xl object-cover"
          />
        </NextLink>
      </div>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <div
            style={{ backgroundColor: tag.color ?? '#f2f3f5' }}
            className="flex justify-center items-center max-w-fit rounded-full text-sm px-2 py-1 text-gray-600"
            key={tag.title}
          >
            <span className="relative top-[1px] text-black">{tag.title}</span>
          </div>
        ))}
      </div>
      <h3>{title}</h3>
      <div>
        <div className="flex items-center gap-2 text-gray-600">
          <Calendar size={20} />
          <p>{date}</p>
        </div>
        <div className="flex items-center gap-2 text-gray-600">
          <MapPin size={20} />
          <p>{location}</p>
        </div>
        <div className="flex items-center gap-2 text-gray-600">
          <Link size={20} />
          <NextLink href={link} className="underline">
            {lang.staticContent.seeMore}
          </NextLink>
        </div>
      </div>
    </div>
  )
}

export default Event
