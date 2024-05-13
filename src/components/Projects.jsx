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
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit facilis consequatur ducimus possimus nemo rem architecto nostrum dignissimos, quam est iusto quidem, placeat minima! Necessitatibus vitae doloribus recusandae impedit sunt blanditiis! Nemo, suscipit quidem eius maiores repellendus ab laudantium placeat ducimus magnam in quas quia pariatur libero minus minima praesentium vitae atque ex cumque esse magni commodi quae! Qui nesciunt assumenda recusandae. Esse aliquid ipsum temporibus iste velit minima doloremque? Omnis illum tempora tenetur quisquam recusandae incidunt. Minima, repudiandae magnam. Cupiditate eveniet, non dicta, pariatur sunt quos deleniti vel eos corporis excepturi nam porro ullam quo modi ea inventore enim!</p>
                <a href="https://shelbybosss.github.io/Netflix-Clone/" target="_blank"><button>View Live</button></a>
            </div>
    </div>
            <div className="project-main">
                <div className="project-image">
                    <img src={todolist} alt="projectimage"></img>
                </div>
            <div className="project-description">
                <p className="project-heading">CRUD App</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit facilis consequatur ducimus possimus nemo rem architecto nostrum dignissimos, quam est iusto quidem, placeat minima! Necessitatibus vitae doloribus recusandae impedit sunt blanditiis! Nemo, suscipit quidem eius maiores repellendus ab laudantium placeat ducimus magnam in quas quia pariatur libero minus minima praesentium vitae atque ex cumque esse magni commodi quae! Qui nesciunt assumenda recusandae. Esse aliquid ipsum temporibus iste velit minima doloremque? Omnis illum tempora tenetur quisquam recusandae incidunt. Minima, repudiandae magnam. Cupiditate eveniet, non dicta, pariatur sunt quos deleniti vel eos corporis excepturi nam porro ullam quo modi ea inventore enim!</p>
                <a href="https://react-crud-app-omega.vercel.app/" target="_blank"><button>View Live</button></a>
            </div>
        </div>

        <div className="project-main">
                <div className="project-image">
                    <img src={expense} alt="projectimage"></img>
                </div>
            <div className="project-description">
                <p className="project-heading">Expense Tracker</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit facilis consequatur ducimus possimus nemo rem architecto nostrum dignissimos, quam est iusto quidem, placeat minima! Necessitatibus vitae doloribus recusandae impedit sunt blanditiis! Nemo, suscipit quidem eius maiores repellendus ab laudantium placeat ducimus magnam in quas quia pariatur libero minus minima praesentium vitae atque ex cumque esse magni commodi quae! Qui nesciunt assumenda recusandae. Esse aliquid ipsum temporibus iste velit minima doloremque? Omnis illum tempora tenetur quisquam recusandae incidunt. Minima, repudiandae magnam. Cupiditate eveniet, non dicta, pariatur sunt quos deleniti vel eos corporis excepturi nam porro ullam quo modi ea inventore enim!</p>
                <a href="https://expense-tracker-nine-livid-73.vercel.app/" target="_blank"><button>View Live</button></a>
            </div>
        </div>
        
        <div className="project-main">
                <div className="project-image">
                    <img src={stopwatch} alt="projectimage"></img>
                </div>
            <div className="project-description">
                <p className="project-heading">React-Stopwatch</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit facilis consequatur ducimus possimus nemo rem architecto nostrum dignissimos, quam est iusto quidem, placeat minima! Necessitatibus vitae doloribus recusandae impedit sunt blanditiis! Nemo, suscipit quidem eius maiores repellendus ab laudantium placeat ducimus magnam in quas quia pariatur libero minus minima praesentium vitae atque ex cumque esse magni commodi quae! Qui nesciunt assumenda recusandae. Esse aliquid ipsum temporibus iste velit minima doloremque? Omnis illum tempora tenetur quisquam recusandae incidunt. Minima, repudiandae magnam. Cupiditate eveniet, non dicta, pariatur sunt quos deleniti vel eos corporis excepturi nam porro ullam quo modi ea inventore enim!</p>
                <a href="https://react-stopwatch-nine.vercel.app/" target="_blank"><button>View Live</button></a>
            </div>
        </div>

    </div> );
}

export default Project