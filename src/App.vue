<template>
  <div id="app">
    <nav>
      <header>
        <ul class="navigation">
            <li id="logo">Shaffaq.dev</li>
        </ul>
        <ul class="navigation">
          <!--<router-link to="/">Home</router-link> 
          <router-link to="/about">About</router-link>-->
            <a href="#projectsection"><li>Home</li></a>
            <a href="#contactsection"><li>About</li></a>
            <a href="#projectsection"><li>Projects</li></a>
            <a href="#contactsection"><li>Contact</li></a>
        </ul>
        <ul class="navigation">
            <li id="resumedownload">Resume</li>
        </ul>
        <ul class="hamburgericon">
            <li><img src="Images/more.png" alt="Hamburger" width="20px" height="20"></li> <!--<a href="https://www.flaticon.com/free-icons/hamburger" title="hamburger icons">Hamburger icons created by feen - Flaticon</a>-->
        </ul>
    </header>

    </nav>
    <!-- This is where the route components will be injected -->
    <router-view></router-view>


    <footer>
      <p>Built by Shaffaq with ❤</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  
}

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
    letter-spacing: 0px;
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
    letter-spacing: 0px;
    line-height: 1.25; /*1.25 x Font size*/
    color: #0a0a0a;
    margin: 0.5rem auto 0 0;
    padding: 0;
}

.flexleft p{
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 0px;
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
    letter-spacing: 0px;
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
    letter-spacing: 0px;
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
    letter-spacing: 0px;
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
    letter-spacing: 0px;
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
