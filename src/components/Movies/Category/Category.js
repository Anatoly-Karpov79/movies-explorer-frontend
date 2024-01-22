import React from "react";
import Header from "../../Landing/Header/Header";
import Footer from "../../Footer/Footer";
import SubCategoriesList from "../SubCategoriesList/SubCategoriesList";
import { useState, useEffect } from "react";
import { subCategoriesApi } from "../../../utils/SubCategoriesApi"
import { useForm } from "react-hook-form";


function Category({category, loggedIn, onCreateSubCategory, onSubCategoryClick}) {
    const [subCategories, setSubCategories] = useState([]);
    const queries = localStorage.getItem('subCategories');
    const [searchQuery, setSearchQuery] = useState([]);

    const {
        register,
        formState: { errors, isValid },
        handleSubmit,
        setValue,
        watch,
    } = useForm({
        mode: "all",
    });
    const form = document.getElementById('newCategory');

    // useEffect(() => {
    //     if (subCategories) {
    //         setSubCategories(JSON.parse(subCategories));
    //     }
    // }, [subCategories]);

    useEffect(() => {
        if (queries) {
            setSearchQuery(JSON.parse(queries));
        }
    }, [queries]);

    useEffect(() => {
        if (loggedIn) {
         subCategoriesApi
            .getSubCategories()
            .then((data) => {
              setSubCategories(data);
              localStorage.setItem('savedSubCategories', JSON.stringify(data));
            })
            .catch((error) => console.log(error));
        }
      }, [loggedIn]);

      function createSubCategory(data) {
        onCreateSubCategory(data);
        console.log("Дата из категорий", data)
        form.reset()
    }

       return (
        <div>
            <Header loggedIn={loggedIn}/>
            <main>
            <h1>Это category.js</h1>
                    <form id="newCategory" className="register__form" onSubmit={handleSubmit(createSubCategory)}>
                        <label className="register__label">Новая категория</label>
                        <input type="text"
                        id="register__form"
                            placeholder="Название новой подкатегории"
                            className="register__input"
                            {...register("name", {
                                required: "Это поле обязазательно для заполнения",
                                minLength: {
                                    value: 3,
                                    message: "Имя должно быть не меньше трех символов",
                                },
                            })}
                        />
                        <span className="login__form-error">
                            {errors.name ? errors.name.message : ""}
                        </span>
                        <button className="button" onClick={handleSubmit}>
                            Создать категорию
                        </button>
                    </form>

                     {/* <SubCategoriesList
                        subcategories={subCategories}
                       // onSubCategoryClick={onSubCategoryClick}
                    />  */}

                </main>
 <section className="category">
        <h1>{category.name}</h1>
        <h2>{category._id}</h2>
        </section>
        <Footer />
        </div>
        

       
    );
}

export default Category;