import { Link } from "react-router";

function ListPage({ articles }) {
  return (
    <div>
      <h2>Список</h2>
      <ul>
        {articles.map(article => (
          <li key={article.id}>
            <Link to={`/articles/${article.id}`}>{article.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListPage;
