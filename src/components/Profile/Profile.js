import Header2 from "../Movies/Header2/Header2";
import './Profile.css'

const Profile = ({signOut}) => {
    return (
<>
<Header2 />
 <section className="profile">
            
            <h2 className="profile__title">Привет, Анатолий!</h2>
            <form className="profile__form">
                <label className="profile__field" htmlFor="name-input">
                    Имя
                    <input name="name" className="profile__input" id="name-input" type="text" />
                </label>

                <hr className="profile__line"></hr>
                <label className="profile__field">
                    E-mail
                    <input name="email" className="profile__input" id="email-input" type="text" required />
                </label>
                <button type="submit" className="profile__button-save">
                    Редактировать
                </button>
                <button onClick={signOut} className="profile__logout">Выйти из аккаунта</button>
            </form>
        </section>


</>
   )    
}
export default Profile;