interface BackProps {
  width?: number;
  height?: number;
}

function Caption({ width = 20, height = 20 }: BackProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="caption">
        <g id="Group 54490">
          <path
            id="Vector"
            d="M17.9998 9.99992C17.9998 5.58168 14.4181 2 9.99992 2C5.58168 2 2 5.58168 2 9.99992C2 14.4181 5.58168 17.9998 9.99992 17.9998C14.4181 17.9998 17.9998 14.4181 17.9998 9.99992Z"
            fill="#B4B5BF"
          />
          <path
            id="Vector_2"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.61689 7.06986C8.95466 7.25254 8.59994 7.6919 8.59994 8.18656H6.59996C6.59996 6.5265 7.84153 5.48493 9.08506 5.14189C10.3133 4.80308 11.8949 5.0392 12.8274 6.28681C13.2114 6.7872 13.4141 7.40286 13.3991 8.03429C13.3841 8.66883 13.1501 9.27706 12.7393 9.76002L12.718 9.78506L12.6951 9.80866C12.3104 10.205 11.7933 10.4562 11.4805 10.6081C11.4268 10.6342 11.3791 10.6574 11.3391 10.6779C11.0118 10.8455 10.9134 10.9395 10.8645 11.0307L10.8642 11.0337V11.6001H8.86426V11.0256C8.86546 10.7539 8.9213 10.4858 9.02802 10.2365L9.03402 10.2224L9.0405 10.2085C9.38737 9.4625 10.0136 9.10971 10.4273 8.89779C10.5307 8.84475 10.6207 8.79971 10.6998 8.76019C10.9783 8.62067 11.1203 8.54955 11.2365 8.43899C11.3397 8.30703 11.3958 8.14859 11.3997 7.98673C11.4038 7.81445 11.3485 7.64366 11.2392 7.50224L11.2334 7.49475L11.2278 7.48714C10.9218 7.07533 10.292 6.88364 9.61689 7.06986Z"
            fill="white"
          />
          <path
            id="Vector_3"
            d="M10 15.0882C10.6627 15.0882 11.2 14.551 11.2 13.8883C11.2 13.2255 10.6627 12.6883 10 12.6883C9.33729 12.6883 8.80002 13.2255 8.80002 13.8883C8.80002 14.551 9.33729 15.0882 10 15.0882Z"
            fill="white"
          />
        </g>
      </g>
    </svg>
  );
}

export default Caption;
