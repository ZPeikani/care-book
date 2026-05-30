type buttonsProps = {
  buttonText: string;
  classNames?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  buttonType: "button" | "submit" | "reset";
};
export default function Buttons({
  buttonText,
  classNames,
  onClick,
  buttonType,
}: buttonsProps) {
  return (
    <>
      <button
        type={buttonType}
        onClick={onClick}
        className={`bg-primary hover:bg-blue-900 hover:shadow-md shadow-secondary text-white font-semibold ${classNames} mt-3 py-3 rounded focus:outline-none focus:shadow-outline cursor-pointer`}
      >
        {buttonText}
      </button>
    </>
  );
}
