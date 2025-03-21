function IconInfo({ className }: { className?: string }) {
  return (
    <svg
      className={className || ''}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="12" fill="#D1D5D9" />
      <path
        d="M12.6486 14.2041H11.3514L11.0676 7.33463L11 5H13L12.9324 7.33463L12.6486 14.2041ZM13 18H11.027V15.615H13V18Z"
        fill="#000000"
      />
    </svg>
  );
}

export default IconInfo;
