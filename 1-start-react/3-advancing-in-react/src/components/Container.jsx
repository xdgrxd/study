const Container = ({ children, propValue }) => {
  return (
    <div>
      <h2>Container Title 📝</h2>
      <p>{children}</p>
      <p>{propValue}</p>
    </div>
  );
};

export default Container;
