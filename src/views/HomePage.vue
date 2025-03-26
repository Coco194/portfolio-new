<template>
    <div class="mobile-navigation">
        <nav>
            <ul class="mobile-navigation-menu">
                <li><a href="#">Home</a></li>
                <li><a href="#aboutsection">About</a></li>
                <li><a href="#projectsection">Projects</a></li>
                <li><a href="#contactsection">Contact</a></li>
                <li><a href="#">Resume</a></li>
            </ul>
        </nav>
    </div>

    
        <section>
            <div class="parentflex">
                <div class="flexleft">
                    <h1>Hey there I'm Shaffaq</h1>
                    <h2>I am a front end developer with a passion for building beautiful user interfaces on the web</h2>
                    <p>I'm a front-end developer a software engineering student studying at the Open University Of Sri Lanka. And I love building clean and engaging websites.</p>
                    <div class="sociallink">
                        <a href="https://github.com/Coco194" target="_blank"> 
                            <img src="Images/github.png" alt="Github icon" width="30px">
                        </a>
                        <a href="https://www.linkedin.com/in/mohamed-shaffaq-905a8b253/" target="_blank">
                            <img src="Images/linkedin.png" alt="Linkedin icon" width="30px">
                        </a>
                    </div>
                </div>
                <div class="flexright">
                    <img src="Images/computer memoji.jpeg" alt="Man using a computer memoji" class="memoji1">
                </div>
            </div>
        </section>
    
        <section id="aboutsection">
            <div class="aboutparentflex">
                <div class="aboutflexleft">
                    <img src="Images/smile memoji.jpeg" alt="waving memoji" class="memoji2">
                </div>
    
                <div class="aboutflexright">
                    <h1>About me</h1>
                    <p>Hello! my name is Shaffaq and I'm from Sri Lanka. I can build really cool websites and I can design and create visually stunning and clean websites. Currently I'm building websites and improving my code as well as design skills. Besides web development, I love playing with my cat and fishing. <a href="#">Learn more</a></p>
                </div>
            </div>
        </section>
    
        

        <section id="projectsection">
            <div class="projectparent">
                <div class="projectparenttopic">
                    <h1>Projects</h1>
                    <h2>View all</h2>                    
                </div>
                <p>Some of the side projects which I'm currently working on:</p>
                <div class="projectchild">

                    <div class="projectinnerchild">
                        <img src="Project images/Journalize.png" alt="" class="projectimg">
                        <h1>Journalize</h1>
                        <p>A landing page for the digital journal app Journalize. The website lets you use the browser based app to create, edit, and delete journals.</p>
                        <a href="">View project</a>
                    </div>
                    <div class="projectinnerchild">
                        <img src="Project images/Sushi Place.png" alt="" class="projectimg">
                        <h1>Sushi place</h1>
                        <p>A landing page for a Japanese Restaurant named "Sushi Place". This website shows the menu and allows you to check the menu and place orders.</p>
                        <a href="">View project</a>
                    </div>  
                    <div class="projectinnerchild">
                        <img src="Project images/Formify.png" alt="" class="projectimg">
                        <h1>Formify</h1>
                        <p>A website which let's you create html forms effortlessly. The website let's you edit a pre-defined form fields and inputs and export the html code.</p>
                        <a href="">View project</a>
                    </div>                                      
                    <div class="projectinnerchild">
                        <img src="Project images/Design Palette.png" alt="" class="projectimg">
                        <h1>Design Palette</h1>
                        <p>A website which let's web designers emulate colors and fonts from google font's and make decisions regarding the font and color choice easily.</p>
                        <a href="">View project</a>
                    </div>
                </div>
            </div>
        </section>
    
        <section>
            <div class="blogparent">
                <h1>Blog</h1>
                <p>My thoughts on what I'm learning and building:</p>
                <div class="blogchild">

                    <div class="bloginnerchild">
                        <h1>Exploring the potential of ChatGPT and other large language models</h1>
                        <p>A landing page for the digital journal app Journalize. The website lets you use the browser based app to create, edit, and delete journals.</p>
                        
                    </div>
                    <div class="bloginnerchild">
                        <h1>Science fiction vs reality: How technology from fiction are becoming real</h1>
                        <p>A landing page for the digital journal app Journalize. The website lets you use the browser based app to create, edit, and delete journals.</p>
                        
                    </div>  
                    <div class="bloginnerchild">
                        <h1>Tech interviews and spotlights: Featuring fascinating personalities in the industry</h1>
                        <p>A landing page for the digital journal app Journalize. The website lets you use the browser based app to create, edit, and delete journals.</p>
                        
                    </div>                                      
                    <div class="bloginnerchild">
                        <h1>The evolution of the internet: From dial-up to fiber optic and beyond.</h1>
                        <p>A landing page for the digital journal app Journalize. The website lets you use the browser based app to create, edit, and delete journals.</p>
                        
                    </div>
                </div>
            </div>
        </section>

        <section>
            <div class="quoteparent">
                <p>"I had the pleasure of working alongside Shaffaq. As a core developer on the team, Shaffaq played a crucial role in developing the front page. He was a very dependable person, fixing bugs and defects, good communication skills and making the whole team feel great around him. I have no doubt Shaffaq will be a valuable asset to any web development team looking for a skilled and dedicated front-end developer."</p>
                <h1>-Patrick Bateman, CEO Amogus</h1>
            </div>
        </section>

        <section id="contactsection">
            <div class="contactparent">
                <h1>Get in touch</h1>
                <p>Do you have a project idea you'd like to discuss with me? Feel free to reach me out at <a href="#">mohamedshaffaq@gmail.com</a>. You can also find me on <a href="#">Github</a>, <a href="#">Twitter</a> and <a href="#">Linkedin</a>.</p>                
            </div>
        </section>
  </template>

