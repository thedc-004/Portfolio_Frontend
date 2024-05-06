function BookItem({ name, src }: { name: string; src: string; }) {
  return (
    <li className="booksItem flex justify-center items-center flex-col bg-grey text-black  px-4 py-4 me-5 text-lg rounded-md hover:scale-105 hover:bg-[#1e82b5]">
      <img src={src} alt="Rich dad poor dad Book Cover page" />
      <p className="font-medium w-40">{name}</p>
    </li>
  );
}

export default BookItem;
