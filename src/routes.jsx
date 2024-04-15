import App from "./App";
import CreateOffer from "../components/CreateOffer";
import ViewOffers from "../components/ViewOffers";
import Offer from "../components/Offer";

export default [
  {
    path: "/",
    element: <App />,
    id: "root",
    loader: async () => {
      const response = await fetch("http://localhost:3000/offers");
      return response;
    },
    children: [
      {
        path: "create",
        element: <CreateOffer />,
      },
      {
        path: "offers",
        element: <ViewOffers />,
        action: async ({ request }) => {
          const formData = await request.formData();
          const response = await fetch("http://localhost:3000/offers", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(Object.fromEntries(formData)),
          });
          return response;
        },
      },
    ],
  },
  {
    path: "offer/:id",
    element: <Offer />,
    loader: async ({ params }) => {
      const response = await fetch(`http://localhost:3000/offers/${params.id}`);
      return response;
    },
    action: async ({ request, params }) => {
      const formData = await request.formData();
      const response = await fetch(
        `http://localhost:3000/offers/${params.id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(Object.fromEntries(formData)),
        }
      );
      return response;
    },
  },
];
