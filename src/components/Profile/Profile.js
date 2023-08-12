import Header from "../Landing/Header/Header"
import { useContext, useEffect, useState } from "react"
import './Profile.css'
import { CurrentUserContext } from '../../context/CurrentUserContext'

const Profile = ({signOut, onUpdateUser, setActive, loggedIn}) => {
    const currentUser = useContext(CurrentUserContext);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [isValid, setIsValid] = useState(false);

    useEffect(()=>{
        setName(currentUser.name);
        setEmail(currentUser.email);
       }, [currentUser]);

       function handleNameInput(e) {
        setName(e.target.value);
        setIsValid(e.target.closest('form').checkValidity());
      };

      function handleEmailInput(e) {
        setEmail(e.target.value);
        setIsValid(e.target.closest('form').checkValidity());
    };

    function editUser(e) {
        e.preventDefault();
        onUpdateUser(name, email);
      };

    return (


<>
<Header setActive={setActive} loggedIn={loggedIn} />
 <section className="profile">
            
            <h2 className="profile__title">{`Привет, ${currentUser.name}!`}</h2>
            <form className="profile__form" onSubmit={editUser}>
                <label className="profile__field" htmlFor="name-input">
                    Имя
                    <input name="name" 
                    className="profile__input" 
                    id="name-input" type="name" 
                    onChange={handleNameInput}  
                    minLength='2' maxLength='40' 
                    required />
                </label>

                <hr className="profile__line"></hr>
                <label className="profile__field">
                    E-mail
                    <input name="email" 
                    type="email"
                    className="profile__input" 
                    id="email-input" 
                    onChange={handleEmailInput} 
                     minLength='2' 
                     maxLength='40' 
                     required />
                </label>
                <button type="submit" 
                onClick={editUser} 
                disabled={!isValid}
                className={`profile__button-save ${
         !isValid ? "profile__button-save_disabled" : " "}`}>
                    Редактировать
                </button>
                <button onClick={signOut} className="profile__logout">Выйти из аккаунта</button>
            </form>
        </section>


</>
   )    
}
export default Profile;