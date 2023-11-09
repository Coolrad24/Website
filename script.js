const blogPosts = [
  {
    title: 'My Journey into RF Engineering',
    Author: 'Suleymaan Ahmad Says:',
    content: 'My Journey into RF Engineering: As a student pursuing a Bachelors of Science in Electrical and Computer Engineering, my academic journey has been a captivating exploration of theoretical concepts and their tangible applications in the real world. One particular area that has continually piqued my interest is modulation—a fundamental aspect of Radio Frequency (RF) engineering that seamlessly bridges the gap between theory and the practical implementation of wireless communication. In the classroom, my fascination with modulation unfolded as I delved into its intricacies, unraveling the ways in which it enables the transmission of information over the airwaves. From grasping the foundational basics to immersing myself in advanced techniques, my coursework provided me with a robust understanding of the principles governing the modulation of signals. Little did I anticipate that this knowledge would serve as the catalyst for a profound and enduring interest in the realm of RF engineering.  My journey into the practical domain of RF engineering commenced during my tenure as a Software Development Intern at the American Academy of Pediatrics. Although my primary focus was on crafting software solutions, the exposure to real-world applications of RF technology became increasingly evident. Witnessing how wireless communication played a pivotal role in optimizing performance and elevating customer satisfaction showcased the immediate and tangible impact of RF engineering on everyday life. The seamless integration of modulation principles into my professional experience became even more apparent during my time as a Course Assistant at the University of Illinois. Here, I took on the role of assisting fellow students in understanding introductory electronics. By guiding my peers through the complexities of modulation, I not only reinforced my own comprehension but also highlighted the profound significance of this concept in diverse applications, ranging from seamless data transmission to the intricate workings of modern telecommunications.However, it was my transformative experience at OTCR Consulting, a premier student-led consulting firm, that truly ignited the flames of my passion for RF engineering. Engaging in diverse projects, encompassing market analysis and innovative business solutions, I witnessed firsthand how modulation principles played a pivotal role in the design and optimization of wireless communication systems. The exposure to different industries and the practical application of theoretical knowledge within a real-world context significantly deepened my appreciation for the transformative power and boundless potential of RF engineering. Reflecting on the amalgamation of my academic and professional journey, it is evident that what initially began as a spark of interest in modulation has now evolved into a genuine and fervent passion for RF engineering. The seamless integration of theoretical knowledge acquired in the classroom with its practical applications in the workplace has been a deeply rewarding experience. Looking forward, I am eager to continue my exploration of the fascinating world of RF engineering, leveraging my enriched academic background and real-world experiences to contribute meaningfully to the dynamic field of wireless communication. In conclusion, the journey from grasping theoretical concepts in the classroom to navigating the intricate waves of RF engineering has been a fulfilling adventure. As I eagerly anticipate the next chapter in this journey, I am confident that my passion for RF engineering will continue to drive me towards new heights of innovation and discovery in the realm of wireless communication.'
  },
  {
    title: 'Blog Post 2',
    Author: 'Suleymaan Ahmad Says:',
    content: 'N/A'
  }
];

const blogPostsContainer = document.getElementById('blog-posts');

// Function to display blog posts
function displayBlogPosts() {
  blogPostsContainer.innerHTML = ''; // Clear existing content

  for (const post of blogPosts) {
    const postDiv = document.createElement('div');
    postDiv.classList.add('blog-post');

    const title = document.createElement('h3');
    title.textContent = post.title;
    const author = document.createElement('h3');
    title.textContent = post.Author;

    const content = document.createElement('p');
    content.textContent = post.content;

    postDiv.appendChild(title);
    postDiv.appendChild(author);
    postDiv.appendChild(content);

    blogPostsContainer.appendChild(postDiv);
  }
}

// Call the function to display blog posts
displayBlogPosts();
