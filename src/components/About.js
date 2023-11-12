import React from 'react';
import Owner from './assets/about.jpg';
import './About.css';

export default function About() {
  return (
    <div className='about-container'>
      <img src={Owner} alt='Owner of Little Lemon' width={750} height={500}/>
      <div className='about-text'>
        <h2>How It All Started</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mi ex, volutpat ac sollicitudin at, 
        estibulum id sapien. Proin vel mollis lorem. Ut non dictum nulla. Pellentesque tempor tincidunt tellus ut rhoncus.
        Etiam pretium neque orci, non tempus est congue vitae. Curabitur feugiat commodo mi, quis molestie augue convallis eget. 
        Pellentesque molestie risus sit amet diam scelerisque, porta lobortis mi aliquet. Integer molestie ut quam sit amet imperdiet. 
        Sed laoreet vestibulum massa quis maximus. Etiam sagittis velit a enim eleifend vulputate. Duis id ipsum urna. Sed tellus risus, suscipit nec diam vehicula, ornare scelerisque ipsum. Vivamus eget ex eget arcu tristique finibus. Maecenas eu nulla a leo sollicitudin vestibulum. Etiam consequat id nisl et consectetur. Donec at turpis quis dui egestas ullamcorper.</p>
      </div>
    </div>
  )
}
