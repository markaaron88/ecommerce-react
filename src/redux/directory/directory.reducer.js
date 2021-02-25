const INITIAL_STATE = {
    sections: [
        {
          title: "Toys",
          imageUrl: "https://i.ibb.co/dQhr0RR/dog-toy.jpg",
          id: 1,
          linkUrl: 'shop/toys',
          // <span>Photo by <a href="https://unsplash.com/@kobi_kadosh?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Kobi Kadosh</a> on <a href="https://unsplash.com/s/photos/dog-toy?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>
        },
        {
          title: "Clothing",
          imageUrl: "https://i.ibb.co/LpTYVy7/dog-clothing.jpg",
          id: 2,
          linkUrl: 'shop/clothing',
          // <span>Photo by <a href="https://unsplash.com/@theflouffy?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">FLOUFFY</a> on <a href="https://unsplash.com/s/photos/dog-clothing?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>
        },
        {
          title: "Beds",
          imageUrl: "https://i.ibb.co/nnLg89K/dog-bed.jpg",
          id: 3,
          linkUrl: 'shop/beds',
          // <span>Photo by <a href="https://unsplash.com/@nosoylasonia?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Juan Gomez</a> on <a href="https://unsplash.com/s/photos/dog-bed?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>
        },
        {
          title: "Food",
          imageUrl: "https://i.ibb.co/YyJ7T1D/food.jpg",
          size: "large",
          id: 4,
          linkUrl: 'shop/food'
        },
        {
          title: "Treats",
          imageUrl: "https://i.ibb.co/n3kxRr5/dog-treat.jpg",
          size: "large",
          id: 5,
          linkUrl: 'shop/treats'
           // <span>Photo by <a href="https://unsplash.com/@jlacy7?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">James Lacy</a> on <a href="https://unsplash.com/s/photos/dog-treat?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>
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