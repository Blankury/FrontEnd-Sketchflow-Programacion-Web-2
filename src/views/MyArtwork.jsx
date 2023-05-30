import logo from "../assets/images/sketchflow_logo.png";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { deleteDrawingApi, otherDrawingsApi } from "../apis/DrawApi";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { NavArtwork } from "../components/myArtworkComponent/NavArtwork";
import { Toast } from "../components/toast/Toast";

export function MyArtwork() {
    const params = useParams();
    const [toastText, setToastText] = useState("");
    const [drawings, setDrawings] = useState([]);

    useEffect(() => {
        fetchDrawings();
    }, []);

    async function fetchDrawings() {
        const response = await otherDrawingsApi(localStorage.getItem("userId"), params.userId, null, localStorage.getItem("token"));
        const data = await response.json();
        setDrawings(data.draws);
    }

    async function deleteDrawing(drawId) {
        const response = await deleteDrawingApi(localStorage.getItem("userId"), drawId, localStorage.getItem("token"));
        const data = await response.json();

        setToastText(data.result);

        var x = document.getElementById("snackbar");
        // Add the "show" class to DIV
        x.className = "show";

        // After 3 seconds, remove the show class from DIV
        setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);

        await fetchDrawings();
    }

    return (
        <section className="colorbox py-5">
            <div>
                <div className="container-fluid mt-4">
                    <div className="p-4">
                        <div className="bg-light text-center ">
                            <h3 className="py-3"> MIS ILUSTRACIONES</h3>

                            <NavArtwork
                                drawings={drawings}
                                deleteDrawing={deleteDrawing}
                            />

                        </div>
                    </div>
                </div>
            </div>

            <Toast
                text={toastText}
            />

        </section>
    );
}