<style scoped>
html{
    scroll-behavior: smooth;
}

body{
    font-family: 'Inter', sans-serif;
    padding-top: 5rem;
    margin: 0;
}

/*Header start*/
header{
    display: flex;
    background-color: hsl(0, 0%, 100%, 0.98);
    justify-content: center;
    align-items: center;
    height: 5rem;
    gap: 16rem;
    box-shadow: 0px 0px 4px rgb(146, 146, 146);
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    right: 0;
}

.navigation{
    display: flex; 
    flex-direction: row;
    gap: 2rem;
    list-style: none;
    padding:0rem; 
}

.navigation li{
    width: 4rem;
    text-align: center;
    padding:0rem;  
    cursor: pointer;
}

.navigation li:hover{
    transition: color 0.2s ease-out;
    color: #557aff;
}

a {
    text-decoration: none;
    color: #0a0a0a;
}

#logo{
    font-weight: 500;
    letter-spacing: -0.25px;
    min-width: 6rem;
    /*color: #e69bae;*/
    color: #597CFB;
}

#contactbtn{
    min-width: 6rem;
}



.hamburgericon{
    display: none;
}

.mobile-navigation{
    display: none;
}
/*Header end*/




/*Hero section start*/
.parentflex{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    min-width: 0px;  
}

.flexleft, .flexright{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 26rem;
    width: 32rem;
    min-width: 460px;
    margin: 0;
    padding: 12rem 0rem 2rem 0rem;
}

.sociallink{
    display: flex;
    align-items: center;
    margin-right: auto;
    gap: 1rem;
}

.memoji1{
    width: 400px; 
    margin-left: auto;
}

.memoji2{
    width: 400px; 
    margin-right: auto;
}
/*Font sizes, color etc*/
#texthighlight2{
    color: #e69bae;
    font-weight: 500;
}

.flexleft h1{
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 0px;
    line-height: 1; /*1.25 x Font size*/
    color: #0a0a0a;
    margin: 0 auto 0 0;
    padding: 0;
}

.flexleft h2{
    font-size: 32px;
    font-weight: 600;
    letter-spacing: -0.5px;
    line-height: 1.25; /*1.25 x Font size*/
    color: #0a0a0a;
    margin: 0.5rem auto 0 0;
    padding: 0;
}

.flexleft p{
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 0;
    line-height: 1.75; /*1.5 x Font size*/
    color: #4a4a4a;
    margin: 1rem auto 2rem 0;
}
/*Hero section end*/




/*About section start*/
.aboutparentflex{
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5rem 0;
}

.aboutflexleft, .aboutflexright{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: fit-content;
    width: 32rem;
    min-width: 460px;
    margin: 0;
    padding: 0;
}

/*Font sizes, color etc*/
.aboutflexright h1{
    font-size: 24px;
    font-weight: 600;
    letter-spacing: -0.75px;
    line-height: 1; /*1.25 x Font size*/
    color: #0a0a0a;
    margin: 0 auto 0 0;
    padding: 0;
}

.aboutflexright p{
    font-size: 16px;
    font-weight: 400;
    color: #4a4a4a;
    line-height: 1.75; /*1.5 x Font size*/
    margin: 0.5rem 0 0 0;    
}

.aboutflexright a{
    font-size: 16px;
    font-weight: 500;
    text-decoration: underline;
    text-underline-offset: 2px;
    color: #0a0a0a;
    line-height: 1.75; /*1.5 x Font size*/
    margin: 0; 
}
/*About section end*/




/*Project section start*/
.projectparent{
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 64rem;
    gap: 0;
    margin: 0 auto;
    padding: 5rem 0;
}

