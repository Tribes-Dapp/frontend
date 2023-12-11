
type ButtonProps = {
    text: string;
};

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <button className='bg-softBlack text-white font-medium text-lg py-2 px-20 rounded-xl'>{props.text}</button>   
  );
}

export default Button;
