import { Button } from '@/components/ui/button'
import React from 'react'
import { useRouter } from 'next/router'

interface GiftCardProps {
  item: string
  price: number
  Icon: React.ElementType
}

const GiftCard: React.FunctionComponent<GiftCardProps> = ({
  item,
  price,
  Icon,
}) => {
  return (
    <div className='flex flex-col text-base bg-white items-center p-5 rounded-md '>
      <Icon
        size={30}
        className='flex text-left'
      />
      <p className='text-[#1F2883] text-xl font-bold'>{item}</p>
      <p className='text-[#349EFF] text-lg'>{price} รางวัล</p>
    </div>
  )
}

export default GiftCard
