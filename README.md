# Sander´s Portofolio

This is my portofolio, in this project  
i have some of mye school projects,  
some small project that show a little of what  
i can do and my CV for potenials employer.

For this Portofolio i have used Bootstrap, HTML and Vanilla Javascript.

My website is live at : https://www.sanhamm.no/Portofolio/
Since i currently have trouble with JS on that page, her is my netlify: https://sanhamm-portofolio.netlify.app/

My wireframe: https://www.figma.com/file/tCkjSgOH6kNU70UFjQ6CrB/Untitled?node-id=0%3A1&t=FyNuy6X3taK9PKnl-1
Prototype: https://www.figma.com/proto/tCkjSgOH6kNU70UFjQ6CrB/Untitled?page-id=0%3A1&node-id=1%3A2&viewport=216%2C350%2C0.1&scaling=min-zoom&starting-point-node-id=1%3A2


## About me
 This is a short summary of me as a person, a picture of me and a div of my skills so far.

## School Project
 Here i have gathered some of my bigger school projects, i want to show of my work asweel as my progress of the 2 years i have gone at Noroff.  
 you can see that mye earliest projects are only with HTML and CSS and that my latest (so far) is with HTML, Tailwind and Javascript.

## Fun Project
 Here i will in the future gather som small but fun project to show of my skills in different kind of programming languages.  
 Right now i only have 3 different that we have worked on at school, i have designed them but not write the JS, this is just to not have a empty page.  
 My own project will come soon enough

## CV
The last page is my CV, it´s nice to have incase someone will be interested in me.

## walkthrough

For this project i started initalising the project, i opened my terminal i VScode and wrote

````
npm init -y
````

After this i installed Bootstrap since this was the framework i wanted to use this time. in terminal i wrote 

````
npm install bootstrap 
````

Since bootsrap need some modifing i had to use Sass to modifie som code. in terminal i wrote

````
sass --watch scss/custom.scss:css/style.css
````

This was to make a file that takes my code in the sass file and push in to bootstrap.  
But you need to run it so i went in to the package.json file and added this:

````
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "sass": "sass --watch scss/custom.scss:css/style.css"
  },
````

Then i just open my terminal and wrote

````
npm run sass
````

