export default function Button({
  buttonText,
  bgColor,
  textColor,
  borderWidth,
  borderStyle,
  textSize,
}) {
  return (
    <>
      <div className="block text-center">
        <button
          className={`${bgColor} ${textColor} ${borderWidth} ${textSize} py-6 px-10 my-4 rounded-2xl font-bold`}
        >
          {buttonText}
        </button>
      </div>
    </>
  )
}
