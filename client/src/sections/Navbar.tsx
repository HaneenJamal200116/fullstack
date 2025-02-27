import { useQuery } from "@apollo/client";
// @ts-ignore
import { client, GET_CATEGORIES } from '../constants/index';
import { BrowserRouter as Router, Routes, Route, NavLink, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Categories = () => {
    const { loading, error, data } = useQuery(GET_CATEGORIES, { client });
    const { category } = useParams();
    const [activeTab, setActiveTab] = useState(category || 'all');

    useEffect(() => {
        setActiveTab(category || 'all' ); 
    }, [category]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    const NavItems = () => {
        return (
            <ul className="flex justify-center uppercase">
            {data.categories.map((cat: { id: number; name: string }) => (
                <li key={cat.id} 
                className={`h-14 px-6  font-semibold                    
                   ${activeTab === cat.name.toLowerCase() ? 'text-[#5ece7b] border-b-2 border-[#5ece7b] font-semibold' : 'text-black'}`}>
                    <NavLink
                        to={`/category/${cat.name.toLowerCase()}`}
                        onClick={() => setActiveTab(cat.name.toLowerCase())}
                        data-testid={activeTab === cat.name.toLowerCase() ? "active-category-link" : "category-link"}
                        className='cursor-pointer '
                    >
                        {cat.name}
                    </NavLink>
                </li>
            ))}
        </ul>
        );
    };

    return (
        <header className=" left-0 top-0 w-full max-h-20 z-50 ">
            <div className="flex ">
                <div className="flex-1">
                    <NavItems />
                </div>
                <div className="flex-1 flex justify-center cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" width="40" height="40">
                        <path fill="#5ece7b" d="M36.8 192l566.3 0c20.3 0 36.8-16.5 36.8-36.8c0-7.3-2.2-14.4-6.2-20.4L558.2 21.4C549.3 8 534.4 0 518.3 0L121.7 0c-16 0-31 8-39.9 21.4L6.2 134.7c-4 6.1-6.2 13.2-6.2 20.4C0 175.5 16.5 192 36.8 192zM64 224l0 160 0 80c0 26.5 21.5 48 48 48l224 0c26.5 0 48-21.5 48-48l0-80 0-160-64 0 0 160-192 0 0-160-64 0zm448 0l0 256c0 17.7 14.3 32 32 32s32-14.3 32-32l0-256-64 0z"/>
                    </svg>
                </div>
                <div className="flex-1 flex justify-end cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32.402 32">
                        <path d="M6 30a2 2 1080 1 0 4 0 2 2 1080 1 0-4 0zm18 0a2 2 1080 1 0 4 0 2 2 1080 1 0-4 0zM-.058 5a1 1 0 0 0 1 1H3.02l1.242 5.312L6 20c0 .072.034.134.042.204l-1.018 4.58A.997.997 0 0 0 6 26h22.688a1 1 0 0 0 0-2H7.248l.458-2.06c.1.016.19.06.294.06h18.23c1.104 0 1.77-.218 2.302-1.5l3.248-9.964C32.344 8.75 31.106 8 30 8H6c-.156 0-.292.054-.438.088l-.776-3.316A1 1 0 0 0 3.812 4H.942a1 1 0 0 0-1 1zm6.098 5h23.81l-3.192 9.798c-.038.086-.07.148-.094.19-.066.006-.17.012-.334.012H8v-.198l-.038-.194L6.04 10z"></path>
                    </svg>
                </div>
            </div>
        </header>
    );
};

export default Categories;
