/* eslint-disable react/jsx-pascal-case */
import "./App.css";
import App_footer from "./component/js/App_footer.js";
import App_header from "./component/js/App_header.js";
import Food_post from "./component/js/Food_post.js";
// const food_post1 = {
//     type :"อาหารคาว",
//     menu :"ข้าวผัด",
//     info :"Lorem ipsum dolor sit amet consecteturadipisicing elit Saepe neque oditnam repsam vero sint commodi incidunt pariatur aliquam provident ab doloribus molestias!Lorem ipsum dolor sit amet consecteturadipisicing elit Saepe neque odit sedreiciendis eligendi quam earum aliquid nam repudiandae laboriosam vero sint commodi incidunt pariatur aliquam, provident ab doloribus molestias!Lorem  ",
//     img : "https://themomentum.co/wp-content/uploads/2019/08/TheMo_KRBB-Web.png"
// };
// const food_post2 = {
//     type :"อาหารหวาน",
//     menu :"บัวลอย",
//     info :"eque odit sedreiciendis eligendi quam earum aliquid nam repudiandae laboriosam vero sint commodi incidunt pariatur aliquam provident ab doloribus molestias!Lorem ipsum dolor sit amet consecteturadipisicing elit Saepe neque odit sedreiciendis eligendi quam earum aliquid nam repudiandae laboriosam vero sint commodi incidunt pariatur aliquam, provident ab doloribus molestias!Lorem  ",
//     img : "https://img.kapook.com/u/2022/wanwanat/1079595941.jpg"
// };
const foods = [
    {
        type :"อาหารคาว",
        menu :"ข้าวผัด",
        info :"Lorem ipsum dolor sit amet consecteturadipisicing elit Saepe neque oditnam repsam vero sint commodi incidunt pariatur aliquam provident ab doloribus molestias!Lorem ipsum dolor sit amet consecteturadipisicing elit Saepe neque odit sedreiciendis eligendi quam earum aliquid nam repudiandae laboriosam vero sint commodi incidunt pariatur aliquam, provident ab doloribus molestias!Lorem  ",
        img : "https://themomentum.co/wp-content/uploads/2019/08/TheMo_KRBB-Web.png",
        scoree:"0"
    },
    {
        type :"อาหารหวาน",
        menu :"บัวลอย",
        info :"eque odit sedreiciendis eligendi quam earum aliquid nam repudiandae laboriosam vero sint commodi incidunt pariatur aliquam provident ab doloribus molestias!Lorem ipsum dolor sit amet consecteturadipisicing elit Saepe neque odit sedreiciendis eligendi quam earum aliquid nam repudiandae laboriosam vero sint commodi incidunt pariatur aliquam, provident ab doloribus molestias!Lorem  ",
        img : "https://img.kapook.com/u/2022/wanwanat/1079595941.jpg",
        scoree:"0"
    }
];

function App() {
    
    document.body.style.backgroundColor = "rgb(105, 105, 105)";
    const food_element = foods.map((food,index) =>{return <Food_post key={index} food={food}/>;});
    
    return (
        <div className="App">
            <div className="container">
                <App_header/>
                {/* <Food_post food={food_post1}/>
                <Food_post food={food_post2}/> */}
                {food_element}
                <App_footer/>

            </div>
        </div>
    );
}

export default App;
