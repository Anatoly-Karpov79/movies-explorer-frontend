import React from "react";


function Category({category}) {
   console.log(category)
    return (
        <section className="category">
        <h1>{category.name}</h1>
        </section>
    );
}

export default Category;