import image from "../assets/news.jpg";

const NewsItem = ({ title, description, url, src }) => {
  return (
    <div
      className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2"
      style={{ maxWidth: "340px" }}>
      <img
        style={{ height: "200px", width: "325px", objectFit: "cover" }}
        src={src || image}
        className="card-img-top"
        alt="News"
        onError={(e) => {
          e.target.src = image;
        }}
      />

      <div className="card-body">
        <h5 className="card-title">
          {title ? title.slice(0, 60) : "No Title"}
        </h5>

        <p className="card-text">
          {description
            ? description.slice(0, 100)
            : "Click Read More to view the complete article."}
        </p>

        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary">
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsItem;
