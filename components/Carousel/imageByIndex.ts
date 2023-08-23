import { StaticImageData } from 'next/image'
import image1 from '../../public/carousel/image1.jpg'
import image2 from '../../public/carousel/image2.jpg'
import image3 from '../../public/carousel/image3.jpg'
import image4 from '../../public/carousel/image4.png'
import image5 from '../../public/carousel/image5.jpg'
import image6 from '../../public/carousel/image6.jpg'
import image7 from '../../public/carousel/image7.jpg'
import image8 from '../../public/carousel/image8.jpg'

export const images: StaticImageData[] = [image1, image2, image3, image4, image5, image6, image7, image8]

const imageByIndex = (index: number): string => images[index % images.length].src

export default imageByIndex
