import React from "react";
import styled from "styled-components";
import CommentListItem from "./CommentListItem";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    & > * {
        :not(:last-child){
            margin-bottom: 16px;
        }
    }
`;

function CommentList(props) {
    const { comments } = props;
    return (
        <Wrapper>
            {comments.map((comments, index1)=> {
                return <CommentListItem key={comments.id} comments={comments}/>;
            })}
        </Wrapper>
    );
}

export default CommentList;
