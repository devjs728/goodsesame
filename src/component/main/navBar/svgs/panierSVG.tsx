const PanierSVG: React.FC<{ active: boolean }> = ({ active }) => {
  return (
    <svg
      width="18"
      height="20"
      viewBox="0 0 18 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.2483 0C3.53594 0 2.58487 2.13831 2.31942 4.99996H8.17891C7.92504 2.13831 7.04739 0 5.2483 0ZM9.37492 4.9993L11.8412 0.304065C11.931 0.132968 12.1454 0.0581813 12.3301 0.133513L16.8885 1.99324C17.0875 2.07443 17.1749 2.29716 17.0807 2.48256L15.803 4.9993H9.37492ZM0.00441816 6.46311C0.00663282 6.45166 0.00884971 6.44021 0.00884971 6.42846H17.9911C17.9912 6.44019 17.9934 6.45161 17.9956 6.463C17.9984 6.47765 18.0012 6.49223 17.9994 6.50733L16.7211 17.458C16.5527 18.9068 15.2703 19.9999 13.7384 19.9999H4.26158C2.7298 19.9999 1.44746 18.9068 1.27845 17.458L0.000547758 6.50733C-0.00121523 6.49223 0.00159965 6.47768 0.00441816 6.46311ZM12.0448 8.49755H12.6727C12.8307 8.49755 12.959 8.61961 12.959 8.77V10.3477C12.959 12.4257 11.183 14.1162 9.00016 14.1162C6.81727 14.1162 5.04136 12.4257 5.04136 10.3477V8.77C5.04136 8.61961 5.16958 8.49755 5.32757 8.49755H5.9555C6.11349 8.49755 6.24171 8.61961 6.24171 8.77V10.3477C6.24171 11.7957 7.47912 12.9736 9.00016 12.9736C10.5212 12.9736 11.7586 11.7957 11.7586 10.3477V8.77C11.7586 8.61961 11.8868 8.49755 12.0448 8.49755Z"
        fill={`${active ? "#F34160" : "#696864"}`}
      />
    </svg>
  );
};

export default PanierSVG;
