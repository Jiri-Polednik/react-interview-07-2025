declare module 'recompose' {
  import React from 'react';

  export function compose<T>(...funcs: Function[]): (component: React.ComponentType<any>) => React.ComponentType<T>;
  export function connect<TStateProps = {}, TDispatchProps = {}, TOwnProps = {}>(
    mapStateToProps?: any,
    mapDispatchToProps?: any
  ): (component: React.ComponentType<any>) => React.ComponentType<TStateProps & TDispatchProps & TOwnProps>;
  export function withProps<TInnerProps, TOuterProps>(
    createProps: (ownerProps: TOuterProps) => TInnerProps
  ): (component: React.ComponentType<TInnerProps & TOuterProps>) => React.ComponentType<TOuterProps>;
  export function lifecycle<TProps>(
    spec: any
  ): (component: React.ComponentType<TProps>) => React.ComponentType<TProps>;
}