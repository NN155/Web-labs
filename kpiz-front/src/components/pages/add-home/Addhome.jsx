import { Helmet } from "react-helmet"
import React from "react"
import './Addhome.css';


function Addhome() {
    const [formData, setFormData] = React.useState(
        {
            name: "", 
            floors: "", 
            system: "", 
            description: "",
            adress: ""
        }
    )
    
    function handleChange(event) {
        console.log(event)
        const {name, value, type, checked} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }
  return (
    <section>
        <Helmet>
            <title>Гуртожиток | Добавити</title>
        </Helmet>
            <form method="POST">
            <div className="addhome">
            <input
                    type="text"
                    placeholder="Назва"
                    onChange={handleChange}
                    name="name"
                    value={formData.name}
                    autoComplete="off"
            /><br></br>
            <input
                    type="number"
                    placeholder="Поверхів"
                    onChange={handleChange}
                    name="floors"
                    value={formData.floors}
                    autoComplete="off"
            /><br></br>
            <input
                    type="text"
                    placeholder="Система"
                    onChange={handleChange}
                    name="system"
                    value={formData.system}
                    autoComplete="off"
            /><br></br>
            <input
                    type="text"
                    placeholder="Адреса"
                    onChange={handleChange}
                    name="adress"
                    value={formData.adress}
                    autoComplete="off"
            /><br></br>
            <textarea
                    className="large-textarea"
                    type="text"
                    placeholder="Опис"
                    onChange={handleChange}
                    name="description"
                    value={formData.description}
                    autoComplete="off"
            /><br></br>
            <button type="submit">Відправити</button>
            </div>
        </form>
    </section>
  )
}

export default Addhome