function Divider() {
  return (
    <div className="flex justify-center items-center w-full h-7 my-1 relative after:absolute after:right-0 after:top-1/2 before:top-1/2 after:w-[calc(50%-1rem)] before:h-[0.0625rem] before:bg-white before:absolute before:left-0 before:w-[calc(50%-1rem)] after:h-[0.0625rem] after:bg-white">
      <span className="w-2 h-2 bg-white inline-block rotate-45" />
    </div>
  );
}

export default Divider;
