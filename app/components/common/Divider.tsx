function Divider() {
  return (
    <div
      className="relative my-1 flex h-7 w-full items-center justify-center before:absolute before:left-0 before:top-1/2 before:h-[0.0625rem] before:w-[calc(50%-1rem)] before:bg-white after:absolute after:right-0 after:top-1/2 after:h-[0.0625rem] after:w-[calc(50%-1rem)] after:bg-white"
      aria-hidden="true"
    >
      <span className="inline-block h-2 w-2 rotate-45 bg-white" />
    </div>
  );
}

export default Divider;
