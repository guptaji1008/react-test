
const ShowDetails = ({data, onCancel, setShowDetails}) => {

  const handleOnClick = (e) => {
    if (e.target.id === "modal-container") {
        onCancel()
        setShowDetails({})
    }
  }

  return (
    <div className="fixed inset-0">
      <div onClick={handleOnClick} id="modal-container" className="size-full backdrop-blur flex items-center justify-center">
        <ShowDetailsModal data={data}/>
      </div>
    </div>
  )
}

export default ShowDetails

const ShowDetailsModal = ({data}) => {
    return (
        <div className="p-5 bg-gray-200 backdrop-blur-lg shadow-lg shadow-gray-800 rounded-md lg:w-3/5 md:3/5 sm:w-4/5 w-4/5 md:w-2/3 lg:h-5/6 sm:h-4/6 h-5/6 overflow-auto scrollbar-thin scrollbar-thumb-gray-400 space-y-3">
            <p className="text-3xl font-bold text-center">{data.title}</p>
            <p className="text-2xl font-semibold"> <span className="font-bold">Score:</span> {data.score}</p>
            <p className="text-2xl font-semibold"> <span className="font-bold">URL:</span> <a className="text-blue-700 hover:underline" href={data.url} target="_blank">Click Here</a></p>
            <p className="text-2xl"> <span className="font-bold">SelfText_html:</span> {data.selfTextHtml ? data.selfTextHtml : "Not Found"}</p>
        </div>
    )
}
