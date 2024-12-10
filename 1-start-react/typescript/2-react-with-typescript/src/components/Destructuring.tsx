type Props = {
  title: string;
  content: string;
  commentsQty: number;
  tags: string[];

  category: Category;
};

export enum Category {
  JS = "JavaScript",
  TS = "TypeScript",
  P = "Python",
}

const Destructuring = ({ title, content, commentsQty, tags, category }: Props) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{content}</p>
      <p>Comments quantity: {commentsQty}</p>

      <div>{tags && tags.map((tag) => <span>#{tag}</span>)}</div>

      <h4>Category: {category}</h4>
    </div>
  );
};

export default Destructuring;
