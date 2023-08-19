import { StaticImageData } from 'next/image'
import image1 from '../../public/carousel/image1.jpg'
import image2 from '../../public/carousel/image2.jpg'
import image3 from '../../public/carousel/image3.jpg'
import image4 from '../../public/carousel/image4.png'

export const images: StaticImageData[] = [image1, image2, image3, image4]

const imageByIndex = (index: number): string => images[index % images.length].src

export default imageByIndex
