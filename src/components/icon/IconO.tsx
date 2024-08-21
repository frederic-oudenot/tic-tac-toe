interface IconOProp {
  width:string;
  height:string;
}

export default function IconO({width, height}:IconOProp){
  return(
    <svg style={{maxWidth: "100%", maxHeight: "100%"}} width={width}height={height} viewBox="0 0 156 126" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M77.7317 18.4456L90.7748 5.40261C97.9782 -1.80087 109.657 -1.80087 116.861 5.40261C124.064 12.6061 124.064 24.2852 116.861 31.4887L103.818 44.5317L116.861 57.5748C124.064 64.7782 124.064 76.4574 116.861 83.6608C109.657 90.8643 97.9782 90.8643 90.7748 83.6608L77.7317 70.6178L64.6887 83.6608C57.4852 90.8643 45.8061 90.8643 38.6026 83.6608C31.3991 76.4574 31.3991 64.7782 38.6026 57.5748L51.6456 44.5317L38.6026 31.4887C31.3991 24.2852 31.3991 12.6061 38.6026 5.40262C45.8061 -1.80086 57.4852 -1.80085 64.6887 5.40262L77.7317 18.4456Z" fill="url(#paint0_linear_221_2625)"/>
      <g filter="url(#filter0_f_221_2625)">
        <ellipse cx="78" cy="90.24" rx="48" ry="5.76" fill="#2F8DDE"/>
      </g>
      <defs>
        <filter id="filter0_f_221_2625" x="2.28882e-05" y="54.48" width={"156"} height={"126"} filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feGaussianBlur stdDeviation="15" result="effect1_foregroundBlur_221_2625"/>
        </filter>
        <linearGradient id="paint0_linear_221_2625" x1="33.2" y1="0" x2="66.8851" y2="106.568" gradientUnits="userSpaceOnUse">
          <stop stopColor="#4FC3F7"/>
          <stop offset="1" stopColor="#2979FF"/>
        </linearGradient>
      </defs>
    </svg>
  )
}