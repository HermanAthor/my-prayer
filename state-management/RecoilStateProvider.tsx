"use client";
import React, { ReactNode } from "react";
import { RecoilRoot } from "recoil";

const RecoilStateProvider = ({ children }: { children: ReactNode }) => {
  return <RecoilRoot>{children}</RecoilRoot>;
};

export default RecoilStateProvider;
