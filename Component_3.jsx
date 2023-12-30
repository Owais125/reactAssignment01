import image_01 from "./assets/img/reactassignment.png"
import image_02 from "./assets/img/reactassignment2.png"
import image_03 from "./assets/img/reactassignment3.png"
// import image_3 from "./assets/img/react assignment"



const Component_3 =()=>{
    
    return(
        <>
        <div className="three">

        <div className="icon_1">  
          <img className="imgs" src={image_01} alt="" />
          <h3>Fully Responsive</h3>
          <p>This theme will look great on any <br /> device,no matter the size!</p>
        </div>

        <div className="icon_2"> 
            <img className="imgs" src={image_02} alt="" />
            <h3>BootStrap 5 Ready</h3>
            <p>Feautring the latest  build of the new <br />Bootstrap 5 fraework!</p>
        </div>

        <div className="icon_3"> 
           <img className="imgs" src={image_03} alt="" />
           <h3>Easy To Use</h3>
          <p>Ready to use with your own content, <br /> or customize the source files! </p>
        </div>


        </div>

        </>

    )

}
export {Component_3}