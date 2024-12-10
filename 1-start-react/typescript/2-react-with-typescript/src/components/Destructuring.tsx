type Props = {
  title: string;
  content: string;
  commentsQty: number;
  tags: string[];
};

const Destructuring = ({ title, content, commentsQty, tags }: Props) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{content}</p>
      <p>Comments quantity: {commentsQty}</p>

      <div>{tags && tags.map((tag) => <span>#{tag}</span>)}</div>
    </div>
  );
};

export default Destructuring;
