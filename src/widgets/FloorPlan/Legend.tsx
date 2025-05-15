interface Props {
  fill: string;
  text: string;
  size: number;
}

const Legend = ({ fill, text,size=48 }: Props) => {
  const style: React.CSSProperties = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "var(--spacing-s)",

  };

  return (
    <div style={style}>
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="1"
          y="1"
          width={size - 2}
          height={size - 2}
          fill={fill}
          stroke="#201541"
          stroke-width="1"
        />
      </svg>

      <span >{text}</span>
    </div>
  );
};

export default Legend;
