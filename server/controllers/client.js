import Product from "../models/Product.js";
import ProductStat from "../models/ProductStat.js";

export const getProducts = async (req, res) => {
  try {
    console.log(" start fetching")
    const products = await Product.find();

    const productsWithStats = await Promise.all(
      products.map(async (product) => {
        const stat = await ProductStat.find({
          productId: product._id,
        });
        return {
          ...product._doc,
          stat,
        };
      })
    );
      console.log("fetched")
    res.status(200).json(productsWithStats);
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: "Failed to fetch products", error: error.message });
  }
};
