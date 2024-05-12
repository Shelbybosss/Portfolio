import React from "react";
import image from '../assets/settings.png';

function Project () {
    return(

    <div>
        <p className="heading">Projects:</p>   
            <div className="project-main">
                <div className="project-image">
                    <img src={image} alt="projectimage"></img>
             </div>
            <div className="project-description">
                <p className="project-heading">Project Name</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit facilis consequatur ducimus possimus nemo rem architecto nostrum dignissimos, quam est iusto quidem, placeat minima! Necessitatibus vitae doloribus recusandae impedit sunt blanditiis! Nemo, suscipit quidem eius maiores repellendus ab laudantium placeat ducimus magnam in quas quia pariatur libero minus minima praesentium vitae atque ex cumque esse magni commodi quae! Qui nesciunt assumenda recusandae. Esse aliquid ipsum temporibus iste velit minima doloremque? Omnis illum tempora tenetur quisquam recusandae incidunt. Minima, repudiandae magnam. Cupiditate eveniet, non dicta, pariatur sunt quos deleniti vel eos corporis excepturi nam porro ullam quo modi ea inventore enim!</p>
                <a href="#"><button>View Live</button></a>
            </div>
    </div>
            <div className="project-main">
                <div className="project-image">
                    <img src={image} alt="projectimage"></img>
                </div>
            <div className="project-description">
                <p className="project-heading">Project Name</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit facilis consequatur ducimus possimus nemo rem architecto nostrum dignissimos, quam est iusto quidem, placeat minima! Necessitatibus vitae doloribus recusandae impedit sunt blanditiis! Nemo, suscipit quidem eius maiores repellendus ab laudantium placeat ducimus magnam in quas quia pariatur libero minus minima praesentium vitae atque ex cumque esse magni commodi quae! Qui nesciunt assumenda recusandae. Esse aliquid ipsum temporibus iste velit minima doloremque? Omnis illum tempora tenetur quisquam recusandae incidunt. Minima, repudiandae magnam. Cupiditate eveniet, non dicta, pariatur sunt quos deleniti vel eos corporis excepturi nam porro ullam quo modi ea inventore enim!</p>
                <a href="#"><button>View Live</button></a>
            </div>
        </div>
        
        <div className="project-main">
                <div className="project-image">
                    <img src={image} alt="projectimage"></img>
                </div>
            <div className="project-description">
                <p className="project-heading">Project Name</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit facilis consequatur ducimus possimus nemo rem architecto nostrum dignissimos, quam est iusto quidem, placeat minima! Necessitatibus vitae doloribus recusandae impedit sunt blanditiis! Nemo, suscipit quidem eius maiores repellendus ab laudantium placeat ducimus magnam in quas quia pariatur libero minus minima praesentium vitae atque ex cumque esse magni commodi quae! Qui nesciunt assumenda recusandae. Esse aliquid ipsum temporibus iste velit minima doloremque? Omnis illum tempora tenetur quisquam recusandae incidunt. Minima, repudiandae magnam. Cupiditate eveniet, non dicta, pariatur sunt quos deleniti vel eos corporis excepturi nam porro ullam quo modi ea inventore enim!</p>
                <a href="#"><button>View Live</button></a>
            </div>
        </div>

    </div> );
}

export default Project