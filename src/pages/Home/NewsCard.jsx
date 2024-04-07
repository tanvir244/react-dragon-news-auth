import { Link } from "react-router-dom";

const NewsCard = ({ eachNews }) => {
    const { title, image_url, details, _id } = eachNews;

    return (
        <div className="card w-full bg-base-100 shadow-xl mb-6 border-b-2">
            <figure><img className="" src={image_url} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                {
                    details.length > 200
                        ? <p>{details.slice(0, 200)} <Link
                            to={`/news/${_id}`}
                            className="font-bold text-blue-500 ml-4">Read more....</Link></p>
                        : <p>{details}</p>
                }
            </div>
        </div>
    );
};

export default NewsCard;