import { useRouteLoaderData, useLocation, Link } from "react-router-dom";

export default function ViewOffers() {
  const offers = useRouteLoaderData("root");
  const location = useLocation();

  return offers.map((offer) => (
    <div key={offer.id} className="view-offers">
      <h3>
        {offer.role} - <i>{offer.name}</i>
      </h3>
      <p>{offer.organization}</p>
      <Link to={`/offer/${offer.id}`}>
        {location.pathname}/{offer.id}
      </Link>
    </div>
  ));
}
