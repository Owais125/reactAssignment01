import image_001 from "./assets/img/testimonials-1.jpg"
import image_002 from "./assets/img/testimonials-2.jpg"
import image_003 from "./assets/img/testimonials-3.jpg"


const Component_7 =()=>{
    return (
        <>
        <div className="com_7">
            <h1>What people are saying....</h1>
        </div>
        <div className="com_7m">
            <div>
                <div className="com_7e" >
                <img className="imagesss" src={image_001} alt="" />
                <h3>Margaret E.</h3>
                <p>"This is fantastic! Thanks so much guys"</p>
                </div>

            </div>
            <div>
                <div className="com_7e">
                <img className="imagesss" src={image_002} alt="" />
                <h3>Fred S.</h3>
                <p>"Bootstrap is amazing.I've been using it <br/> to create lots of super nice landing <br/> pages"</p>

                </div>
            </div>
            <div>
                <div className="com_7e">
                <img className="imagesss" src={image_003} alt="" />
                <h3>Sarah W E.</h3>
                <p>"Thanks so much for making these free <br/> resources available to us!"</p>
                </div>
            </div>
        </div>
        </>
    )

}
export {Component_7}