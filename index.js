// HINTS:

import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const url = "https://secrets-api.appbrewery.com/random"
app.use(express.static('public'));
app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
  });



app.get("/", async (req,res)=>{

    const response = await axios.get('https://secrets-api.appbrewery.com/random');
    console.log(response.data.secret);
    res.render("index.ejs",{
        secret:response.data.secret,
        user:response.data.username
    });



});

// 4. When the user goes to the home page it should render the index.ejs file.

// 5. Use axios to get a random secret and pass it to index.ejs to display the
// secret and the username of the secret.

// 6. Listen on your predefined port and start the server.
