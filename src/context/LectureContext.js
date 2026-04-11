import { createContext, useState } from "react";

export const LectureContext = createContext(null);

export function LectureProvider({ children }) {
  const [lectureState, setLectureState] = useState({
    mic: true,
    camera: true,
    confusion: 0,
  });

  return (
    <LectureContext.Provider value={{ lectureState, setLectureState }}>
      {children}
    </LectureContext.Provider>
  );
}
