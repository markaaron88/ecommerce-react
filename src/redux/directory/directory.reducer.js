const INITIAL_STATE = {
    sections: [
        {
          title: "Mounts",
          imageUrl: "https://i.ibb.co/7SrfjJg/296850-1.jpg",
          id: 1,
          linkUrl: 'shop/mounts'
        },
        {
          title: "Pets",
          imageUrl: "https://i.ibb.co/NpJTk9G/pets.jpg",
          id: 2,
          linkUrl: 'shop/pets'
        },
        {
          title: "Toys",
          imageUrl: "https://i.ibb.co/Gs2p9nb/277221.jpg",
          id: 3,
          linkUrl: 'shop/toys'
        },
        {
          title: "Bundles",
          imageUrl: "https://i.ibb.co/f1b7Djn/881376.jpg",
          size: "large",
          id: 4,
          linkUrl: 'shop/bundles'
        },
        {
          title: "Game Services",
          imageUrl: "https://i.ibb.co/6vmXSmM/277224.jpg",
          size: "large",
          id: 5,
          linkUrl: 'shop/gameservices'
        },
      ],
    };
    const directoryReducer = (state =  INITIAL_STATE, action) => {
        switch ((action.type)) {
            default:
            return state;
        }
    }

export default directoryReducer;