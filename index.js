const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config({ path: ".env" });
const userRouter = require("./routes/userRoutes");
const AppError = require("./utils/error");
const errorHandler = require("./middleware/errorHandler");
const cors = require("cors");

const app = express();

app.set("view engine", "ejs");

app.set("views", "./views");

mongoose
  .connect(
    "mongodb://ashish:ashish123@ac-8nehjed-shard-00-00.xtpbobv.mongodb.net:27017,ac-8nehjed-shard-00-01.xtpbobv.mongodb.net:27017,ac-8nehjed-shard-00-02.xtpbobv.mongodb.net:27017/?ssl=true&replicaSet=atlas-o4urtj-shard-0&authSource=admin&retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("> DB connection successful ... ");
  });

app.use(cors());
app.use(express.json());
app.use(express.static("public"));
app.use("/api/users", userRouter);

app.get("/", (req, res) => {
  res.render("index");
});

// app.all("*", (req, res, next) => {
//   next(new AppError(`can't find ${req.originalUrl} on this server`, 404));
// });

app.get("/art/AA00001", (req, res) => {
  res.json({
    Image: "https://mediacloud.saffronart.com/sourcingcen/prod/productimages/20231124/a431bcb4-9d9f-4f1d-8952-22c76a665c7e_2_large.jpg",
    Title : "Drummers",
    Category: "Art" ,
    subCategory:"Painting",
    isNFTEligible: 'TRUE',
    Brand :"A A ALMELKAR",
    productDetails :"Abdul Rahim Almelkar believed that he must have learnt painting when he was still in his mother`s womb, much like Arjuna`s son Abhimanyu in the Mahabharat. My mother was busy embroidering all through her pregnancy and I probably inherited art from her at that stage, he says. Born in Solapur, (in Maharashtra) he began painting at the young age of seven. After a conventional education in a local school, he joined the Sir J. J. School of Arts in Mumbai. During his student years, he won several awards at shows organized by the Art Society of India and the Bombay Art Society. Almelkar considered Khatri, a folk painter from Gujarat, as his true teacher. Khatri instilled into the young aspirant a pursuit for perfect draftsmanship. In those days, there was `no inner eye and outer eye`. A single vision informed the work of most artists,says Almelkar. He belonged to a tradition of stylized Indian paintings; with a lot of detailing and elements from miniature art tradition that were at its peak when he was still studying at the art college. Like all erstwhile artists, he branched out early in his career and evolved his own style. Ordinary folk, fishermen and tribal people were central to most of his works. He presented the tribal people against the background of simple decorative motifs that they used to beautify their homes with and which also had religious meanings. Almelkar often traveled in the jungles of Vidharbha, (in Maharashtra) sketching birds and trees in sanctuaries and the colorful tribal people inhabiting those localities. Keeping in mind the fundamentals of drawing, he did both naturalistic as well as figurative studies, with just a touch of stylization to accommodate a folk style. It recalls to the mind traditional Javanese Art, which in turn has been influenced by the art of greater India. Applying colors with his fingers and finishing the work with a clear outline in waterproof ink, he retained a sense of lndianess in his depictions, which in almost all cases were simple portrayals of people. He also experimented with cardboard as the base of his works. Almelkar often used the paste of cowries to import a shine to the surface of his paintings. Almelkar was the Principal of a private art institute called `Nutan Kala Mandir` in Bangalore. He later joined as a lecturer at the Sir J.J School of Arts in 1968. His shows won acclaim in Malaysia and in other Asian capitals too. Almelkar passed away on December 1982 at the age of 62.",
    highlights: "Signed and dated 'A A ALMELKAR 60' (lower right) 1960 Gouache on card pasted on mount board 16 x 15.25 in (40.5 x 39 cm)",
    JourneyID:"AA00001"

  
  });
});

app.get("/art/AA00002", (req, res) => {
  res.json({
    Image: "https://mediacloud.saffronart.com/sourcingcen/prod/productimages/20231124/ff13a983-0993-422a-9b97-4c6391c0e293_2_large.jpg",
    Title : "Sanvri",
    Category: "Art" ,
    subCategory:"Painting",
    isNFTEligible: 'TRUE',
    Brand :"BADRINATH ARYA",
    productDetails :"Jane and Kito de Boer’s collection is a rare survey of Indian painting from the late 19th century to the present day, covering major movements including photography, the Bengal School, the Progressive Artists from Bombay, and many different developments in Delhi and its environs since Independence. This collection, one of the largest in private hands, is remarkable for its broad historical scope and represents critical periods in Indian art history. Besides notable names including F N Souza, M F Husain, and Somnath Hore, the collection also highlights the best works of lesser-known artists such as Prakash Karmakar, Nikhil Biswas, and J Sultan Ali who played a significant role in the development of Indian art. Alongside their strong aesthetics, the significance of many of the works in the collection is deepened by the de Boers’ personal association or encounters with several of the artists like Rameshwar Broota and Laxma Goud.In their words, One of the most important aspects of the collection is that it is a personal journey: it is our journey.... We are individuals following our passion and our collection is the sum of what we see and whom we meet. We have the art collection we have, with all its twists and turns.",
    highlights: "Signed 'BADRI' and dated indistinctly (lower left) Circa 1960s  Watercolour and wash on paper 51.75 x 29.5 in (131.5 x 75 cm)",
    JourneyID:"AA00002"

  
  });
});

