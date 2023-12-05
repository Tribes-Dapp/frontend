
type ButtonProps = {
    text: string;
};

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <button className='bg-softBlack text-white font-medium text-lg py-2 px-20 rounded-xl hover:scale-[97%] duration-300 ease-in-out'>{props.text}</button>   
  );
}

export default Button;
