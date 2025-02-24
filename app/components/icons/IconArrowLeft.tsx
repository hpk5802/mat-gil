function IconArrowLeft({ className }: { className?: string }) {
  return (
    <svg
      className={className || ''}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.4629 17.4702C13.1701 17.7631 12.6952 17.7631 12.4023 17.4702L5.53048 10.5984C5.38983 10.4577 5.31081 10.2669 5.31081 10.068C5.31081 9.86911 5.38983 9.67834 5.53048 9.53769L12.4023 2.66588C12.6952 2.37299 13.1701 2.37299 13.4629 2.66588C13.7558 2.95878 13.7558 3.43365 13.4629 3.72654L7.12147 10.068L13.4629 16.4095C13.7558 16.7024 13.7558 17.1773 13.4629 17.4702Z"
        fill="#ffffff"
      />
    </svg>
  );
}

export default IconArrowLeft;
