import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);
    const [news, setNews] = useState([]);

    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, []);

    useEffect(() => {
        fetch('news.json')
            .then(res => res.json())
            .then(data => setNews(data))
    }, [])

    return (
        <div className="space-y-6">
            <h2 className="text-2xl px-4">All Categories</h2>
            {
                categories.map(category => <NavLink
                    className="block ml-12"
                    key={category.id}
                    to={`/category/${category.id}`}
                >{category.name}</NavLink>)
            }
            {
                news.map(eachNews => <div
                key={eachNews.id}
                >
                    <img src={eachNews.image_url} alt="" />
                </div>)
            }
        </div>
    );
};

export default LeftSideNav;