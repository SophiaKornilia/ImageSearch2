const express = require("express");
const fs = require("fs").promises
const cors = require("cors");
const { registerSchema } = require("./schemas/user.schema");

const app = express()

    
    app.use(cors())
    app.use(express.json()) 
    
    const readFavorite = async () => {
        const data = await fs.readFile("./favouriteImages.json");
        console.log(JSON.parse(data))
        return JSON.parse(data);
    }
    
    const saveImage = async (userEmail,link) => {
    try {
        const existingData = await readFavorite();
            const userExists = existingData.find(item => item.userEmail === userEmail); //userExist blir resultatet av om emailen matchar eller inte. 
           
            if (userExists) {
              userExists.myFavImages.push({ imageLink: link });
          

            } else {
              existingData.push({
                userEmail: userEmail,
                myFavImages: [{ imageLink: link }]
              });
      
            } 
              
              await fs.writeFile("./favouriteImages.json", JSON.stringify(existingData, null, 2));
            } catch (error) {
              console.error(error)
            }
    }

    

    app.post("/api/favouriteImages", async (req, res) => {
        try { 
          const {userEmail, link} = req.body;
          const {error} = registerSchema.validate({userEmail, link}, {abortEarly: false})
          if (error) {
            return res.status(400).json(error)
          }
          await saveImage(userEmail, link);
          res.status(201).json({userEmail,link});
        } catch (error) {
          res.status(500).json({ message: "Internal server error" });
        } 
      });

      app.get("/api/favouriteImages/:userEmail", async (req, res) => {
        try{
            const favouriteImages = await readFavorite();
            const favouriteImage = favouriteImages.filter(i => i.userEmail == req.params.userEmail)
            res.status(200).json(favouriteImage)
        } catch(error) {
            res.status(500).json("error")
        }
      })

 
app.listen(3000, () => console.log("Server is up and running!"))