app.get("/Apparel/AA00003", (req, res) => {
  res.json({
    Image: "https://www.dior.com/en_int/fashion/products/113J698A0531_C989-cd-icon-hooded-sweatshirt-black-cotton-fleece",
    Title : "CD ICON HOODED SWEATSHIRT",
    Category: "Apparel" ,
    subCategory:"Casual Wear",
    isNFTEligible: 'TRUE',
    Brand :"DIOR",
    productDetails :"The hooded sweatshirt is crafted in black cotton fleece. Soft and comfortable, it is enhanced by a tonal CD Icon embroidery on the chest. Its regular fit, completed with ribbed cuffs and hem, will pair with any casual attire.",
    highlights: "Tonal CD Icon embroidery on the chest Drawstring hood with metal tips featuring an engraved Dior signature Ribbed cuffs and hem Front kangaroo pocket 100% cotton Made in Italy",
    JourneyID:"AA00003"

  
  });
});
app.get("/Liqour/AA00004", (req, res) => {
  res.json({
    Image: "https://img.thewhiskyexchange.com/540/india_ram4.jpg",
    Title : "Rampur Double Cask Single Malt Whisky",
    Category: "Liqour" ,
    subCategory:"Whiskey",
    isNFTEligible: 'FALSE',
    Brand :"RAMPUR DISTILLERY",
    productDetails :"Matured in a combination of ex-bourbon barrels and European oak sherry casks, this Indian single malt from Rampur has a rich, complex character. Aromas of tropical fruits mingle with sweet malt, oak, honey and dried fruits on the nose, and the palate offers notes of dark berries, dried fruits, cinnamon, nutmeg and salted caramel.",
    highlights: " India Single Malt Whisky 70cl / 45%",
    JourneyID:"AA00004"

  
  });
});
app.get("/Liqour/AA00005", (req, res) => {
  res.json({
    Image: "https://m.media-amazon.com/images/I/710ZUr0FjeL.jpg",
    Title : "MuscleTech Nitro-Tech Whey Protein",
    Category: "Health Supplement" ,
    subCategory:"Whey Protein",
    isNFTEligible: 'FALSE',
    Brand :"MuscleTech",
    productDetails :"WHEY PROTEIN POWDER – MuscleTech Nitro-Tech is the most powerful protein formula ever developed. It is a scientifically engineered whey plus isolate lean muscle builder formula designed for more muscle, more strength and better performance",
    highlights: "Protein Blend (86%) (Whey, Protein Concentrate, Whey Protein Isolate, Whey Peptides), Creatine Monohydrate, Cocoa (Processed with Alkali), Natural and Artificial Flavours (Chocolate, Vanilla), Soy and Sunflower Lecithin (Emulsifier), Gum Blend (Cellulose Gum [Stabilizer]. Xanthan Gum [Emulsifier], Carrageenan [Emulsifier]), Sweetener (Sucralose, Acesulfame-Potassium), Salt (Flavour Enhancer).",
    JourneyID:"AA00005"

  
  });
});



app.get("/BAG/AA00006", (req, res) => {
  res.json({
    Image: "https://www.farfetch.com/in/shopping/women/gucci-ophidia-gg-mini-bag-item-19212121.aspx?storeid=13537",
    Title : "Gucci Ophidia GG mini bag",
    Category: "Bag" ,
    subCategory:"Handbag",
    isNFTEligible: 'TRUE',
    Brand :"Gucci",
    productDetails :"Ophidia GG mini bag from Gucci featuring brown, beige, canvas, calf leather, classic GG canvas, stripe detailing, foldover top, internal card slots and main compartment.",
    highlights: "Outer: Canvas 100% Trims: Leather 100%",
    JourneyID:"AA00006"

  
  });
});


app.get("/xys", (req, res) => {
  res.json({
    hi: "hello",
  });
});

app.use(errorHandler);

const PORT = 8080;

app.listen(PORT, () => {
  console.log(`> App running on port ${PORT} ...`);
});
