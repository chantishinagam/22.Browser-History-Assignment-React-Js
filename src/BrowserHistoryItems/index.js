import './index.css'

const BrowserHistoryItems = props => {
  const {searchItem, deleteItem} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = searchItem

  const onDelete = () => {
    deleteItem(id)
  }

  return (
    <li>
      <div className="list-item">
        <p>{timeAccessed}</p>
        <img src={logoUrl} alt="domain logo" />
        <p>{title}</p>
        <p>{domainUrl}</p>
      </div>
      <div>
        <button type="button" data-testid="delete" onClick={onDelete}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}
export default BrowserHistoryItems
