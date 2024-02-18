import { Signin } from '@/components/common'
import { FaDiamond } from 'react-icons/fa6'
import Image from 'next/image'
import HeroPic from '@/components/assets/hero.png'
import { MainLayout } from '@/layout/MainLayout'
import { IoRemoveOutline } from 'react-icons/io5'
import SpeakerCard from '@/components/common/SpeakerCard'
import { FaLocationDot } from 'react-icons/fa6'
import { Button } from '@/components/ui/button'
import { TbDeviceIpad } from 'react-icons/tb'
import { IoWatch } from 'react-icons/io5'
import { IoMdGift } from 'react-icons/io'
import GiftCard from '@/components/common/GiftCard'
import { FaPhone } from 'react-icons/fa6'
import { Badge } from '@/components/ui/badge'

const features = [
  {
    icon: FaDiamond,
    description:
      'เพิ่มศักยภาพการรักษา และการให้บริการด้วย IoT, AI diagnosis, Telemedicine, Self-service และ Medical Service Platform',
  },
  {
    icon: FaDiamond,
    description: 'ก้าวสู่ Smart Healthcare ด้วย Intelligent Infrastructure',
  },
  {
    icon: FaDiamond,
    description:
      'ยกระดับความสามารถในการรับมือกับภัยคุกคามทางไซเบอร์ด้วย AI & Automation',
  },
  {
    icon: FaDiamond,
    description:
      'ยกระดับการดูแลรักษาข้อมูลสําคัญในโรงพยาบาลด้วยเทคโนโลยีการปกป้องข้อมูล',
  },
  {
    icon: FaDiamond,
    description: 'ลดระยะเวลาการทํางานของบุคลากรทางการแพทย์',
  },
  {
    icon: FaDiamond,
    description: 'ยกระดับความพึงพอใจของผู้รับบริการด้านสาธารณสุข',
  },
]

const speaker = [
  {
    name: 'รศ. วิรุฬห์ ศรีบริรักษ์',
    postion: 'คณะวิศวกรรมศาสตร์ มหาวิทยาลัยบูรพา',
    company: 'ผู้ก่อตั้ง Bangsaen Design House Group และ กิน-อยู่-ดี แพลตฟอร์ม',
  },
  {
    name: 'ผศ.ดร. กฤษณะ ชินสาร',
    postion: 'คณบดีคณะวิทยาการสารสนเทศ \nมหาวิทยาลัยบูรพา',
    company: '',
  },
  {
    name: 'คุณวิญญู อดิศักดิ์ตระกูล',
    postion: 'Solution Consultant Manager',
    company: 'บริษัท ซังฟอร์ เทคโนโลยี (ประเทศไทย) จํากัด',
  },
  {
    name: 'คุณสรรชัย ลีฬหาเกียรติ',
    postion: 'Senior Technical Management',
    company: 'บริษัท เลอโนโว (ประเทศไทย)',
  },
  {
    name: 'คุณวันพิชิต ชินตระกูลชัย',
    postion: 'Chief Technology Officer',
    company:
      'บริษัท แร็กน่าร์ คอร์ปอเรชั่น จํากัด และ ผู้ก่อตั้ง t-reg PDPA Platform',
  },
  {
    name: 'คุณพิเชษฐ์ พิทักษ์วศิน',
    postion: 'Chief Technology Officer',
    company: 'บริษัท คลิกเน็กซ์ จํากัด',
  },
]

const gift = [
  {
    icon: TbDeviceIpad,
    item: 'Ipad Gen 10 64GB',
    price: 1,
  },
  {
    icon: IoWatch,
    item: 'Ipad Gen 10 64GB',
    price: 1,
  },
  {
    icon: IoMdGift,
    item: 'Ipad Gen 10 64GB',
    price: 10,
  },
]

const schedule = [
  {
    session: 'ช่วงที่ 1',
    time: '13:00 - 15:30 น.',
    description: {
      1: 'PDPA ในโรงพยาบาล ความท้าทายใหม่หลังการบังคับใช้ พ.ร.บ.คุ้มครองข้อมูลส่วนบุคคล',
      2: 'Improving Cyber resilience with AI & Automation',
      3: 'Lenovo Intelligent Infrastructure to enable Smart Healthcare',
    },
  },
  {
    session: 'ช่วงที่ 2',
    time: '15:35 - 17:05 น.',
    description: {
      1: 'Enhance customer experience for Healthcare with digital technologies',
      2: 'Holistic IoT & AI for Healthcare, Telemedicine and Medical Service Platform',
      3: 'Empowering Health Tech solution with AI diagnosis',
    },
  },
]

