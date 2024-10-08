import { IIconAttributes } from "../../types/Icon"

export default function Logo({ width, height }: IIconAttributes) {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 327 158'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M93.6422 94.1571L111.033 111.548C120.638 121.152 136.21 121.152 145.814 111.548C155.419 101.943 155.419 86.3709 145.814 76.7663L128.424 59.3756L145.814 41.985C155.419 32.3803 155.419 16.8081 145.814 7.2035C136.21 -2.40113 120.638 -2.4011 111.033 7.20353L93.6422 24.5942L76.2515 7.20347C66.6469 -2.40115 51.0747 -2.40116 41.4701 7.20346C31.8654 16.8081 31.8654 32.3803 41.4701 41.9849L58.8608 59.3756L41.4701 76.7664C31.8654 86.371 31.8654 101.943 41.4701 111.548C51.0747 121.152 66.6469 121.152 76.2515 111.548L93.6422 94.1571Z'
        fill='url(#paint0_linear_221_2647)'
      />
      <g filter='url(#filter0_f_221_2647)'>
        <ellipse cx='94' cy='120.32' rx='64' ry='7.68' fill='#2F8DDE' />
      </g>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M232.915 118.599C265.66 118.599 292.205 92.0537 292.205 59.3085C292.205 26.5633 265.66 0.0180664 232.915 0.0180664C200.17 0.0180664 173.625 26.5633 173.625 59.3085C173.625 92.0537 200.17 118.599 232.915 118.599ZM232.915 77.0954C242.739 77.0954 250.702 69.1319 250.702 59.3083C250.702 49.4847 242.739 41.5211 232.915 41.5211C223.091 41.5211 215.128 49.4847 215.128 59.3083C215.128 69.1319 223.091 77.0954 232.915 77.0954Z'
        fill='url(#paint1_linear_221_2647)'
      />
      <g filter='url(#filter1_f_221_2647)'>
        <ellipse cx='232.505' cy='120.306' rx='64' ry='7.68' fill='#F8A00B' />
      </g>
      <defs>
        <filter
          id='filter0_f_221_2647'
          x='0'
          y='82.6399'
          width='188'
          height='75.36'
          filterUnits='userSpaceOnUse'
          colorInterpolationFilters='sRGB'
        >
          <feFlood floodOpacity='0' result='BackgroundImageFix' />
          <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
          <feGaussianBlur stdDeviation='15' result='effect1_foregroundBlur_221_2647' />
        </filter>
        <filter
          id='filter1_f_221_2647'
          x='138.505'
          y='82.6256'
          width='188'
          height='75.36'
          filterUnits='userSpaceOnUse'
          colorInterpolationFilters='sRGB'
        >
          <feFlood floodOpacity='0' result='BackgroundImageFix' />
          <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
          <feGaussianBlur stdDeviation='15' result='effect1_foregroundBlur_221_2647' />
        </filter>
        <linearGradient
          id='paint0_linear_221_2647'
          x1='34.2666'
          y1='0'
          x2='79.18'
          y2='142.091'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#4FC3F7' />
          <stop offset='1' stopColor='#2979FF' />
        </linearGradient>
        <linearGradient
          id='paint1_linear_221_2647'
          x1='173.625'
          y1='0.0180664'
          x2='218.474'
          y2='141.905'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#FFD54F' />
          <stop offset='1' stopColor='#FB8C00' />
        </linearGradient>
      </defs>
    </svg>
  )
}
