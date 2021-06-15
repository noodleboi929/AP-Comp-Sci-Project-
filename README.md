<p align="center">
  <a href="https://www.gatsbyjs.com/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter">
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Gatsby minimal starter
</h1>
Akash Macha's Portfolio Website

DISCLAIMER: I am not good at spelling what so ever, so I apologise.

Hey Mrs.Tan and anyone else reading this. Thank you for an amazing year and I hope you enjoy my website. I wrote my website in Gatsby.js. Gatsby is a static website generator which relies on react and graphql. This was both an education and stressful experience becuase this was the first time I used Gatsby, or even React and I only began to undersatnd it towards the end of the project. So what is a static site? A static website uses server-side rendering to serve pre-built HTML, CSS, and JavaScript files to a web browser, in contrast to traditional dynamic sites that work by rendering the webpage at the time of the request. Static sites enable you to decouple your content repository and front-end interface, giving you greater flexibility in how your content is served. (Credit to : "https://www.sanity.io/what-is-a-static-site" for the static site explanation). So essentially Gatsby uses react to pre-configure your website, which allows for faster loading times and more efficent websites. Something that is intersting is that if you go into inspect elements on my webpage, it will appear in HTML,CSS, and Javascript. Gatsby also has another really cool facet: graphql. I am not extremely knowlegable regarding grapghql, but throughout this project I learned that graphql allows you to query or get information from third party websites like CMSs ans APIs. You can then put this information on your website in whatever way you want. You must be wondering, why does that matter. It allows you to create website in which you can upload content to from a CMS such as contentful without having to directly edit the code of your website. Honestly, I really enjoyed using Gatsby and I think it has brought my coding skills to the next level.

Alright, Website Time.

So it is generally considered bad coding if you repeat the same code over and over again. In Gatsby you make reuseable content, which allows you to store code in a file, you can repeatedly call the code within the file if you format it properly. I applied this concept to my Header.js, Footer.js, and Layout.js. My Header contains my logo image and my nav bar and my footer contains my fake copyright date. I then 'combine' my Header and Footer files in the Layout file. I can use this to make Layout tags which are similar to div tags but with more functionality. So what ever is sandwhiched between my layout tags is then formatted into three layers. The header, the content inside the layout tags, and the footer tag. The Header.js, Footer,js, and Layout.js are all stored in the components folder so they don't accidently get configured as indivisual pages.

Another file in my components folder is post.jsx. I have to give credit to Cy here becuase most of it is quite similar to his code, but I do have his consent to use it. Post.jsx is specific to my blog page. Essentially, I use graphql to query for information from my CMS, Contentful. I then use the information I get from Contentful and format it into a blog like post. Since this is a reuseable element that is implemented in the structure of blog.js, it is stored in the components folder.

Now onto the pages folder. All of the JS files in this folder are the pages you actually see on my website, so these are the websites that are actually configured. Index.js is more homepage and it provides general info surrounding the website and the purpose of the website. contact.js contains a variety of icons that leads to additional website from which you can contact me from, such as gmail, twitter, facebook, linkedin, etc. Blog.js is essentaily personal blog in which I post personal content about my life. The blog page is the inly page that uses the post.jsx file in the components folder. Finally, about.js is pretty much a small reflection of my past and future events.

All the scss and css files you see scattered across the components folder and pages folder are external styling sheets. It is really hard to do inline styling in Gatsby, except for Michael, so it is recommended to use external styling sheets.

Thanks for reading the entire README file. I really enjoyed this project and I would definetly reccomend to future classes. Thank you for such a great opputunity and for such a great year. Please continue to be the awesome teacher you are and I hope you conitinue to inspire students to love computer science like you did for me.
