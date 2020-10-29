import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import CollectionOveriewContainer from "./collections-overview.container";
import CollectionPageContainer from "./collection.container";
import { connect } from "react-redux";
import { fetchCollectionsStart } from "../redux/shop/shop.actions";

const ShopPage = ({ fetchCollectionsStart, match }) => {
  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);

  return (
    <div className="shop-page">
      <Route
        exact
        path={`${match.path}`}
        component={CollectionOveriewContainer}
      />
      <Route
        path={`${match.path}/:collectionId`}
        component={CollectionPageContainer}
      />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
