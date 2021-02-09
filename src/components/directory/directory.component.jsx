import React from "react";
import MenuItem from "../menu-item/menu-item.component";
import './directory.styles.scss'

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: "skins",
          imageUrl: "https://i.ibb.co/173M5Hs/wraith.jpg",
          id: 1,
          linkUrl: 'skins'
        },
        {
          title: "heirlooms",
          imageUrl: "https://i.ibb.co/MsdYbwN/heirloom-octane.png",
          id: 2,
        },
        {
          title: "news",
          imageUrl: "https://i.ibb.co/D7Rz8mf/newspaper.jpg",
          id: 3,
        },
        {
          title: "characters",
          imageUrl: "https://i.ibb.co/BBrnQhC/ApexChar.jpg",
          size: "large",
          id: 4,
        },
        {
          title: "maps",
          imageUrl: "https://i.ibb.co/gwm9Vwp/apexMap.jpg",
          size: "large",
          id: 5,
        },
      ],
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;