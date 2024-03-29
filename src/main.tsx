import React from "react";
import ReactDOM from "react-dom/client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import router from "./routing/routes";
import { RouterProvider } from "react-router-dom";

const queryClient = new QueryClient();
//   {
//   defaultOptions: {
//     queries: {
//       retry: 3,
//       gcTime: 300000, //cacheTime 5m
//       staleTime: 10 * 1000, // 10s
//       refetchOnWindowFocus: false,
//       refetchOnReconnect: false,
//       refetchOnMount: false,
//     },
//   },
// }

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}></RouterProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  </React.StrictMode>
);
