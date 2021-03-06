import React from "react"

export default (props) => {
  return (
    <svg
    id={`${props.id + "svg"}`}
      viewBox="0 0 72 99"
      version="1.1"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      width="100%"
      height="100%"
    >
      <path
        d="M0 35.6551C0 15.9949 15.9949 0 35.6553 0C55.3156 0 71.3102 15.9949 71.3106 35.6551C71.3106 60.0541 39.4026 95.8732 38.0441 97.3862C36.7704 98.8048 34.5425 98.8074 33.2665 97.3862C31.908 95.8732 0 60.0541 0 35.6551ZM17.7164 35.6551C17.7164 45.5468 25.7637 53.5942 35.6553 53.5942C45.5468 53.5942 53.594 45.547 53.594 35.6553C53.594 25.7637 45.5468 17.7162 35.6553 17.7162C25.7639 17.7162 17.7164 25.7635 17.7164 35.6551Z"
        id={`${props.id + "1"}`}
        fill="lightgrey"
        fillRule="evenodd"
        stroke="none"
      />
    </svg>
  )
}
