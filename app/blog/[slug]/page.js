import { BlogDetail as BlogDetailComponent } from "@/components/BlogDetail"
import { getPostDetail } from "@/service/getPostDetail";

export async function generateMetadata({ params }) {
    const postDetailData = await getPostDetail(params.slug);
    const post = postDetailData[0];

    return {
      title: post.yoast_head_json.title,
      description: post.yoast_head_json.description,
      languages: post.yoast_head_json.og_locale,
      googleBot: {
        index: true,
        follow: false,
        noimageindex: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    }
}


export default function BlogDetail({ params }) {
    return (
       <BlogDetailComponent data={params} />
    )
}