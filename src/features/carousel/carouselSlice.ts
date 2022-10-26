import { createSlice } from "@reduxjs/toolkit";

import { CarouselState } from './types'
import { RootState } from "redux/store";

const initialState: CarouselState = {
    count: 1,
}

export const carouselSlice = createSlice({
    name: 'carousel',
    initialState,
    reducers: {
        previous: (state) => {
            state.count -= 1
        },
        current: (state, action) => {
            state.count = action.payload
        },
        next: (state) => {
            state.count += 1
        }
    }
})

export const selectCarousel = (state: RootState) => state.carousel

export const {
    previous,
    current,
    next
} = carouselSlice.actions

export default carouselSlice.reducer