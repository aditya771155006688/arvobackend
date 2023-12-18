const UserProduct = require("../models/productModel"); // Assuming the model is in a separate file
const asyncHandler = require("express-async-handler");
const Brand = require("../models/brandModels");
const Products = require("../models/products")
// Define a route for inserting a product
exports.addProduct = asyncHandler(async (req, res) => {
  try {
    // Get data from the request body
    const { user, productName, description, price } = req.body;

    // Create a new user product document
    const newUserProduct = new UserProduct({
      user,
      productName,
      description,
      price,
    });

    // Save the user product to the database
    const savedProduct = await newUserProduct.save();

    res.status(201).json(savedProduct); // Return the saved product as a JSON response
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Unable to create the product" });
  }
});

exports.allproduct= asyncHandler(async(req,res)=>{
    try {
        // Retrieve all products from the Product model
        const products = await UserProduct.find();
    
        res.status(200).json(products);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Unable to retrieve products" });
      }
})


exports.allbrands = asyncHandler( async(req,res)=>{
    try {
        // Retrieve all products from the Product model
        const products = await Brand.find();
    
        res.status(200).json(products);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Unable to retrieve products" });
      }
})


exports.brand= asyncHandler(async (req, res) => {
    try {
        const brandData = req.body;
    
        // Create a new brand using the Brand model
        const newBrand = new Brand(brandData);
    
        // Save the brand to the database using async/await
        const savedBrand = await newBrand.save();
    
        res.status(201).json(savedBrand);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Unable to create the brand" });
      }
});

exports.addBrnadProduct= asyncHandler( async(req,res)=>{
    try {
        const brandId = req.body.brandId;
        const productData = req.body;
    
        // Find the brand by its ID
        const brand = await Brand.findById(brandId);
    
        if (!brand) {
          return res.status(404).json({ error: "Brand not found" });
        }
    
        // Create a new product
        const newProduct = {
          productId: "uniqueProductId2", // Replace with a unique product ID
        //   productName: productData.productName,
        //   productImage: productData.productImage,
        //   productDescription: productData.productDescription,
        //   productCost: productData.productCost,
          productName: "Product Name",
          productImage: "product-image.jpg",
          productDescription: "Product description",
          productCost: 19.99,
        };
    
        // Add the product to the brand's products array
        brand.products.push(newProduct);
    
        // Save the brand with the new product
        const savedBrand = await brand.save();
    
        res.status(201).json(savedBrand);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Unable to add the product to the brand" });
      }
});


exports.auth= asyncHandler( async(req,res)=>{
 try {
    const { tag } = req.params;
    const uid = req.query.uid;
    console.log(tag ,uid);
    //const inputString = "043FB29A335780x00006AxFFFFFFFF00x00000000";
  
  // Define a regular expression pattern to match the desired substrings
  const pattern = /([A-F0-9]+)x([A-F0-9]+)x([A-F0-9]+)/i;
  
  // Use the regular expression to extract substrings
  const matches = uid.match(pattern);
  
    // Extracted values are in matches array
    const Tagid = matches[1];
    const counter = matches[2];
    const openclose = matches[3]!="00000000"?"Used":"Unused";
   // const randomval = matches[4];
    const decimalValue = parseInt(counter, 16);
  

    console.log(Tagid, counter, openclose, decimalValue);
  
     if(tag==213){

      const result = await Products.findOneAndUpdate({ "nfcTagId": Tagid },
        { $inc: { counter: 1 } },
        { new: true } , // Increment the 'counter' field by 1 // Increment the 'counter' field by 1
        );
      console.log(decimalValue, result.counter);
      //const documents = await result.toArray();;
   //   if (decimalValue === result.counter - 20 || decimalValue === result.counter + 50){
        res.status(201).json({
          auth:true,
          condition:openclose,
          data:result
        })

      // }
      // else{
      //   res.status(201).json({
      //     auth:false,
      //     data: "unauthorized accessing"
      //   })

      // }

    //  console.log(result.counter)
     }

    
  
      // Add the product to the brand's products array
  
      // Save the brand with the new product
     // const savedBrand = await brand.save();
  
      // res.status(201).json(savedBrand);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Unable to extract" });
    }
});
