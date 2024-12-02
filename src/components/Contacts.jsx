import { useState } from "react"

function Contacts() {
    const [text, setText] = useState("")
    const [number, setNumber] = useState("")
    const [email, setEmail] = useState("")

    const handleSubmit = (e)=>{
        e.preventDefault()
        if (text.trim().length > 0 && number.trim().length && email.trim().length) {
            alert([text, number, email])
        }
    }

    return(
        <div className="contacts">
            <h1>Contact Us</h1>
            <div className="contactBox">
                <div className="leftContact">
                    <form>
                        <div>
                        <h2>Looking For A</h2>
                        <h2>First-class Consultant</h2>
                        </div>
                        <p>Quis aliqua sunt nisi
                        consectetur anim ullamco
                        ea. Ut deserunt non voluptate 
                        nisiQuis aliqua sunt nisi</p>
                        <input type="text" placeholder="Name" className="input" value={text} onChange={(e)=>setText(e.target.value)} />
                        <input type="number" placeholder="Phone" className="input" value={number} onChange={(e)=>setNumber(e.target.value)} />
                        <input type="email" placeholder="E-mail" className="input" value={email} onChange={(e)=>setEmail(e.target.value)} />
                        <input type="submit" value="Submit" className="sub" onClick={handleSubmit} />
                    </form>
                </div>
                <div className="rightContact">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d48671.32198962374!2d44.48159345!3d40.321098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sam!4v1732955760661!5m2!1sru!2sam"></iframe>
                </div>
            </div>
        </div>
    )
}

export default Contacts