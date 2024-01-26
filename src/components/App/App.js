import React, { useState, useEffect } from "react";
import './App.css';
import { Routes, Route, useNavigate, useLocation, Navigate } from 'react-router-dom';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Categories from "../Movies/Categories";
import Profile from '../Profile/Profile';
import Category from "../Movies/Category/Category";
import SubCategories from "../Movies/SubCategories/Subcategories";
import SavedMovies from '../SavedMovies/SavedMovies';
import NotFound from "../NotFound/NotFound";
import Landing from "../Landing/Landing";
import Menu from "../Main/Menu/Menu";
import { mainApi } from "../../utils/MainApi";
import { moviesApi } from '../../utils/MoviesApi';
import { categoriesApi } from "../../utils/CategoriesApi";
import { subCategoriesApi } from "../../utils/SubCategoriesApi";
import { CurrentUserContext } from '../../context/CurrentUserContext'
import ProtectedRoute from "../ProtectedRoute";
import * as auth from "../../utils/auth";
import Preloader from "../Preloader/Preloader";
import InfoTooltip from "../InfoTooltip/InfoTooltip";
import error from '../../images/error.svg';
import success from '../../images/success.svg';

function App() {

  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const navigate = useNavigate();
  const [checkToken, setCheckToken] = useState(false);
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [savedCategories, setSavedCategories] = useState([]);
  const [showTooltip, setShowTooltip] = useState(false);
  const [info, setInfo] = useState({ image: "", text: "" });
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [selectedCategoryName, setSelectedCategoryName] = useState([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState([]);


  function handleMenu() {
    setMenuIsOpen(true);
  }

  function handleClose() {
    setMenuIsOpen(false);
    setShowTooltip(false);
  }

  function handleCategoryClick(category) {
    setSelectedCategoryName(category);
    localStorage.setItem('selectedCategory', JSON.stringify(category));
    localStorage.setItem('selectedCategoryName', (JSON.parse(localStorage.getItem ('selectedCategory')).name));
    localStorage.setItem('selectedCategoryId', (JSON.parse(localStorage.getItem ('selectedCategory'))._id));
    navigate('/categories/'+ category._id)
  }

  useEffect(() => {
    if (loggedIn) {
      mainApi
        .getUserInfo()
        .then((res) => {
          setCurrentUser(res);
        })
        .catch((err) => {
          console.log(err);
        });
      categoriesApi
        .getCategories()
        .then((data) => {
          setCategories(data);
          localStorage.setItem('savedCategories', JSON.stringify(data));
        })
        .catch((error) => console.log(error));
    }
  }, [loggedIn]);

  useEffect(() => {
    const jwt = localStorage.getItem('userId');
    if (jwt) {
      setCheckToken(true);
      setLoggedIn(true);
      navigate(location.pathname);
      setIsLoading(false);
    } else {
      setIsLoading(false);
    }

  }, [location.pathname, navigate]);

  useEffect(() => {
    if (loggedIn) {
      if (localStorage.getItem('categories')) {
        setCategories(JSON.parse(localStorage.getItem('savedCategories')));
      } else {
        categoriesApi
          .getCategories()
          .then((categories) => {
            localStorage.setItem('savedCategories', JSON.stringify(categories));
            setCategories(categories);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    }
  }, [loggedIn]);

  useEffect(() => {
    loggedIn &&
      localStorage.setItem('savedCategories', JSON.stringify(savedCategories));
  }, [savedCategories, loggedIn]);

  
  function chooseInfoTooltip(info) {
    setInfo({ image: info.image, text: info.text });
  }

  function handleRegister(data) {
    const { name, email, password } = data;
    auth
      .register(name, email, password)

      .then(() => {
        setTimeout(setShowTooltip, 1000, true);
        chooseInfoTooltip({
          image: success,
          text: "Вы успешно зарегистрировались",
        });
        // 
        handleLogin(data)
      })
      .catch((err) => {
        setTimeout(setShowTooltip, 1000, true);
        console.log(err)
        chooseInfoTooltip({
          image: error,
          text: "Что-то пошло не так! Попробуйте еще раз!",
        });
        console.log(data)
      });
  }

  function onUpdateUser(data) {
    const { name, email } = data
    mainApi
      .changeProfile(name, email)
      .then(() => {
        setTimeout(setShowTooltip, 1000, true);
        chooseInfoTooltip({
          image: success,
          text: "Профиль успешно обновлен",
        });
        setCurrentUser({
          ...currentUser,
          name: name,
          email: email
        })
      })
      .catch((err) => {
        setTimeout(setShowTooltip, 1000, true);
        console.log(err)
        chooseInfoTooltip({
          image: error,
          text: "Что-то пошло не так! Попробуйте еще раз!",
        });
      });
  };


  function createNewCategory(data) {
    const { name } = data
    categoriesApi
      .createCategory(name)
      categoriesApi
          .getCategories()
          .then((categories) => {
            localStorage.setItem('savedCategories', JSON.stringify(categories));
            setCategories(categories);
            console.log(categories)
          })
      .then(() => {
        setTimeout(setShowTooltip, 1000, true);
        chooseInfoTooltip({
          image: success,
          text: "Категория успешно создана",
        });
      })
      .catch((err) => {

      });
  }

  function createNewSubCategory(data, categoryId) {
    // console.log("Нажали createNewSubCategory в App.js", categoryId, data)
     const { name } = data
      subCategoriesApi
      .createSubCategory(name, categoryId)
    subCategoriesApi
          .getSubCategories(categoryId)
          .then((subCategories) => {
            localStorage.setItem('savedSubCategories', JSON.stringify(subCategories));
            setSubCategories(subCategories);
          })
      .then(() => {
        setTimeout(setShowTooltip, 1000, true);
        chooseInfoTooltip({
          image: success,
          text: "ПодКатегория успешно создана",
        });
      })
      .catch((err) => {

      });
  }

  function handleLogin(data) {
    const { email, password } = data;
    auth
      .authorize(email, password)
      .then((res) => {
        setLoggedIn(true);
        setCurrentUser(res);
        localStorage.setItem('userId', res._id);
        // handleButtonClick
      })
      .catch((err) => {
        console.log(err)
        setShowTooltip(true);
        chooseInfoTooltip({
          image: error,
          text: "Что-то пошло не так! Попробуйте еще раз!",
        });
      });
  }

  function signOut() {
    localStorage.clear();
    navigate("/");
    setLoggedIn(false);
  }

  return (
    <div className="App">
      {isLoading ? (
        <Preloader />
      ) : (
        <CurrentUserContext.Provider value={currentUser}>
          <Routes>
            <Route exact path="/" element={<Landing
              setActive={handleMenu}
              loggedIn={loggedIn}
            />} />;

            <Route exact path="/categories"
              element={
                <ProtectedRoute loggedIn={loggedIn}
                  checkToken={checkToken}>
                  <Categories
                    setActive={handleMenu}
                    categories={categories}
                    onCreateCategory={createNewCategory}
                    loggedIn={loggedIn}
                    onCategoryClick={handleCategoryClick}
                  />
                </ProtectedRoute>}
            />

<Route exact path="/categories/:id"
              element={
                <ProtectedRoute loggedIn={loggedIn}
                  checkToken={checkToken}>
                  <SubCategories
                  loggedIn={loggedIn}
                    category={selectedCategory}
                    onCreateSubCategory={createNewSubCategory}
                  />
                </ProtectedRoute>}
            />


            <Route exact path="/profile"
              element={
                <ProtectedRoute loggedIn={loggedIn}
                  checkToken={checkToken}>
                  <Profile
                    loggedIn={loggedIn}
                    signOut={signOut}
                    onUpdateUser={onUpdateUser}
                    setActive={handleMenu} />
                </ProtectedRoute>}
            />


            <Route exact path="/profile" element={<Profile />} />;
            {
              !loggedIn ?
                <Route exact path="/signin"
                  element={<Login onLogin={handleLogin} />} />
                : <Route path="/signin" element={
                  <Navigate to="/" replace="true" />} />
            }
            {
              !loggedIn ?
                <Route exact path="/signup" element={
                  <Register onRegister={handleRegister} />} />
                : <Route path="/signup" element={
                  <Navigate to="/" replace="true" />} />
            }

            <Route path="*" element={<NotFound />} />
          </Routes>

          <Menu active={menuIsOpen}
            setActive={handleMenu}
            onClose={handleClose} />

          <InfoTooltip isOpen={showTooltip}
            onClose={handleClose}
            info={info} />
        </CurrentUserContext.Provider >
      )}
    </div>


  );
}

export default App;

{/* 
            <Route exact path="/savedmovies"
              element={
                <ProtectedRoute loggedIn={loggedIn}
                  checkToken={checkToken}>
                  <SavedMovies
                    setActive={handleMenu}
                    savedMovies={savedMovies}
                    onDeleteMovie={handleDeleteMovie}
                    loggedIn={loggedIn}
                  />
                </ProtectedRoute>}
             /> */}


 // const handleLikeMovie = (movie, isLiked, id) => {
  //   if (isLiked) {
  //     handleDeleteMovie(id);

  //   } else {
  //     mainApi
  //       .saveMovie(movie)
  //       .then((res) => {
  //         setSavedMovies([...savedMovies, res]);
  //       })
  //       .catch((error) => console.log(error));
  //   }
  // }

  // const handleDeleteMovie = (id) => {
  //   const searchedSavedMovies = JSON.parse(
  //     localStorage.getItem('searchedSavedMovies'));
  //   mainApi
  //     .deleteMovie(id)
  //     .then((res) => {
  //       const updatedSavedMovies = savedMovies.filter(
  //         (movie) => movie._id !== id);
  //       setSavedMovies(updatedSavedMovies);
  //       if (searchedSavedMovies) {
  //         const updatedSearchedSavedMovies = searchedSavedMovies.filter(
  //           (movie) => movie._id !== id
  //         );
  //         localStorage.setItem('searchedSavedMovies',
  //           JSON.stringify(updatedSearchedSavedMovies)

  //         ); console.log(searchedSavedMovies)
  //       }
  //     })
  //     .catch((error) => console.log(error));
  // };
