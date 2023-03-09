import {useState} from "react";
import "./style.css";
import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import RecipeType from "./components/main/RecipeType";
import {data as defaultData} from "./helpers/data.js"
import RecipeList from "./pages/recipe_list";
import {dataa as defaultDataa} from "./pages/RecipeListData"

function App() {
    const [data, setData] = useState(defaultData);
    const [dataa, setDataa] = useState(defaultDataa)
    return(
        <div className="App">
            <Navbar/>

            {/* <Header/>

            <div className="app">

                <h1 className="title">Recipes</h1>

                <div className="types">
                    {
                        data.map((value, index) =>  <RecipeType key ={index} data={value}/>)
                    }
                </div>

            </div>*/}

            <div className="recipe_container">
                <div className="recipe_list">
                    {
                        dataa.map((value, index) => <RecipeList key={index} dataa={value}/> )
                    }
                </div>
            </div>
        </div>
    )

}
export default App;