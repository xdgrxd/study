type Props = {
  name: string;
};

const SecondComponents = (props: Props) => {
  return (
    <div>
      <p>My second component!</p>
      <p>The name is {props.name}!</p>
    </div>
  );
};

export default SecondComponents;
