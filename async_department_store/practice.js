$(document).ready(function () {

    //target where store items will display
    const outputEl = $("#store")
    const discountDisplay = $(".season")


    //request products database    
    $.ajax({
        "url": "products.json",
        "method": "GET"
    })
        //once we have received the products database, store in variable 'products'. 
        .then(productData => {
            const products = productData.products

            //request categories database
            $.ajax({
                "url": "categories.json",
                "method": "GET"
            })
                //once we have received the categories database, store in variable 'category'
                .then(categoryData => {
                    const category = categoryData.categories

                    //set availableProducts to empty string that will built up                    
                    let availableProducts = ""

                    //iterate over products to find match of product.category_id and category.id and store in variable 'productCategory'
                    products.forEach(product => {
                        const productCategory = category.find(c => c.id === product.category_id)

                        //Build string to be displayed
                        availableProducts += `
               <section>
                   <h1>${product.name}</h1>
                   <h3>Category: ${productCategory.name}</h3>
                   <h3>Price: ${product.price}</h3>
               </section>
               `
                    })
                    outputEl.html(availableProducts)
                    discountDisplay.html(discountOptions)
                })
        }
        )

})