export default function Home() {
  return (
    <>
      <div className='flex flex-col items-center bg-[#0E1143] lg:mx-32 lg:mb-9'>
        <div
          style={{
            borderBottomLeftRadius: '20px',
            borderBottomRightRadius: '20px',
            overflow: 'hidden',
          }}
        >
          <Image
            src={HeroPic}
            width={1500}
            height={1500}
            alt='Picture of the author'
          />
        </div>
        <Signin className='text-white' />
      </div>
      <MainLayout className='lg:flex lg:flex-col lg:gap-8'>
        <div className='flex flex-col gap-9'>
          <div className='flex flex-col gap-2'>
            <p className='lg:text-3xl text-lg'>
              พบกับกุญแจสําคัญของ
              <span className='text-[#26D76A] text-lg lg:text-3xl'>
                {' '}
                "Healthcare"{' '}
              </span>
              แห่งอนาคตได้ที่งานสัมมนานี้
            </p>
            <div className='flex flex-col p-2 gap-3 text-md lg:text-xl'>
              {features.map((feature) => (
                <div className='flex flex-row gap-2'>
                  <div className='w-6 mt-1'>
                    <FaDiamond
                      className='text-[#26D76A]'
                      size={15}
                    />
                  </div>
                  <p>{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className='flex flex-col gap-3 bg-[#F1F8FF] p-4 rounded-md'>
            <div className='flex flex-row gap-3'>
              <div className='p-0.5 bg-[#26D76A] rounded-full'></div>
              <h1 className='bg-gradient-to-r from-[#0E1143] to-[#BAD1F2] inline-block text-transparent bg-clip-text text-2xl lg:text-3xl'>
                Main Speaker
              </h1>
            </div>
            <div className='flex flex-row items-center lg:justify-center'>
              <div className='flex flex-col gap-5 lg:grid-rows-3 lg:grid lg:w-fit'>
                {speaker.map((person) => (
                  <SpeakerCard
                    name={person.name}
                    position={person.postion}
                    company={person.company}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className='flex flex-col bg-[#F1F8FF] p-4 rounded-md'>
            <div className='flex flex-row gap-3 mb-3 lg:mb-5'>
              <div className='p-0.5 bg-[#26D76A] rounded-full'></div>
              <h1 className='bg-gradient-to-r from-[#0E1143] to-[#BAD1F2] inline-block text-transparent bg-clip-text text-2xl lg:text-3xl'>
                Schedule
              </h1>
            </div>
            <div>
              {schedule.map((scheduleItem, index) => (
                <div
                  key={index}
                  className='flex flex-col gap-2 lg:gap-5'
                >
                  <Badge className='flex flex-row gap-2 text-white bg-[#26D76A] w-fit text-lg'>
                    <p className='text-[#C8FFD4] lg:text-2xl'>
                      {scheduleItem.session}
                    </p>
                    <p className='lg:text-2xl'>{scheduleItem.time}</p>
                  </Badge>
                  {Object.entries(scheduleItem.description).map(
                    ([key, value]) => (
                      <div
                        key={key}
                        className='flex flex-row gap-2 lg:pl-5'
                      >
                        <div className='w-6 mt-1'>
                          <FaDiamond
                            className='text-[#26D76A]'
                            size={15}
                          />
                        </div>
                        <p className='lg:text-xl'>{value}</p>
                      </div>
                    )
                  )}
                  <div className='h-auto py-3'>
                    <hr className='bg-white rounded h-1' />
                  </div>
                </div>
              ))}
            </div>
            <div className='flex flex-col gap-2'>
              <Badge className='flex flex-row gap-2 text-white bg-[#26D76A] w-fit text-lg'>
                <p className='lg:text-2xl'>17:05 - 19:00 น.</p>
              </Badge>
              <p className='lg:text-xl'>
                ร่วมรับประทายอาหาร (International Dinner Buffet)
              </p>
            </div>
          </div>

          <div className='flex flex-row bg-gradient-to-r from-[#0E1143] to-[#349EFF] justify-between rounded-md p-5 lg:justify-center lg:gap-8'>
            <div className='mt-2 hidden lg:block'>
              <FaLocationDot
                className='text-white'
                size={30}
              />
            </div>
            <div className='flex mt-2 lg:hidden'>
              <FaLocationDot
                className='text-white'
                size={20}
              />
            </div>
            <div className='flex flex-col gap-2 text-white'>
              <p className='font-bold text-lg lg:text-2xl'>
                ณ ห้องแกรนด์บอลรูม ชั้น 4
              </p>
              <p className='lg:text-xl'>โรงแรมพูลแมน กรุงเทพแกรนด์ สุขุมวิท</p>
              <Button className='rounded-full bg-[#349EFF] text-lg lg:text-xl'>
                ดูแผนที่ google map
              </Button>
            </div>
            <div className='bg-gray-500 p-5 rounded-md hidden lg:block'></div>
          </div>

          <div className='rounded-md p-5 border-l-2 border-r-2 border-b-2 border-[#26D76A]'>
            <p className='bg-gradient-to-r from-[#0E1143] to-[#BAD1F2] inline-block text-transparent bg-clip-text font-bold text-2xl  lg:text-3xl'>
              สำหรับผู้เข้าร่วมงานลุ้นรับรางวัล
            </p>
            <div className='flex flex-col gap-5 lg:flex-row lg:justify-between'>
              {gift.map((prop) => (
                <GiftCard
                  item={prop.item}
                  price={prop.price}
                  Icon={prop.icon}
                />
              ))}
            </div>
          </div>

          <Signin className='text-[#1F2883]' />

          <footer className='flex flex-col gap-3 p-5 rounded-md w-full items-center lg:flex-row lg:justify-center'>
            <div className='flex flex-row gap-3 items-center'>
              <FaPhone
                className='text-[#1F2883]'
                size={20}
              />
              <p className='text-gray-500 text-lg lg:text-xl'>
                ติดต่อสอบถามรายละเอียดเพิ่มเติม
              </p>
            </div>
            <div className='flex flex-col gap-0 items-center lg:flex-row'>
              <p className='text-[#1F2883] text-xl'>คุณนันทพร ทองเพชร</p>
              <p className='text-[#1F2883] text-xl'>084-118-4868</p>
            </div>
          </footer>
        </div>
      </MainLayout>
    </>
  )
}
