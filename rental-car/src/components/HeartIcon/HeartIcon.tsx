import {  type FC } from "react";

interface Props {
  active?: boolean;
  size?: number;
}

const HeartIcon: FC<Props> = ({ active = false, size = 20 }) => {
  const fill = active ? "#3470ff" : "none";
  const stroke = active ? "#3470ff" : "#8d929a";

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.001 4.529c2.349-2.278 6.158-2.278 8.507 0 2.3 2.231 2.3 5.851 0 8.082l-7.261 7.06a1 1 0 01-1.392 0l-7.261-7.06c-2.3-2.231-2.3-5.851 0-8.082 2.349-2.278 6.158-2.278 8.507 0z"
        fill={fill}
        stroke={stroke}
        strokeWidth="1.5"
      />
    </svg>
  );
};

export default HeartIcon;
