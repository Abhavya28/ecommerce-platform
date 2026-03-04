import { ChevronRight, Search } from "lucide-react";
import { useEffect, useState } from "react";
import Button from "../components/Button";
import { shopGrid } from "../data/data";

const NEWS_API_KEY = import.meta.env.VITE_NEWS_API_KEY;
export default function Blogs() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        // 🔹 Here is your fetch URL — you can change q=technology to any topic
        const res = await fetch(
          `https://newsapi.org/v2/everything?q=technology&sortBy=publishedAt&language=en&apiKey=${NEWS_API_KEY}`, //newsapi.org
        );
        const data = await res.json();
        setArticles(data.articles);
      } catch (err) {
        console.error("Error fetching news:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm z-50">
        <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center gap-4">
          <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-gray-700 font-medium">Loading news...</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="bg-[#ECF6F5] px-4 py-6 md:px-20 md:py-10 flex flex-col gap-4">
        <p className="text-headings">
          <a href="/" className="text-primary">
            Home{" "}
          </a>{" "}
          /{" "}
        </p>
        <h1 className="text-4xl text-headings font-semibold">Blogs</h1>
      </div>

      <div className="flex flex-col md:flex-row px-4 py-6 md:px-20 md:py-10">
        {/* Left */}
        <div className="w-full md:w-[75%]">
          <div className="grid grid-cols-1 gap-6">
            {articles.slice(1, 6).map((article, index) => (
              <div
                key={index}
                className="rounded-lg overflow-hidden transition duration-300"
              >
                {article.urlToImage && (
                  <img
                    src={article.urlToImage}
                    alt={article.title}
                    className="w-full h-96 object-cover p-2"
                  />
                )}
                <div className="flex flex-col gap-4 p-4 items-start">
                  <Button className="text-white font-semibold bg-secondary">
                    {article.author || "Source"}
                  </Button>

                  <div>
                    <h2 className="font-bold text-primary text-4xl mb-2">
                      {article.title}
                    </h2>

                    <p className="text-sm text-gray-500 mb-2">
                      {new Date(article.publishedAt).toLocaleDateString(
                        "en-US",
                        {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        },
                      )}
                    </p>
                  </div>

                  <p className="text-lg text-gray-600 mb-3">
                    {article.description || "No description available."}
                  </p>

                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary font-semibold flex items-center"
                  >
                    Read More
                    <ChevronRight size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right */}
        <div className="w-full md:w-[25%] p-6 md:p-12 flex flex-col gap-10">
          <form className="w-full md:max-w-3xl md:mx-6 text-gray-600">
            <div className="flex relative bg-white rounded-2xl shadow-sm outline outline-secondary">
              {/* Input */}
              <input
                type="search"
                placeholder="Search product"
                className="w-full px-6 py-3 rounded-3xl"
              />
              {/* Search Button */}
              <button
                type="submit"
                className="px-5 py-2 flex items-center justify-center"
              >
                <Search className="text-secondary" size={18} />
              </button>
            </div>
          </form>

          {/* Categories */}
          <div>
            <h1 className="text-xl font-bold text-headings mb-4">Categories</h1>
            <ul className="flex flex-col text-primary gap-4 cursor-pointer">
              <li className="hover:text-black">COVID-19</li>
              <li className="hover:text-black">Immune</li>
              <li className="hover:text-black">Personal Care</li>
              <li className="hover:text-black">Mum & Baby</li>
              <li className="hover:text-black">Sexual Health</li>
              <li className="hover:text-black">Tips</li>
              <li className="hover:text-black">Wellness</li>
            </ul>
          </div>

          {/* Recent Posts */}
          <div className="flex flex-col gap-6">
            <h2 className="text-xl font-bold">Latest News</h2>

            <div className="flex flex-col gap-6">
              {/* News Item 1 */}
              <article className="flex gap-4 items-stretch">
                <img
                  src="/images/corona.jpg"
                  alt="Corona"
                  className="w-36 h-24 aspect-square object-cover rounded"
                />

                <div className="flex flex-col justify-between">
                  <h3 className="font-semibold text-primary hover:text-blue-950">
                    Herbs and Supplements May Protect You From the Coronavirus
                    Epidemic
                  </h3>

                  <div className="text-sm">
                    <p className="text-headings">October 28, 2020</p>
                    <p className="text-primary">0 comments</p>
                  </div>
                </div>
              </article>

              {/* News Item 2 */}
              <article className="flex gap-4 items-stretch">
                <img
                  src="/images/spa.jpg"
                  alt="Spa"
                  className="w-36 h-24 aspect-square object-cover rounded"
                />

                <div className="flex flex-col justify-between">
                  <h3 className="font-semibold text-primary hover:text-blue-950">
                    5 Essential Natural Stress Relief Products for That Help
                    Calm You Down
                  </h3>

                  <div className="text-sm">
                    <p className="text-headings">October 21, 2020</p>
                    <p className="text-primary">3 comments</p>
                  </div>
                </div>
              </article>
            </div>
          </div>

          {/* Tags */}
          <div>
            <h1 className="text-xl font-bold text-headings mb-4">Tags</h1>
            {[
              "allergy",
              "baby",
              "coronavirus",
              "epidemic",
              "fever",
              "health",
              "immune",
              "medicines",
              "sun care",
              "viagra",
              "vitamin",
              "wellness",
            ].map((tag, index) => (
              <Button
                key={index}
                className="m-1 px-3 py-1 bg-purple-200 text-primary rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors duration-700"
              >
                {tag}
              </Button>
            ))}
          </div>

          {/* Recent Products */}
          <div>
            <h1 className="text-xl font-bold text-headings mb-4">
              Recent Products
            </h1>
            <div className="flex flex-col gap-6">
              {shopGrid.slice(0, 3).map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-4 cursor-pointer"
                >
                  <img src={item.img} alt={item.name} className="h-24 w-22" />
                  <div>
                    <p className="text-lightgray text-sm font-semibold">
                      {item.category}
                    </p>
                    <h1 className="text-primary text-xl font-bold hover:text-blue-900">
                      {item.name}
                    </h1>
                    <p className="text-secondary font-semibold">
                      Rs. {item.price}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
