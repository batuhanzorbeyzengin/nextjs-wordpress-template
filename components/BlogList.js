'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import { getPost } from "@/service/getPost"
import Image from "next/image";

export function BlogList() {
    const [postData, setPostData] = useState([]);

    useEffect(() => {
        const fetchPostItem = async () => {
            const post = await getPost();
            setPostData(post);
        }

        fetchPostItem();
    }, []);

    return (
        <>
            <div className="container mx-auto">
                <div className="flex flex-wrap -mx-0 xl:-mx-4">
                    {postData.length === 0 ? <LoadingPlaceholder /> : postData.map(item => {
                        const category = item._embedded?.['wp:term'][0][0];
                        const categoryName = category?.name;
                        return (
                            <div key={item.id} className="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4">
                                <div className="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden h-full max-h-full">
                                    <div className="relative pb-48 overflow-hidden">
                                        <Image className="absolute inset-0 h-full w-full object-cover" src="https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" width={750} height={500} alt="" />
                                    </div>
                                    <div className="p-4">
                                        <span className="inline-block px-2 py-1 leading-none bg-orange-200 text-orange-800 rounded-full font-semibold uppercase tracking-wide text-xs">
                                            {categoryName}
                                        </span>
                                        <h2 className="mt-2 mb-2  font-bold">{item.title.rendered}</h2>
                                        <div className="text-sm mb-2" dangerouslySetInnerHTML={{ __html: item.excerpt.rendered }} />
                                        <Link href={`blog/${item.slug}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                            Devamını Gör
                                            <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div >
        </>
    )
}

function LoadingPlaceholder() {
    return (
        <div className="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4">
            <div className="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden h-full max-h-full">
                <div className="relative pb-48 overflow-hidden">
                    <div className="absolute inset-0 h-full w-full object-cover bg-gray-200"></div>
                </div>
                <div className="p-4">
                    <div className="inline-block px-2 py-1 leading-none bg-gray-200 text-gray-800 rounded-full font-semibold uppercase tracking-wide text-xs">
                        &nbsp;
                    </div>
                    <h2 className="mt-2 mb-2 font-bold bg-gray-200 text-transparent">
                        &nbsp;
                    </h2>
                    <div className="text-sm mb-2 bg-gray-200 text-transparent">
                        &nbsp;
                    </div>
                    <div className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-transparent bg-gray-200 rounded-lg focus:ring-4 focus:outline-none focus:ring-gray-300">
                        &nbsp;
                    </div>
                </div>
            </div>
        </div>
    );
}
