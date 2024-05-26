function Card( {name, floors, system , children, adress}) {
  return (
    <div className="card">
        <h1 className="bold center">{name || "Гуртожиток"}</h1>
        <p><span className="bold">Кількість поверхів:</span> {floors || "Невідомо"}.</p>
        <p><span className="bold">Система планування:</span> {system || "Невідомо"}.</p>
        <p><span className="bold">Опис:</span> {children || "Відсутній."}</p>
        <p><span className="bold">Адреса:</span> {adress || "Невідомо."}</p>
    </div>
  )
}

export default Card
