import { useAppSelector, useAppDispatch } from "redux/hooks";

import { selectCarousel } from "features/carousel/carouselSlice";

export const NavButtons = () => {
    const { count } = useAppSelector(selectCarousel);
    const dispatch = useAppDispatch()

    let colors = ["bg-red-500", "bg-blue-500", "bg-green-500", "bg-yellow-500"];


  return {count, dispatch, colors}
}







