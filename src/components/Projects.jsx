import React from "react";
import image from '../assets/settings.png';
import netflix from '../assets/Netflix.png';
import todolist from '../assets/todolist.png';
import stopwatch from '../assets/stopwatch.png';
import expense from '../assets/Expense-tracker.png'

function Project () {
    return(

    <div>
        <p className="heading">Projects:</p>   
            <div className="project-main">
                <div className="project-image">
                    <img src={netflix} alt="projectimage"></img>
             </div>
            <div className="project-description">
                <p className="project-heading">Netflix Clone</p>
                <p>The "Netflix Clone" is a sophisticated web application meticulously crafted with React.js, replicating the renowned streaming platform's user interface and functionalities. This project offers a seamless browsing experience, allowing users to explore a vast library of movies and TV shows, search for specific titles, and view detailed information about each content item. Utilizing HTML for structure and CSS for styling, the app mirrors Netflix's sleek design and responsive layout. Powered by React.js, it ensures dynamic content rendering, smooth navigation, and real-time updates, providing users with an immersive streaming experience. This project showcases advanced proficiency in React.js development, UI/UX design, and API integration, making it an impressive addition to any portfolio.</p>
                <a href="https://shelbybosss.github.io/Netflix-Clone/" target="_blank"><button>View Live</button></a>
            </div>
    </div>
            <div className="project-main">
                <div className="project-image">
                    <img src={todolist} alt="projectimage"></img>
                </div>
            <div className="project-description">
                <p className="project-heading">CRUD App</p>
                <p>CRUD Todo App is a versatile web application developed using React.js, offering seamless management of tasks with Create, Read, Update, and Delete functionalities. Users can effortlessly add new tasks, mark them as completed, edit existing ones, or remove them entirely. Crafted with a user-friendly interface using HTML and styled with CSS, this app provides a visually appealing and intuitive task management experience. Leveraging the power of React.js, it ensures real-time updates and smooth interaction, enhancing productivity and organization. With its comprehensive features and polished design, this project demonstrates proficiency in React.js development and showcases practical skills for building dynamic web applications.</p>
                <a href="https://react-crud-app-omega.vercel.app/" target="_blank"><button>View Live</button></a>
            </div>
        </div>

        <div className="project-main">
                <div className="project-image">
                    <img src={expense} alt="projectimage"></img>
                </div>
            <div className="project-description">
                <p className="project-heading">Expense Tracker</p>
                <p>Expense Tracker is a comprehensive web application built with HTML, CSS, JavaScript, and React.js, designed to meticulously monitor your expenditures. With an intuitive user interface, it allows seamless input of expenses, categorization, and visualization of spending patterns. Users can effortlessly track their financial activities, set budgets, and analyze their expenditure trends through interactive charts and graphs. This project showcases proficiency in front-end technologies and demonstrates the ability to develop practical solutions for personal finance management, making it an ideal addition to any portfolio for its innovation and utility in everyday life.</p>
                <a href="https://expense-tracker-nine-livid-73.vercel.app/" target="_blank"><button>View Live</button></a>
            </div>
        </div>
        
        <div className="project-main">
                <div className="project-image">
                    <img src={stopwatch} alt="projectimage"></img>
                </div>
            <div className="project-description">
                <p className="project-heading">React-Stopwatch</p>
                <p>React Stopwatch" is a dynamic web application crafted using React.js, offering precise timekeeping functionality. This stopwatch allows users to start, pause, resume, and reset timing effortlessly. Built with clean HTML, styled with CSS for an appealing interface, and powered by React.js for seamless interactivity, it provides a user-friendly experience. With intuitive controls and real-time updates, it accurately measures elapsed time, making it ideal for tracking activities, sports events, or any timing needs. This project demonstrates proficiency in React.js development, showcasing the ability to create responsive and functional components, suitable for showcasing in a portfolio.</p>
                <a href="https://react-stopwatch-nine.vercel.app/" target="_blank"><button>View Live</button></a>
            </div>
        </div>

    </div> );
}

export default Project