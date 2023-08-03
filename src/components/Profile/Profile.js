import Header2 from "../Movies/Header2/Header2";
import { useContext, useEffect, useState } from "react"
import './Profile.css'
import { CurrentUserContext } from '../../context/CurrentUserContext'

const Profile = ({signOut, onUpdateUser}) => {
    const currentUser = useContext(CurrentUserContext);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    useEffect(()=>{
        setName(currentUser.name);
        setEmail(currentUser.email);
       }, [currentUser]);

       function handleNameInput(e) {
        setName(e.target.value);
        
      };

      function handleEmailInput(e) {
        setEmail(e.target.value);
        
    };

    function editUser(e) {
        e.preventDefault();
        onUpdateUser({name, email});
        
      };

    return (


<>
<Header2 />
 <section className="profile">
            
            <h2 className="profile__title">Привет, {currentUser.name}!</h2>
            <form className="profile__form" onSubmit={editUser}>
                <label className="profile__field" htmlFor="name-input">
                    Имя
                    <input name="name" className="profile__input" id="name-input" type="text" onChange={handleNameInput}  minLength='2' maxLength='40' required />
                </label>

                <hr className="profile__line"></hr>
                <label className="profile__field">
                    E-mail
                    <input name="email" className="profile__input" id="email-input" type="text" onChange={handleEmailInput}  minLength='2' maxLength='40' required />
                </label>
                <button type="submit" onClick={editUser} className="profile__button-save">
                    Редактировать
                </button>
                <button onClick={signOut} className="profile__logout">Выйти из аккаунта</button>
            </form>
        </section>


</>
   )    
}
export default Profile;