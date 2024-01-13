import { useState } from "react";
import { useEffect } from "react";
import Card from "./Card";
import ShowDetails from "./ShowDetails";
import Loader from "./Loader";

const Home = () => {
  const [itemList, setItemList] = useState([]);
  const [showDetails, setShowDetails] = useState({});
  const [showModal, setShowModal] = useState(false);

  const fetchData = async () => {
    const response = await fetch("https://www.reddit.com/r/reactjs.json");
    const jsonData = await response.json();
    setItemList(jsonData.data.children);
  };

  useEffect(() => {
    fetchData();
  }, [itemList]);

  if (!itemList.length) return <Loader />;

  return (
    <>
        <p className="text-5xl font-bold text-center my-10">React Test :</p>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-3 gap-y-5 p-8">
        {itemList.length &&
          itemList.map((elem, id) => {
            return (
              <Card
                key={id}
                title={elem.data.title}
                score={elem.data.score}
                url={elem.data.url}
                selfTextHtml={elem.data.selftext_html}
                onShowModal={() => setShowModal(true)}
                setShowDetails={setShowDetails}
              />
            );
          })}
        {showModal && (
          <ShowDetails
            data={showDetails}
            setShowDetails={setShowDetails}
            onCancel={() => setShowModal(false)}
          />
        )}
      </div>
    </>
  );
};

export default Home;
