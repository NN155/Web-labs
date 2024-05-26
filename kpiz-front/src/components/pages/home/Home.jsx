import React from "react"
import { Helmet } from "react-helmet"
import Card from "./Card"
import "./Home.css"

function Home() {
  const [data, setData] = React.useState([])


  React.useEffect(() => {
    async function getData() {
      try {
        const response = await fetch(`/data`);
        const jsonData = await response.json();
        setData(jsonData)
      } catch (error) {
      console.error('Помилка при отриманні даних:', error);
      }
    }
    getData()
  }, [])
  const info = data.map(({description, ...rest}) => {
    return (
      <Card {...rest}>{description}</Card>
    )
  })
  return (
    <section>
      <Helmet>
        <title>Гуртожиток | Головна</title>
      </Helmet>
      <div className="home">
        {info.length === 0 ? "Завантаження..." : info}
      </div>
    </section>
  )
}

export default Home
