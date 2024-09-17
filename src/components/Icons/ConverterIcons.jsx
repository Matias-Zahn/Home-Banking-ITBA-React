import * as React from "react"
const ConverterIcons = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="ionicon"
    viewBox="0 0 512 512"
    {...props}
  >
    <path
      fill="none"
      stroke="Black"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={32}
      d="m304 160-64-64 64-64m-97 320 64 64-64 64"
    />
    <circle
      cx={112}
      cy={96}
      r={48}
      fill="none"
      stroke="Black"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={32}
    />
    <circle
      cx={400}
      cy={416}
      r={48}
      fill="none"
      stroke="Black"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={32}
    />
    <path
      fill="none"
      stroke="Black"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={32}
      d="M256 96h84a60 60 0 0 1 60 60v212m-145 48h-84a60 60 0 0 1-60-60V144"
    />
  </svg>
)
export default ConverterIcons
