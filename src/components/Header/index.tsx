/* eslint-disable react-hooks/exhaustive-deps */
import { RouteObject, useLocation, useNavigate } from "react-router-dom";
import {
  HeaderContainer,
  LogoContainer,
  LogoSubtitle,
  LogoTitle,
  RoutesContainer,
  RoutesOptions,
} from "./styles";
import { useEffect, useMemo, useState } from "react";
import routes from "../../routes";

const Header = () => {
  const navigate = useNavigate();

  const [allRoutes, setAllRoutes] =
    useState<(RouteObject & { isSelectRouter?: boolean })[]>(routes);
  const location = useLocation();

  useEffect(() => {
    const selectRouter = () => {
      const allRoutesUpdate = allRoutes.map((r) => r);

      for (const index in allRoutesUpdate) {
        const route = allRoutesUpdate[index];

        allRoutesUpdate[index].isSelectRouter =
          route.path === location.pathname ? true : false;
      }

      setAllRoutes(allRoutesUpdate.map((r) => r));
    };

    selectRouter();
  }, [location]);

  const renderRoutesOptions = useMemo(() => {
    return allRoutes.map((route, index) => {
      const { id, isSelectRouter, path } = route;

      const redirectRouter = path || "";

      return (
        <RoutesOptions
          data-cy={id}
          key={index}
          isSelectRouter={!!isSelectRouter}
          onClick={() => navigate(redirectRouter)}
        >
          {id}
        </RoutesOptions>
      );
    });
  }, [allRoutes]);

  return (
    <HeaderContainer>
      <LogoContainer>
        <LogoSubtitle>Minha</LogoSubtitle>
        <LogoTitle>Temperatura</LogoTitle>
      </LogoContainer>

      <RoutesContainer>{renderRoutesOptions}</RoutesContainer>
    </HeaderContainer>
  );
};

export default Header;
