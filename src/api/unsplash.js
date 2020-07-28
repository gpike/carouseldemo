const fetchUrls = async (count) => {
    const URL = "https://source.unsplash.com/1600x900/?beach";
    const fetchedUrls = [];
    for(let i=0; i < count;i++) {
        const response = await fetch(URL);
        const imageUrl = response.url;
        fetchedUrls.push(imageUrl);
    }
    return fetchedUrls;
}

export default fetchUrls;
