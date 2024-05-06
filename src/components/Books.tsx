import BookItem from "./BookItem";
// import ImageComp from "../utils/images";

interface BookObj {
  name: string;
  src: string;
}

// Regular function component
// function MyImageComponent({ src, alt }: { src: string, alt: string; }) {
//   return <img src={src} alt={alt} />;
// }

function Books() {
  const booksArr: BookObj[] = [
    {
      name: "Rich dad Poor Dad",
      src: "./assets/rich-dad-poor-dad.jpg",
    },
    {
      name: "The psychology Of Money",
      src: "./assets/the-psychology-of-money-book.webp"
    },
    {
      name: "The Atomic Habit",
      src: "./assets/the-atomic-habit.jpg"
    }];

  return (
    <div className=" books flex flex-col mb-10" >
      <h1 className="text-3xl font-bold mb-6">Books</h1>
      <p className="mb-4 text-xl">
        These are the books that i am very fond of and gave me priceless lessons
        about life and personal finance.{" "}
      </p>
      <div>
        <ul className="flex flex-wrap mb-3 gap-8">
          {booksArr.map(({ name, src }, index) => {
            return <BookItem key={index} name={name} src={src} />;
          })}
        </ul>
      </div>
    </div >
  );
}

export default Books;
