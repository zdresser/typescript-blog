import React from "react";
import { Card, CardBody } from "reactstrap";
import CenterPiece from "../CenterPiece";

export interface ILoadingProps {
  dotType?: string;
  children?: React.ReactNode;
}

export const Loading: React.FC<ILoadingProps> = (props) => {
  const { children, dotType } = props;
  return (
    <div className='text-center'>
      <div className='stage'>
        <div className={dotType} />
      </div>
      {children}
    </div>
  );
};

Loading.defaultProps = {
  dotType: "dot-bricks",
};

export interface ILoadingComponentProps {
  card?: boolean;
  dotType?: string;
  children?: React.ReactNode;
}

export const LoadingComponent: React.FC<ILoadingComponentProps> = (props) => {
  const { children, dotType, card } = props;
  if (card) {
    return (
      <CenterPiece>
        <Card className='text-center'>
          <CardBody>
            <Loading dotType={dotType}>{children}</Loading>
          </CardBody>
        </Card>
      </CenterPiece>
    );
  }
  return (
    <div className='text-center'>
      <div className='stage'>
        <div className={dotType} />
      </div>
      {children}
    </div>
  );
};
LoadingComponent.defaultProps = {
  card: true,
  dotType: "dot-bricks",
};

export default LoadingComponent;
