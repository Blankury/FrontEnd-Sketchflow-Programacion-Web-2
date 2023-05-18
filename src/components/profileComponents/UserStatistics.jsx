import React from "react";

export const UserStatistics = ({ statistics }) => {
    return (
        <div className="d-flex justify-content-end text-center py-1">
            <div>
                <p className="mb-1 h3">{statistics.draws}</p>
                <p className=" text-muted mb-0">Ilustraciones</p>
            </div>
            <div className="px-3">
                <p className="mb-1 h3">{statistics.followedUser}</p>
                <p className=" text-muted mb-0">Followers</p>
            </div>
            <div>
                <p className="mb-1 h3">{statistics.followerUser}</p>
                <p className=" text-muted mb-0">Following</p>
            </div>
        </div>
    );
};
