const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine","ejs");

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

//CONSTANTS
const homeStartingText = "Welcome to Curious Quill, a place where we explore the world with curiosity and creativity. Our mission is to spark inspiration, ignite curiosity, and foster a sense of wonder through the written word. Here, we believe that every story, every idea, and every perspective has the power to captivate and connect us. Whether you're a writer, a reader, or simply someone who loves to explore new ideas, we invite you to join us on this journey of discovery. So grab your quill, and let's set out to explore the mysteries and wonders of the world together!";
const aboutStartingContent = "Welcome to Curious Quill! My name is Jane, and I'm a freelance writer with a passion for exploring new ideas and sharing them with others. This blog is my platform for sharing my musings on a variety of topics, from current events to personal growth and everything in between. I've been writing for over a decade, and my work has been published in a variety of print and online publications. I'm also an avid reader and lifelong learner, and I'm constantly seeking out new information and perspectives to inform my writing. My mission with Curious Quill is to inspire curiosity and encourage readers to question their assumptions and explore new ideas. I believe that by sharing our experiences and learning from each other, we can all grow and evolve as individuals and as a society. Whether you're a fellow writer, a curious reader, or just someone looking for some food for thought, I hope you'll find something of value here at Curious Quill. Don't be shy - I love hearing from my readers, so please feel free to leave a comment or send me a message anytime. \n Thanks for stopping by, and happy reading!";
const contactInfo = "Thanks for taking the time to check out my blog! I'm always eager to hear from my readers and connect with others who share my interests. If you have any questions, comments, or feedback on my writing or the topics I cover, please don't hesitate to get in touch with me. You can reach me directly by sending an email to [insert email address here], or by filling out the contact form below. I'll do my best to get back to you as soon as I can. Thanks again for your support, and I look forward to hearing from you!";




app.get("/" , function(req,res){
    res.render("index" , {homeStartingText:homeStartingText});
})

app.get("/about" , function(req,res){
    console.log(aboutStartingContent);
    res.render("about" , {aboutStartingContent:aboutStartingContent});
})

app.get("/contact" , function(req,res){
    res.render("contact" , {contactInfo:contactInfo});
})



app.listen(3000 , function(){
    console.log("Server is running on port 3000")
});