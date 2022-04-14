import { SVGProps } from "react"

export const HeadlineSvgElement = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    style={{ backgroundColor: "transparent" }}
    viewBox="0 0 396 32"
    width={396}
    height={32}
    {...props}
  >
    <path id="path0">
        <animate id="d0" attributeName="d" begin="0s;d3.end" dur="3600ms" values="m0,18 h0 ; m0,18 h396 ; m0,18 h0" keyTimes="0;0.8;1"/>
    </path>
    <text fontFamily="'Rubik', monospace" fill="#F0DB4F" fontSize="22" dominantBaseline="middle" x="50%" textAnchor="middle">
        <textPath xlinkHref="#path0">
            {'Mobile Developer (Flutter)'}
        </textPath>
    </text>

    <path id="path1">
        <animate id="d1" attributeName="d" begin="d0.end" dur="3600ms" values="m0,18 h0 ; m0,18 h396 ; m0,18 h0" keyTimes="0;0.8;1"/>
    </path>
    <text fontFamily="'Rubik', monospace" fill="#F0DB4F" fontSize="22" dominantBaseline="middle" x="50%" textAnchor="middle">
        <textPath xlinkHref="#path1">
            {'Front-end Developer (React JS)'}
        </textPath>
    </text>

    <path id="path2">
        <animate id="d2" attributeName="d" begin="d1.end" dur="3600ms" values="m0,18 h0 ; m0,18 h396 ; m0,18 h0" keyTimes="0;0.8;1"/>
    </path>
    <text fontFamily="'Rubik', monospace" fill="#F0DB4F" fontSize="22" dominantBaseline="middle" x="50%" textAnchor="middle">
        <textPath xlinkHref="#path2">
            {'Back-end Developer (Node & .NET)'}
        </textPath>
    </text>

    <path id="path3">
        <animate id="d3" attributeName="d" begin="d2.end" dur="3600ms" values="m0,18 h0 ; m0,18 h396 ; m0,18 h0" keyTimes="0;0.8;1"/>
    </path>
    <text fontFamily="'Rubik', monospace" fill="#F0DB4F" fontSize="22" dominantBaseline="middle" x="50%" textAnchor="middle">
        <textPath xlinkHref="#path3">
            {'Full Stack Developer'}
        </textPath>
    </text>
  </svg>
)
