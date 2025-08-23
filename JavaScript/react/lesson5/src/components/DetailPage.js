import { useParams } from "react-router";

function DetailPage({ pages }) {
  const {id} = useParams();
  const page = pages.find((page) => page.id === Number(id));

  if (!page) {
    return <div>статья не найдена</div>;
  }

  return (
    <div>
      <h2>{page.title}</h2>
      <p>{page.text}</p>
    </div>
  );
}

export default DetailPage;
