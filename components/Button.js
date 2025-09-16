export default function Button({
  buttonText,
  bgColor,
  textColor,
  border,
  textSize,
  hover,
}) {
  return (
    <>
      <div className="block text-center">
        <button
          className={`${bgColor} ${textColor} ${border} ${textSize} ${hover} py-6 lg:py-10 px-10 lg:mt-10 rounded-2xl font-bold transition delay-150 duration-200 ease-in-out hover:-translate-y-1 hover:scale-105 cursor-pointer shadow-xl`}
        >
          {buttonText}
        </button>
      </div>
    </>
  )
}
