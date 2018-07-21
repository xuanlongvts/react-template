import API from '../../_services/api';

const restApi = new API();

function getNews() {
    const url =
        'https://gist.githubusercontent.com/onimsha/928121db832ba7bcf3a7ca4cca515b4c/raw/c412300378cb13b3c61cfcd7b1bd627e185a9360/news_example.md';
    return restApi
        .fetchCrossDomain(url)
        .then(res => {
            return res.data;
        })
        .catch(err => {
            return err;
        });
}

function getBlogs() {
    const url_target = encodeURI('https://medium.com/feed/@bigbomeco');
    const api_key = 'djwgrzwmt0srkxnkl6iso1elkvdamfbb56l5xcgl';
    const url = `https://api.rss2json.com/v1/api.json?rss_url=${url_target}&api_key=${api_key}&order_by=pubDate&order_dir=desc&count=6`;
    return restApi
        .fetchCrossDomain(url)
        .then(res => {
            return res.data.items.map(item => {
                return {
                    title: item.title,
                    thumbnail: item.thumbnail,
                    pubDate: item.pubDate,
                    link: item.link
                };
            });
        })
        .catch(error => {
            throw error;
        });
}

export default {
    getNews,
    getBlogs
};
