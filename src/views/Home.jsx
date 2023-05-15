import logo from "../assets/images/sketchflow_logo.png";
import { Link } from "react-router-dom";
import { MostRecent } from "../components/homeComponents/MostRecent";
import { mostRecentDrawsApi } from "../apis/DrawApi";
import { popularTagsApi } from "../apis/TagApi";
import { useEffect, useState } from "react";
import { PopularTags } from "../components/homeComponents/PopularTags";

export function Home() {
    const [drawings, setDrawings] = useState([]);
    const [tags, setTags] = useState([]);

    useEffect(() => {
        fetchDrawings();
    }, []);

    async function fetchDrawings() {
        const response = await mostRecentDrawsApi(localStorage.getItem("userId"), localStorage.getItem("token"));
        const data = await response.json();
        setDrawings(data.draws);

        const responseTags = await popularTagsApi(localStorage.getItem("userId"), localStorage.getItem("token"));
        const dataTags = await responseTags.json();
        setTags(dataTags.tags);
    }

    return (
        <section className="colorbox py-5">
            <div>
                <div className="container-fluid">
                    <div className="row py-4 pe-2">
                        <div className="col-md-2 text-center ">
                            <PopularTags
                                tags={tags}
                            />

                        </div>
                        <div className="col-md-10 bg-light text-center ">
                            <h3 className="py-3"> ILUSTRACIONES</h3>
                            <h6> Lo más reciente</h6>

                            <div className="row py-2 px-4" id="premium-container">
                                <div className="col-sm-3 ">
                                    <Link to="/Artwork/0" className="dropdown-item Link">
                                        <div className="mb-1 mt-1 border" >
                                            <img src={logo} width="200" height="200" className="rounded-3 float-left border bg-dark" alt="..." />
                                        </div>
                                        <h6 className="text-black"> Tituloo </h6>
                                        <label className="text-black"> Premium </label>
                                    </Link>
                                </div>

                                {/*drawings.map((draw) => (
                                    <DrawItem key={draw.id} draw={draw} />
                                ))*/}

                                <MostRecent
                                    drawings={drawings}
                                />


                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>


    );
}
