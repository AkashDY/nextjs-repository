import { useRouter } from "next/router";

function detailsPage () {
    const router = useRouter();

    const newsId = router.query.newsId;
    console.log(newsId);
    return <h2>Detail page</h2>
}

export default detailsPage;