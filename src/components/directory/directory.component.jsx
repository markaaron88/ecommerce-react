import React from "react";
import MenuItem from "../menu-item/menu-item.component";
import './directory.styles.scss'


class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: "Mounts",
          imageUrl: "https://i.ibb.co/7SrfjJg/296850-1.jpg",
          id: 1,
          linkUrl: 'shop'
        },
        {
          title: "Pets",
          imageUrl: "https://i.ibb.co/NpJTk9G/pets.jpg",
          id: 2,
        },
        {
          title: "Toys",
          imageUrl: "https://i.ibb.co/Gs2p9nb/277221.jpg",
          id: 3,
        },
        {
          title: "Bundles",
          imageUrl: "https://i.ibb.co/f1b7Djn/881376.jpg",
          size: "large",
          id: 4,
        },
        {
          title: "Game Services",
          imageUrl: "https://i.ibb.co/6vmXSmM/277224.jpg",
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