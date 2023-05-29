import { ProfileImage } from "../components/profileComponents/profileImage";
import { useEffect, useState } from "react";
import { UserName } from "../components/profileComponents/UserName";
import { FollowButton } from "../components/profileComponents/FollowButton";
import { UserStatistics } from "../components/profileComponents/UserStatistics";
import { Description } from "../components/profileComponents/Description";
import { CreationDate } from "../components/profileComponents/CreationDate";
import { NavTab } from "../components/profileComponents/NavTab";
import { NavArtwork } from "../components/profileComponents/NavArtwork";
import { NavBookmark } from "../components/profileComponents/NavBookmark";
import { NavContact } from "../components/profileComponents/NavContact";
import { followApi, getStatistics, getUser } from "../apis/profileApi";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { bookmarksApi, otherDrawingsApi } from "../apis/DrawApi";
import { Toast } from "../components/toast/Toast";
import { SendMessage } from "../components/profileComponents/SendMessage";

export function Profile() {
    const params = useParams();
    const [drawings, setDrawings] = useState([]);
    const [bookmarks, setBookmarks] = useState([]);
    const [statistics, setStatistics] = useState([]);
    const [isFollowing, setIsFollowing] = useState(false);
    const [toastText, setToastText] = useState("");

    const [userId, setUserId] = useState("");
    const [profilePhoto, setProfilePhoto] = useState("");
    const [coverPhoto, setCoverPhoto] = useState("");
    const [userName, setUserName] = useState("");
    const [description, setDescription] = useState("");
    const [creationDate, setCreationDate] = useState("");
    const [twitterLink, setTwitterLink] = useState("");
    const [facebookLink, setFacebookLink] = useState("");
    const [email, setEmail] = useState("");

    useEffect(() => {
        loadUserProfile();
    }, [params.userId]);

    async function loadUserProfile(){
        const response = await getUser(params.userId);
        const data = await response.json();

        const responseD = await otherDrawingsApi(localStorage.getItem("userId"), params.userId, null, localStorage.getItem("token"));
        const dataD = await responseD.json();
        setDrawings(dataD.draws);

        const responseB = await bookmarksApi(localStorage.getItem("userId"), params.userId, null, localStorage.getItem("token"));
        const dataB = await responseB.json();
        setBookmarks(dataB.bookmarks);

        await loaderStatistics();

        const date = new Date(data.user.creationDate);
        const dateFormat = date.getDay() + "/" + date.getDate() + "/" + date.getFullYear();

        setUserId(data.user.userId);
        setProfilePhoto(data.user.profilePhoto);
        setCoverPhoto(data.user.coverPhoto);
        setUserName(data.user.userName);
        setDescription(data.user.description);
        setCreationDate(dateFormat);
        setTwitterLink(data.user.twitterLink);
        setFacebookLink(data.user.facebookLink);
        setEmail(data.user.email);

        data.user.followedUser.forEach(follower => {
            if(follower.followerId === Number(localStorage.getItem("userId"))){
                setIsFollowing(true);
            }
        });
    }

    async function loaderStatistics(){
        const responseS = await getStatistics(params.userId);
        const dataS = await responseS.json();
        setStatistics(dataS.userStatistics._count);
    }

    async function followUser(){
        const response = await followApi(localStorage.getItem("userId"), params.userId, !isFollowing, localStorage.getItem("token"));
        const data = await response.json();
        setIsFollowing(data.follow);

        setToastText(data.result);

        await loaderStatistics();

        var x = document.getElementById("snackbar");
        // Add the "show" class to DIV
        x.className = "show";

        // After 3 seconds, remove the show class from DIV
        setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
    }

    return (
        <section className="colorbox">
            <div className="gradient-custom-2 vw-100 container bg-light">
                <div className="py-3 h-100">
                    <div className="row h-100">
                        <div className="d-flex flex-row bg-dark" style={{  width: '100%',height: '20em' , backgroundImage: "url(" + coverPhoto + ")", backgroundSize: "100%" }} >
                            <div className="ms-3 d-flex flex-column" style={{ width: '20em', marginTop: "10em" }} >
                                <ProfileImage
                                    value={profilePhoto}
                                />
                                <UserName
                                    value={userName}
                                />
                            </div>
                        </div>
                        <div className="p-4 text-black">
                            <FollowButton
                                userId={userId}
                                isFollowing={isFollowing}
                                onClick={() => followUser()}
                            />
                            <SendMessage
                                userId={userId}
                            />
                            <UserStatistics
                                statistics={statistics}
                            />
                        </div>
                        <hr />
                        <div className="card-body p-4 text-black">
                                    <Description
                                        value={description}
                                    />
                                    
                                    <CreationDate
                                        value={creationDate}
                                    />

                                    <NavTab
                                    />
                                    
                                    <div className="tab-content" id="myTabContent">
                                        <NavArtwork
                                            drawings={drawings}
                                        />

                                        <NavBookmark
                                            bookmarks={bookmarks}
                                        />

                                        <NavContact
                                            twitterLink={twitterLink}
                                            facebookLink={facebookLink}
                                            email={email}
                                        />
                                    </div>
                                </div>
                        <Toast
                            text={toastText}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}