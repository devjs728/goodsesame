const FaceBookIcon: React.FC<{ fillColor: string }> = ({ fillColor }) => {
  return (
    <svg
      width="12"
      height="20"
      viewBox="0 0 12 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.63644 19.5V10.8336H10.8803L11.3644 7.45567H7.63644V5.3021C7.63644 4.32084 7.93662 3.66088 9.50528 3.66088H11.5V0.630256C11.1514 0.586837 9.97007 0.5 8.59507 0.5C5.71919 0.5 3.75352 2.07176 3.75352 4.96344V7.45567H0.5V10.8336H3.75352V19.5H7.63644Z"
        fill={fillColor}
      />
    </svg>
  );
};

export default FaceBookIcon;
