import BookItem from "./BookItem";
// import ImageComp from "../utils/images";
import React from "react";
// import display_pic from "../assets/display_pic.png";
// import richDadPoorDad from "../assets/rich-dad-poor-dad.jpg";
// import thePsychologyOfMoney from "../assets/the-psychology-of-money-book.webp";
// import theAtomicHabit from "../assets/the-atomic-habit.jpg";

interface BookObj {
  name: string;
  Img: React.ReactNode;
}

// Regular function component
function MyImageComponent({ src, alt }: { src: string, alt: string; }) {
  return <img src={src} alt={alt} />;
}

function Books() {
  const booksArr: BookObj[] = [
    {
      name: "Rich dad Poor Dad",
      Img: <MyImageComponent src="./src/assets/rich-dad-poor-dad.jpg" alt="Rich dad poor dad Book Cover page" />,
    },
    {
      name: "The psychology Of Money",
      Img: <MyImageComponent src="./src/assets/the-psychology-of-money-book.webp" alt="hello" />,
    },
    {
      name: "The Atomic Habit",
      Img: <MyImageComponent src="./src/assets/the-atomic-habit.jpg" alt="hello" />,
    },
  ];

  return (
    <div className=" books flex flex-col mb-10">
      <h1 className="text-3xl font-bold mb-6">Books</h1>
      <p className="mb-4 text-xl">
        These are the books that i am very fond of and gave me priceless lessons
        about life and personal finance.{" "}
      </p>
      <div>
        <ul className="flex flex-wrap mb-3 gap-8">
          {booksArr.map(({ name, Img }, index) => {
            return <BookItem key={index} name={name} Img={Img} />;
          })}
        </ul>
      </div>
    </div>
  );
}

export default Books;
