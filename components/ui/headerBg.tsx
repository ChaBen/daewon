import React from 'react'

export default function headerBg() {
  return (
    <div className="absolute -top-[580px] left-1/2 -z-10 h-[1600px] w-[1600px] -translate-x-1/2">
      <svg
        className="absolute left-1/2 top-[300px] h-[1000px] w-[1000px] -translate-x-1/2"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1000 1000"
      >
        <path
          fill="rgb(245, 244, 238)"
          fill-rule="evenodd"
          d="M500.001 0C776.142 0 1000 223.858 1000 500s-223.858 500-499.999 500C223.856 1000-.002 776.142-.002 500S223.856 0 500.001 0z"
        ></path>
      </svg>
      <svg
        width="1600"
        height="1600"
        viewBox="0 0 1600 1600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M800.001 0C1241.83 0 1600 358.171 1600 799.999C1600 1241.83 1241.83 1600 800.001 1600C358.172 1600 0 1241.83 0 799.999C0 358.171 358.172 0 800.001 0Z"
          fill="url(#paint0_linear_3_10)"
          className="opacity-90"
        />
        <defs>
          <linearGradient
            id="paint0_linear_3_10"
            x1="0"
            y1="0"
            x2="0"
            y2="160000"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#ED1C24" />
            <stop offset="0.755208" stop-color="white" />
            <stop offset="1" stop-color="#FEFEFE" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}
