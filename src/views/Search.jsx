import { searchFilterArtworkApi } from "../apis/DrawApi";
import { useEffect, useState } from "react";
import { FilterSort } from "../components/searchComponents/FilterSort";
import { FilterLimit } from "../components/searchComponents/FilterLimit";
import { FilterSearch } from "../components/searchComponents/FilterSearch";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { SearchButton } from "../components/searchComponents/SearchButton";
import { useHistory } from "react-router-dom";
import { Result } from "../components/searchComponents/Result";

export function Search() {
    const [drawings, setDrawings] = useState([]);

    const params = useParams();
    const history = useHistory();
    const [limit, setLimit] = useState(100);
    const [orderBy, setOrderBy] = useState("asc");
    const [search, setSearch] = useState("");

    useEffect(() => {
        updateFilter();
        fetchDrawings();
    }, [params]);

    async function updateFilter() {
        if(params.search !== undefined){
            setSearch(params.search);
        }

        if(params.orderBy !== undefined){
            setOrderBy(params.orderBy);
        }

        if(params.limit !== undefined){
            setLimit(params.limit);
        }
    }

    async function advancedSearch() {
        history.push("/Search/" + search + "/" + orderBy + "/" + limit);
    }

    async function fetchDrawings() {
        const response = await searchFilterArtworkApi(localStorage.getItem("userId"), limit, orderBy, search, localStorage.getItem("token"));
        const data = await response.json();
        setDrawings(data.draws);
    }

    return (
        <section className="colorbox py-5">
            <div>
                <div className="container-fluid">
                    <div className="row py-4 pe-2">
                        <div className="col-md-2 text-center ">
                            <div className="vh-100 py-2  px-2 pe-2 box bg-light scrollbar thin ">
                                <h3>FILTRO</h3>
                                <hr />
                                <FilterSort
                                    value={orderBy}
                                    onChange={(e) => { setOrderBy(e.target.value); }}
                                />
                                <hr />
                                <FilterSearch
                                    value={search}
                                    onChange={(e) => { setSearch(e.target.value); }}
                                />
                                <hr />
                                <FilterLimit
                                    value={limit}
                                    onChange={(e) => { setLimit(e.target.value); }}
                                />
                                <hr />
                                <SearchButton
                                    onClick={() => { advancedSearch(); }}
                                />
                            </div>
                        </div>

                        <div className="col-md-10 bg-light text-center ">
                            <h3 className="py-3"> ILUSTRACIONES</h3>
                            <h6> Resultado... </h6>
                            <div className="row py-2 px-4" id="premium-container">
                                <Result
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