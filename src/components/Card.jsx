
const Card = ({title, selfTextHtml, url, score, setShowDetails, onShowModal}) => {

  const reducer = (title) => {
    return title.substring(0, 20) + "..."
  }

  const handleShowDetailsButton = () => {
    onShowModal()
    setShowDetails({title, selfTextHtml, url, score})
  }

  return (
    <div className="bg-gray-300 backdrop-blur-lg shadow-lg shadow-gray-800 p-2 rounded-lg flex flex-col justify-between lg:h-auto md:h-auto sm:h-auto h-60">
      <div>
        <p className="text-lg font-semibold"> <span className="text-xl font-bold">Title:</span> {reducer(title)}</p>
        <p className="text-lg font-semibold"> <span className="text-xl font-bold">Score:</span> {score}</p>
        <p className="text-lg font-semibold"> <span className="text-xl font-bold">URL:</span> <a className="text-blue-700 hover:underline" href={url} target="_blank">Click Here</a></p>
        <p className="text-lg"> <span className="text-xl font-bold">SelfText_html:</span> {selfTextHtml ? reducer(selfTextHtml) : "Not Found"}</p>
      </div>
      <button onClick={handleShowDetailsButton} className="w-full text-xl text-center py-4 text-white font-bold bg-gray-800 hover:bg-gray-900 transition rounded-md">Show Details</button>
    </div>
  )
}

export default Card
