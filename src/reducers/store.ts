import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { TypedUseSelectorHook, useSelector } from "react-redux/es/exports";

export const store = configureStore({
    reducer: {

    }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
//định nghĩa hàm useAppDispatch kiểu dữ liệu trả về là AppDispatch, sử dụng hàm có sẵn useDispatch (tạo hàm mới nhưng chức năng giông hàm useDispatch)
export const useAppDispatch: () => AppDispatch = useDispatch
//định nghĩa useAppSelector kiểu dữ liệu trả về là TypedUseSelectorHook<RootState>,  sử dụng hàm có sẵn useSelector (tạo hàm mới nhưng chức năng giông hàm useSelector)

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector