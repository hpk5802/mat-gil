function IconArrowRight({ className }: { className?: string }) {
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
        d="M6.46967 17.4702C6.76256 17.7631 7.23744 17.7631 7.53033 17.4702L14.4021 10.5984C14.5428 10.4577 14.6218 10.2669 14.6218 10.068C14.6218 9.86911 14.5428 9.67834 14.4021 9.53769L7.53033 2.66588C7.23744 2.37299 6.76256 2.37299 6.46967 2.66588C6.17678 2.95878 6.17678 3.43365 6.46967 3.72654L12.8111 10.068L6.46967 16.4095C6.17678 16.7024 6.17678 17.1773 6.46967 17.4702Z"
        fill="#ffffff"
      />
    </svg>
  );
}

export default IconArrowRight;
