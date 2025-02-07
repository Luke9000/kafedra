import './styles.css'

const index = () => {
  return (
    <div className="spoiler">
  <input type="checkbox" id="spoiler-toggle" className="spoiler-checkbox"/>
  <label htmlFor="spoiler-toggle" className="spoiler-btn">Показать больше</label>
<div className="spoiler-content">
    <p>
      Это длинный текст, из которого изначально видно только 20%.
      Остальной текст скрыт и раскроется при нажатии.
    </p>
    <p>
      Дополнительный контент, который изначально не видно.
    </p>
  </div>
</div>

  )
}
export default index