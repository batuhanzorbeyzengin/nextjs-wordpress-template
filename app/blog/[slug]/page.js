'use client';

import { getPostDetail } from "@/service/getPostDetail";
import { useState, useEffect } from "react"

export default function BlogDetail({ params }) {
    const [postDetail, setPostDetail] = useState([]);

    useEffect(() => {
        const fetchPostDetailItem = async () => {
            const postDetailData = await getPostDetail(params.slug);
            setPostDetail(postDetailData);
        }

        fetchPostDetailItem();
    }, [params]);

    return (
        <div className="text-sm" dangerouslySetInnerHTML={{ __html: postDetail[0]?.content.rendered }} />
    )
}