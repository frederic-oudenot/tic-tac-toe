import { IIconAttributes } from "../../types/Icon"

export default function IconX({ width, height }: IIconAttributes) {
  return (
    <svg
      style={{ maxWidth: "100%", maxHeight: "100%" }}
      width={width}
      height={height}
      viewBox={"0 0 156 126"}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M78.3078 88.9357C102.867 88.9357 122.776 69.0268 122.776 44.4678C122.776 19.9089 102.867 0 78.3078 0C53.7489 0 33.84 19.9089 33.84 44.4678C33.84 69.0268 53.7489 88.9357 78.3078 88.9357ZM78.3078 57.8081C85.6754 57.8081 91.6481 51.8354 91.6481 44.4677C91.6481 37.1001 85.6754 31.1274 78.3078 31.1274C70.9401 31.1274 64.9674 37.1001 64.9674 44.4677C64.9674 51.8354 70.9401 57.8081 78.3078 57.8081Z'
        fill='url(#paint0_linear_221_2632)'
      />
      <g filter='url(#filter0_f_221_2632)'>
        <ellipse cx='78' cy='90.2156' rx='48' ry='5.76' fill='#F8A00B' />
      </g>
      <defs>
        <filter
          id='filter0_f_221_2632'
          x='0'
          y='54.4556'
          width={"156"}
          height={"126"}
          filterUnits='userSpaceOnUse'
          colorInterpolationFilters='sRGB'
        >
          <feFlood floodOpacity='0' result='BackgroundImageFix' />
          <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
          <feGaussianBlur stdDeviation='15' result='effect1_foregroundBlur_221_2632' />
        </filter>
        <linearGradient
          id='paint0_linear_221_2632'
          x1='33.84'
          y1='0'
          x2='67.4767'
          y2='106.415'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#FFD54F' />
          <stop offset='1' stopColor='#FB8C00' />
        </linearGradient>
      </defs>
    </svg>
  )
}
