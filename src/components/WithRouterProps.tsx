import React, { ComponentType } from "react";
import {
  NavigateFunction,
  Params,
  useLocation,
  useNavigate,
  useParams,
  HistoryRouterProps,
  Location,
} from "react-router-dom";

interface RouterProps {
  navigate: NavigateFunction;
  readonly params: Params<string>;
  location: Location;
  mainState: any;
  mainActions: any;
}

export type WithRouterProps<T> = T & RouterProps;
type OmitRouter<T> = Omit<T, keyof RouterProps>;

export function withRouter<T>(
  Component: ComponentType<OmitRouter<T> & RouterProps>
) {
  return (props: any) => {
    const location = useLocation();
    const navigate = useNavigate();
    const params = useParams();
    return (
      <Component
        location={location}
        navigate={navigate}
        params={params}
        {...props}
      />
    );
  };
}