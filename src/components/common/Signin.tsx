import React from 'react'
import { Button } from '@/components/ui/button'

interface SigninProps {
  className: string
}

export const Signin: React.FunctionComponent<SigninProps> = ({ className }) => {
  return (
    <div className='flex flex-col justify-center p-3 lg:p-5 gap-3 lg:items-center'>
      <div className='flex flex-row items-center justify-center'>
        <h1
          className={`flex font-bold text-base justify-center lg:text-3xl ${className}`}
        >
          สำรองที่นั่งล่วงหน้า
          <p className='lg:text-xl text-md text-gray-600'>
            &nbsp;(จำนวนที่นั่งจำกัด*)
          </p>
        </h1>
      </div>
      <p className='flex justify-center w-auto text-[#BAD1F2] text-base'>
        หมายเหตุ : สัมมนา Exclusive สำหรับกลุ่มโรงพยาบาลและสาธารณะสุข
      </p>
      <Button className='bg-[#26D76A] text-md lg:px-20 lg:py-6 lg:text-xl lg:w-fit'>
        ลงทะเบียน
      </Button>
    </div>
  )
}
