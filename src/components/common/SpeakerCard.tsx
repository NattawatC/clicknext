import { Button } from '@/components/ui/button'
import React from 'react'
import { useRouter } from 'next/router'

interface SpeakerCardProps {
  name: string
  position: string
  company: string
}

const SpeakerCard: React.FunctionComponent<SpeakerCardProps> = ({
  name,
  position,
  company,
}) => {
  return (
    <div className='flex flex-col text-base bg-white shadow-sm items-center p-5 rounded-md '>
      <p className='text-[#1F2883] text-xl'>{name}</p>
      <p className='flex text-[#349EFF] text-lg'>{position}</p>
      <p>{company}</p>
    </div>
  )
}

export default SpeakerCard
