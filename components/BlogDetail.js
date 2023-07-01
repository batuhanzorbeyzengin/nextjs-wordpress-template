'use client';

import { useState, useEffect } from "react"
import { getPostDetail } from "@/service/getPostDetail"

export function BlogDetail({data}) {
    const [postDetail, setPostDetail] = useState([]);

    useEffect(() => {
        const fetchPostDetailItem = async () => {
            const postDetailData = await getPostDetail(data.slug);
            setPostDetail(postDetailData);
        }

        fetchPostDetailItem();
    }, [data]);

    console.log("blog detail::", postDetail);

    return(
        <div className="text-sm" dangerouslySetInnerHTML={{ __html: postDetail[0]?.content.rendered }} />
    )
}