.projectparenttopic{
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.projectchild{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 2.5rem;
    padding: 2rem 0 0 0;
}

.projectinnerchild{
    display: flex;
    flex-direction: column;
    width: 48%;
    padding-bottom: 2.5rem;
    border-bottom: 1px solid #e3e3e3;
}

.projectimg{
    height: 17rem;
    width: 100%;
    border-radius: 4px;
    box-shadow: 0px 0px 2px #c4c4c4;
}

/*Font sizes*/
.projectparenttopic h1{
    font-size: 24px;
    font-weight: 600;
    letter-spacing: -0.5px;
    color: #0a0a0a;
    line-height: 1;
    margin: 0;
}

.projectparenttopic h2{
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 0px;
    color: #4a4a4a;
    line-height: 1;
    margin: 0;
}

.projectparent p{
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 0px;
    color: #4a4a4a;
    line-height: 1.75;
    margin: 0.5rem 0 0 0;
}

.projectinnerchild h1{
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 0px;
    color: #000000;
    line-height: 1;
    margin: 1.5rem 0 0 0;
}

.projectinnerchild p{
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 0px;
    color: #6a6a6a;
    line-height: 1.5;
    margin: 0.5rem 0 1rem 0;
}

.projectinnerchild a{
    font-size: 16px;
    font-weight: 500;
    letter-spacing: 0px;
    text-decoration: underline;
    text-underline-offset: 2px;
    color: #000000;
    line-height: 1;
    margin: 0
}
/*Project section end*/




/*Blog section start*/
.blogparent{
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 64rem;
    gap: 0;
    margin: 0 auto;
    padding: 5rem 0;
}

.blogchild{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 0;
    padding: 0 0 0 0;
    border-top: 1px solid #e3e3e3;
}

.bloginnerchild{
    display: flex;
    flex-direction: column;
    width: 48%;
    padding-bottom: 0;
    border-bottom: 1px solid #e3e3e3;
}

.blogimg{
    height: 17rem;
    width: 100%;
    border-radius: 4px;
    box-shadow: 0px 0px 2px #c4c4c4;
}

/*Font sizes*/
.blogparent h1{
    font-size: 24px;
    font-weight: 600;
    letter-spacing: -0.5px;
    color: #0a0a0a;
    margin: 0;
}

.blogparent p{
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 0px;
    color: #4a4a4a;
    line-height: 1.75;
    margin: 0.5rem 0 2rem 0;
}

.bloginnerchild h1{
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 0px;
    color: #000000;
    line-height: 1.25;
    margin: 2rem 0 0 0;
}

.bloginnerchild p{
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 0px;
    color: #6a6a6a;
    line-height: 1.5;
    margin: 0.5rem 0 2rem 0;
}
/*Blog section end*/




/*Quote section start*/
.quoteparent{
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 64rem;
    gap: 0;
    margin: 0 auto;
    padding: 5rem 0;   
}

/*Font sizes*/
.quoteparent h1{
    font-size: 17px;
    font-weight: 500;
    letter-spacing: 0px;
    color: #000000;
    line-height: 1;
    margin: 1rem 0 0 0;   
}

.quoteparent p{
    font-size: 16px;
    font-style: italic;
    font-weight: 400;
    letter-spacing: 0px;
    color: #8a8a8a;
    line-height: 1.75;
    margin: 0;
    padding: 0 0 0 1rem;
    border-left: 4px solid #e3e3e3;
}
/*Quote section end*/




/*Contact section start*/
.contactparent{
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 64rem;
    gap: 0;
    margin: 0 auto;
    padding: 5rem 0;  
}

.contactchild{
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 1rem; 
    height: fit-content;
    width: fit-content;
    min-width: 900px;
    border-radius: 20px;
}

/*font sizes*/
.contactparent h1{
    font-size: 24px;
    font-weight: 600;
    letter-spacing: -0.5px;
    color: #0a0a0a;
    margin: 0;
}

.contactparent p{
    font-size: 16px;
    font-weight: 400;
    color: #4a4a4a;
    letter-spacing: 0px;
    line-height: 1.75;
    margin: 0.5rem 0 0 0;
}

.contactparent a{
    font-size: 16px;
    font-weight: 400;
    color: #1266e6;
    letter-spacing: 0px;
    line-height: 1.75;
}
/*Contact section end*/




/*Footer start*/
footer{
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 64rem;
    gap: 0;
    margin: 0 auto;
    padding: 2rem 0 8rem 0 ;  
    border-top: 1px solid #c4c4c4;
}

.footersocials{
    display: flex;
    gap: 1rem;
    margin: 0rem 0rem 1rem 0rem;
}

/*Font sizes*/
footer h1{
    font-size: 16px;
    font-weight: 400;
    color: #6885f0;
    text-align: center;
    margin: 0;
}

footer p{
    font-size: 15px;
    font-weight: 500;
    color: #030303;
    letter-spacing: 0px;
    line-height: 1.75;
    margin: 0;
}
/*Footer end*/
</style>
  