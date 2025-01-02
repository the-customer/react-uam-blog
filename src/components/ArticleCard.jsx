
export default function ArticleCard() {
  return (
    <div className="card bg-base-100  shadow-xl">
        <div className="card-body">
            <h2 className="card-title">Card title!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
            <button className="btn btn-error text-white">delete</button>
            </div>
        </div>
    </div>
  )
}
