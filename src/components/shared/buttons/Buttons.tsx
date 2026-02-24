type buttonsProps = {
  buttonText: string;
  width?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};
export default function Buttons({ buttonText, width, onClick }: buttonsProps) {
  return (
    <>
      <button
        type="submit"
        onClick={onClick}
        className={`bg-primary hover:bg-blue-900 hover:shadow-md shadow-secondary text-white font-semibold ${width} mt-3 py-3 rounded focus:outline-none focus:shadow-outline cursor-pointer`}
      >
        {buttonText}
      </button>
    </>
  );
}
