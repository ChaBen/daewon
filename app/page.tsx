import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/card'
import { MoveRight } from 'lucide-react'
import Image from 'next/image'

type Content = {
  src: string
  genre: string
  title: string
}

const contents: Content[] = [
  {
    src: 'KeyVisual-459x258.png',
    genre: 'Action',
    title: 'Glaciered',
  },
  {
    src: 'thumbnail_800-459x258.png',
    genre: 'Strategy',
    title: 'Phantom Rose 2 Sapphire',
  },
  {
    src: 'momodora_header-450x258.jpg',
    genre: 'Action',
    title: 'Momodora: Moonlit Farewell',
  },
  {
    src: 'homurahime_header-450x258.jpg',
    genre: 'Action',
    title: 'Homura Hime',
  },
  {
    src: 'Magus-450x258.jpg',
    genre: 'Action',
    title: 'MaguSphere - Magical Cannon Girls',
  },
  {
    src: 'Life_en-450x258.jpg',
    genre: 'RPG',
    title: 'The Use of Life',
  },
  {
    src: 'main_visual_EN-459x258.jpg',
    genre: 'Visual Novel',
    title: 'From Madness with Love',
  },
  {
    src: 'RustedMossKeyPress-1-459x258.png',
    genre: 'Platformer',
    title: 'Rusted Moss',
  },
  {
    src: 'Marfusha_EN-1-459x258.jpg',
    genre: 'Action',
    title: 'Marfusha',
  },
  {
    src: 'SubwayMidnight_Press-230302_image_00EN-459x258.jpg',
    genre: 'Adventure',
    title: 'SUBWAY MIDNIGHT',
  },
  {
    src: 'TheGoodLife-450x258.jpg',
    genre: 'Adventure',
    title: 'The Good Life',
  },
  {
    src: 'mainvisual-450x258.jpg',
    genre: 'Horror',
    title: 'Ib',
  },
  {
    src: 'Drainus_keyart_1920x1080-459x258.png',
    genre: 'Action',
    title: 'DRAINUS',
  },
  {
    src: '7days_Herobanner_1920x1080-459x258.jpg',
    genre: 'Puzzle',
    title: '7 Days to End with You',
  },
  {
    src: 'DragoNoka_TrailerThumnail_1280x720_en-459x258.jpg',
    genre: 'Simulation',
    title: 'Drago Noka',
  },
  {
    src: 'valkyrie_800x450_EN-1-459x258.png',
    genre: 'Action',
    title: 'Valkyrie of Phantasm',
  },
]

const news = [
  {
    src: 'チルノ追加_01_EN-459x258.png',
    date: '2023.08.01',
    desc: 'Cirno Joins the Fight in the High-Speed Touhou Danmaku Versus Fighter Valkyrie of Phantasm!',
  },
  {
    src: 'TLN_banner_1760x990-459x258.png',
    date: '2023.10.21',
    desc: 'Touhou Luna Nights - PLAYISM will Take Over Publishing from July 1 for More Streamlined Customer Support',
  },
  {
    src: 'KeyArt_logo-459x258.png',
    date: '2022.02.01',
    desc: 'The Physics-Based Grapplevania Rusted Moss Joins the Steam Summer Sale for the Very First Time',
  },
]

export default function Home() {
  return (
    <main className="container">
      <div className="flex items-center">
        <h3 className="text-3xl">News</h3>
        <Button className="ml-auto">
          더보기 <MoveRight size="12" className="ml-2" />
        </Button>
      </div>
      <div className="mt-4 grid grid-cols-3 gap-3 rounded-lg">
        {news.map((item) => (
          <div className="grid cursor-pointer grid-cols-8 gap-4 overflow-hidden rounded-md bg-white p-3">
            <div className="col-span-3">
              <img
                src={item.src}
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
            <div className="col-span-5">
              <div className="text-gray-400">{item.date}</div>
              <div className="line-clamp-3">{item.desc}</div>
            </div>
          </div>
        ))}
      </div>
      <h1 className="mt-24 text-3xl">NEW & HOT</h1>
      <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-4">
        {/* <div className="bg-white rounded-sm p-4">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Platform</AccordionTrigger>
              <AccordionContent>
                <div className="flex items-center space-x-2 mt-2">
                  <Checkbox id="terms" />
                  <label
                    htmlFor="terms"
                    className="text-sm hover:text-[#ED1C24] font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    PC
                  </label>
                </div>
                <div className="flex items-center space-x-2 mt-2">
                  <Checkbox id="terms" />
                  <label
                    htmlFor="terms"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Nintendo Switch
                  </label>
                </div>
                <div className="flex items-center space-x-2 mt-2">
                  <Checkbox id="terms" />
                  <label
                    htmlFor="terms"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    PlayStation 5
                  </label>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div> */}
        {contents.map((item) => (
          <Card key={item.title} className="relative">
            <Badge className="absolute right-2 top-2 z-10">{item.genre}</Badge>
            <CardContent>
              <Image
                src={`/${item.src}`}
                alt={item.title}
                className="cursor-pointer object-cover transition-all duration-300 hover:scale-110 dark:invert"
                width={459}
                height={258}
                priority
              />
            </CardContent>
            <CardDescription>
              <CardTitle className="transition-colors duration-300 hover:text-red-400">
                {item.title}
              </CardTitle>
            </CardDescription>
          </Card>
        ))}
      </div>
    </main>
  )
}
