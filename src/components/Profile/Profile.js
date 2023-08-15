import Header from "../Landing/Header/Header"
import { useContext, useEffect, useState } from "react"
import './Profile.css'
import { CurrentUserContext } from '../../context/CurrentUserContext'
import { useForm } from "react-hook-form";
import { REGEXP_EMAIL } from '../../utils/Constance'
import { REGEXP_NAME } from '../../utils/Constance'

const Profile = ({ signOut, onUpdateUser, setActive, loggedIn }) => {
    const currentUser = useContext(CurrentUserContext);
    const [isCurrentUserData, setIsCurrentUserData] = useState(true);
    const {
        register,
        formState: { errors, isValid },
        handleSubmit,
        setValue,
        watch,
    } = useForm({
        mode: "all",
    })

    useEffect(() => {
        const name = watch("name");
        const email = watch("email");
        if (currentUser.name !== name || currentUser.email !== email) {
            setIsCurrentUserData(false);
        } else {
            setIsCurrentUserData(true);
            console.log("Для сохранения необходимо изменить данные")
        }
    }, [currentUser, watch()]);


    useEffect(() => {
        setValue("name", currentUser.name);
        setValue("email", currentUser.email);
    }, [currentUser, setValue]);

    function editUser(data) {
        onUpdateUser(data)
    }

    return (
        <>
            <Header setActive={setActive} loggedIn={loggedIn} />
            <section className="profile">
                <h2 className="profile__title">{`Привет, ${currentUser.name}!`}</h2>
                <form className="profile__form" onSubmit={handleSubmit(editUser)}>
                    <label className="profile__field" htmlFor="name-input">
                        Имя
                        <input name="name"
                            className="profile__input"
                            id="name-input" type="name"
                            {...register("name", {
                                required: "Это поле обязазательно для заполнения",
                                minLength: {
                                    value: 2,
                                    message: "Имя должно быть не меньше двух букв",
                                },
                                maxLength: {
                                    value: 30,
                                    message: "Имя должно быть не более чем 30 букв",
                                },
                                pattern: {
                                    value: REGEXP_NAME,
                                    message: "Поле может содержать буквы, тире или пробелы",
                                },
                            }
                            )} />
                    </label>
                    <span className="profile__form-error">
                        {errors.name ? errors.name.message : ""}
                    </span>
                    <hr className="profile__line"></hr>
                    <label className="profile__field">
                        E-mail
                        <input name="email"
                            type="email"
                            className="profile__input"
                            id="email-input"
                            {...register("email", {
                                required: "Это поле обязазательно для заполнения",
                                pattern: {
                                    value: REGEXP_EMAIL,
                                    message: "Здесь должен быть корректный e-mail",
                                },
                            })} />
                    </label>
                    <span className="profile__form-error">
                        {errors.email ? errors.email.message : ""}
                    </span>
                    <button type="submit"
                        onClick={handleSubmit}
                        disabled={!isValid || isCurrentUserData}
                        className={`profile__button-save ${!isValid || isCurrentUserData ? "profile__button-save_disabled" : " "}`}>
                        Редактировать
                    </button>
                    <button onClick={signOut} className="profile__logout">Выйти из аккаунта</button>
                </form>
            </section>
        </>
    )
}
export default Profile;