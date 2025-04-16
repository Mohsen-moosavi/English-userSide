// src/hooks/useAppSelector.ts
import { useSelector, TypedUseSelectorHook } from "react-redux";
import { RootState } from "./../redux/store";

// تایپ‌دهی به useSelector
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default useAppSelector;