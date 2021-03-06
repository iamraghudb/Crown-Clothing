// import React from "react";
// import "./collection-preview.styles.scss";
// import CollectionItem from "./collection-item.component";
// // import Collection from "./collection.component";

// const CollectionPreview = ({ title, items }) => {
//   return (
//     <div className="collection-preview">
//       <h1 className="title">{title.toUpperCase()}</h1>
//       <div className="preview">
//         {items
//           .filter((item, idx) => idx < 4)
//           .map((item) => (
//             <CollectionItem key={item.id} item={item} />
//           ))}
//       </div>
//     </div>
//   );
// };

// export default CollectionPreview;

import React from "react";
import { withRouter } from "react-router-dom";
import CollectionItem from "./collection-item.component";

import "./collection-preview.styles.scss";

const CollectionPreview = ({ title, items, history, match }) => (
  <div className="collection-preview">
    <h1
      className="title"
      onClick={() => history.push(`${match.url}/${title.toLowerCase()}`)}
    >
      {title.toUpperCase()}
    </h1>
    <div className="preview">
      {items
        .filter((item, idx) => idx < 4)
        .map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </div>
  </div>
);

export default withRouter(CollectionPreview);
