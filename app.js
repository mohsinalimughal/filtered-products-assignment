const storeProducts = [
    { id: 1, name: "Wireless Mouse", category: "Electronics", price: 25.99 },
    { id: 2, name: "Laptop", category: "Electronics", price: 899.99 },
    { id: 3, name: "Bluetooth Speaker", category: "Electronics", price: 49.99 },
    { id: 4, name: "Office Chair", category: "Furniture", price: 199.99 },
    { id: 5, name: "Standing Desk", category: "Furniture", price: 499.99 },
    { id: 6, name: "Gaming Keyboard", category: "Electronics", price: 89.99 },
    { id: 7, name: "4K Monitor", category: "Electronics", price: 299.99 },
    { id: 8, name: "Water Bottle", category: "Accessories", price: 15.99 },
    { id: 9, name: "Yoga Mat", category: "Fitness", price: 39.99 },
    { id: 10, name: "Dumbbell Set", category: "Fitness", price: 59.99 },
    { id: 11, name: "Running Shoes", category: "Footwear", price: 79.99 },
    { id: 12, name: "Smartphone", category: "Electronics", price: 699.99 },
    { id: 13, name: "Headphones", category: "Electronics", price: 149.99 },
    { id: 14, name: "Backpack", category: "Accessories", price: 49.99 },
    { id: 15, name: "Sunglasses", category: "Accessories", price: 19.99 },
    { id: 16, name: "Smartwatch", category: "Electronics", price: 249.99 },
    { id: 17, name: "Coffee Maker", category: "Home Appliances", price: 99.99 },
    { id: 18, name: "Blender", category: "Home Appliances", price: 59.99 },
    { id: 19, name: "Air Fryer", category: "Home Appliances", price: 129.99 },
    { id: 20, name: "Cookware Set", category: "Home & Kitchen", price: 89.99 },
    { id: 21, name: "Vacuum Cleaner", category: "Home Appliances", price: 199.99 },
    { id: 22, name: "Dishwasher", category: "Home Appliances", price: 499.99 },
    { id: 23, name: "T-shirt", category: "Clothing", price: 14.99 },
    { id: 24, name: "Jeans", category: "Clothing", price: 39.99 },
    { id: 25, name: "Jacket", category: "Clothing", price: 79.99 },
    { id: 26, name: "Sneakers", category: "Footwear", price: 59.99 },
    { id: 27, name: "Wristwatch", category: "Accessories", price: 129.99 },
    { id: 28, name: "Belt", category: "Accessories", price: 19.99 },
    { id: 29, name: "Wallet", category: "Accessories", price: 29.99 },
    { id: 30, name: "Sofa", category: "Furniture", price: 899.99 },
    { id: 31, name: "Dining Table", category: "Furniture", price: 599.99 },
    { id: 32, name: "Bookshelf", category: "Furniture", price: 149.99 },
    { id: 33, name: "Microwave", category: "Home Appliances", price: 79.99 },
    { id: 34, name: "Toaster", category: "Home Appliances", price: 29.99 },
    { id: 35, name: "Electric Kettle", category: "Home Appliances", price: 49.99 },
    { id: 36, name: "Hair Dryer", category: "Beauty", price: 39.99 },
    { id: 37, name: "Shampoo", category: "Beauty", price: 12.99 },
    { id: 38, name: "Conditioner", category: "Beauty", price: 14.99 },
    { id: 39, name: "Face Wash", category: "Beauty", price: 9.99 },
    { id: 40, name: "Perfume", category: "Beauty", price: 49.99 },
    { id: 41, name: "Lipstick", category: "Beauty", price: 19.99 },
    { id: 42, name: "Tablet", category: "Electronics", price: 329.99 },
    { id: 43, name: "Fitness Tracker", category: "Electronics", price: 99.99 },
    { id: 44, name: "Wireless Earbuds", category: "Electronics", price: 89.99 },
    { id: 45, name: "Action Camera", category: "Electronics", price: 249.99 },
    { id: 46, name: "Drone", category: "Electronics", price: 799.99 },
    { id: 47, name: "Tennis Racket", category: "Sports", price: 89.99 },
    { id: 48, name: "Football", category: "Sports", price: 29.99 },
    { id: 49, name: "Camping Tent", category: "Outdoor", price: 149.99 },
    { id: 50, name: "Sleeping Bag", category: "Outdoor", price: 69.99 }
  ];

const container = document.querySelector(".container")


const check = (btnname)=>{
    container.innerHTML = ``
    console.log(btnname.innerHTML)
    const filtered =    storeProducts.filter((item)=>{
                      
    
        return btnname.innerHTML === item.category
      })
    console.log(typeof(filtered))
    console.log(filtered)
      
      filtered.map((item)=>{
        container.innerHTML += `        <div class="card">
                <h2>Name :${item.name}</h2>
                <p>Catagoury : ${item.category}</p>
                <h2>Price : ${item.price}</h2>
            </div>`
      })
      
}




