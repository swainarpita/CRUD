import style from "./home.module.css"
import {Link} from "react-router-dom"
const Homecrud = ()=>{

    return(
        <section  id={style.nav}>
            <ul>
                <li><Link to={"/createusers"}>Create Users</Link></li>
                <li><Link to={"/users"}>Users</Link></li>
            </ul>

        </section>
    )
}
export default Homecrud