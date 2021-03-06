import React, { useEffect } from "react";
import { Route, Switch, useHistory } from "react-router";
import styled from "styled-components";
import Aside from "../../components/Aside/Aside";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ForumAdminPanel from "./ForumAdminPanel/ForumAdminPanel";
import BlogAdminPanel from "./BlogAdminPanel/BlogAdminPanel";
import CoursesAdminPanel from "./CoursesAdminPanel/CoursesAdminPanel";
import ChallengesAdminPanel from "./ChallengeAdmin/ChallengesAdminPanel";

const AdminPanel = () => {
  const history = useHistory();

  const { isUserLogged } = useSelector((state) => state.login);

  useEffect(() => {
    if (!isUserLogged) {
      history.push("/blog");
    }
  }, [isUserLogged, history]);

  return (
    <>
      <StyledAdminPanel>
        <StyledHeader>Admin Panel</StyledHeader>
        <StyledLink to="/blog">Go to site</StyledLink>
      </StyledAdminPanel>
      <StyledAdminContainer>
        <Aside />
        <Switch>
          <Route path="/admin/blog" exact>
            <BlogAdminPanel />
          </Route>
          <Route path="/admin/forum" exact>
            <ForumAdminPanel />
          </Route>
          <Route path="/admin/courses" exact>
            <CoursesAdminPanel />
          </Route>
          <Route>
            <ChallengesAdminPanel />
          </Route>
        </Switch>
      </StyledAdminContainer>
    </>
  );
};

const StyledAdminPanel = styled.header`
  width: 100%;
  height: 60px;
  background-color: #0360eb;
  color: white;
  display: flex;
  font-size: 10px;
  justify-content: space-between;
  align-items: center;
`;

const StyledHeader = styled.header`
  margin-left: 20px;
  font-size: 20px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 16px;
  margin-right: 20px;
`;

const StyledAdminContainer = styled.section`
  display: flex;
  width: 100%;
`;

export default AdminPanel;
